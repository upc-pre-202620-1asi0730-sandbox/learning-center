/**
 * Pinia store for managing categories and tutorials in the publishing context.
 * Encapsulates all CRUD operations and state management for categories and tutorials.
 *
 * @module usePublishingStore
 */
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {PublishingApi} from "../infrastructure/publishing-api.js";
import {CategoryAssembler} from "../infrastructure/category.assembler.js";
import {TutorialAssembler} from "../infrastructure/tutorial.assembler.js";
import {Category} from "../domain/model/category.entity.js";
import {Tutorial} from "../domain/model/tutorial.entity.js";

const publishingApi = new PublishingApi();

/**
 * Store for publishing context.
 */
const usePublishingStore = defineStore('publishing', () => {
    /**
     * List of category entities.
     * @type {import('vue').Ref<Category[]>}
     */
    const categories = ref([Category]);
    /**
     * List of tutorial entities.
     * @type {import('vue').Ref<Tutorial[]>}
     */
    const tutorials = ref([Tutorial]);
    /**
     * List of errors encountered during API operations.
     * @type {import('vue').Ref<Error[]>}
     */
    const errors = ref([]);
    /**
     * Whether categories have been loaded from the API.
     * @type {import('vue').Ref<boolean>}
     */
    const categoriesLoaded = ref(false);
    /**
     * Whether tutorials have been loaded from the API.
     * @type {import('vue').Ref<boolean>}
     */
    const tutorialsLoaded = ref(false);
    /**
     * Number of loaded categories.
     * @type {import('vue').ComputedRef<number>}
     */
    const categoriesCount = computed(() => {
        return categoriesLoaded ? categories.value.length : 0;
    });
    /**
     * Number of loaded tutorials.
     * @type {import('vue').ComputedRef<number>}
     */
    const tutorialsCount = computed(() => {
        return tutorialsLoaded ? tutorials.value.length : 0;
    });

    /**
     * Fetches categories from the API and updates state.
     * @function
     * @returns {void}
     */
    function fetchCategories() {
        publishingApi.getCategories().then(response => {
            categories.value = CategoryAssembler.toEntitiesFromResponse(response);
            categoriesLoaded.value = true;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Fetches tutorials from the API and updates state.
     * @function
     * @returns {void}
     */
    function fetchTutorials() {
        publishingApi.getTutorials().then(response => {
            tutorials.value = TutorialAssembler.toEntitiesFromResponse(response);
            tutorialsLoaded.value = true;
            if(categoriesLoaded.value) setCategoriesForTutorials();
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Adds a new category via the API and updates state.
     * @function
     * @param {Category} category - The category to add.
     * @returns {void}
     */
    function addCategory(category) {
        publishingApi.createCategory(category).then(response => {
            const resource = response.data;
            const newCategory = CategoryAssembler.toEntityFromResource(resource);
            categories.value.push(newCategory);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Updates an existing category via the API and updates state.
     * @function
     * @param {Category} category - The category to update.
     * @returns {void}
     */
    function updateCategory(category) {
        publishingApi.updateCategory(category).then(response => {
            const resource = response.data;
            const updatedCategory = CategoryAssembler.toEntityFromResource(resource);
            const index = categories.value.findIndex(c => c["id"] === updatedCategory.id);
            if (index !== -1) categories.value[index] = updatedCategory;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Deletes a category via the API and updates state.
     * @function
     * @param {Category} category - The category to delete.
     * @returns {void}
     */
    function deleteCategory(category) {
        publishingApi.deleteCategory(category).then(() => {
            const index = categories.value.findIndex(c => c["id"] === category.id);
            if (index !== -1) categories.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Gets a category by its ID.
     * @function
     * @param {number|string} id - The category ID.
     * @returns {Category|undefined} The found category or undefined.
     */
    function getCategoryById(id) {
        return categories.value.find(category => category["id"] === id);
    }

    /**
     * Adds a new tutorial via the API and updates state.
     * @function
     * @param {Tutorial} tutorial - The tutorial to add.
     * @returns {void}
     */
    function addTutorial(tutorial) {
        publishingApi.createTutorial(tutorial).then(response => {
            const resource = response.data;
            const newTutorial = TutorialAssembler.toEntityFromResource(resource);
            tutorials.value.push(newTutorial);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Updates an existing tutorial via the API and updates state.
     * @function
     * @param {Tutorial} tutorial - The tutorial to update.
     * @returns {void}
     */
    function updateTutorial(tutorial) {
        publishingApi.updateTutorial(tutorial).then(response => {
            const resource = response.data;
            const updatedTutorial = TutorialAssembler.toEntityFromResource(resource);
            const index = tutorials.value.findIndex(t => t["id"] === updatedTutorial.id);
            if (index !== -1) tutorials.value[index] = updatedTutorial;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Deletes a tutorial via the API and updates state.
     * @function
     * @param {Tutorial} tutorial - The tutorial to delete.
     * @returns {void}
     */
    function deleteTutorial(tutorial) {
        publishingApi.deleteTutorial(tutorial).then(() => {
            const index = tutorials.value.findIndex(t => t["id"] === tutorial.id);
            if (index !== -1) tutorials.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Gets a tutorial by its ID.
     * @function
     * @param {number|string} id - The tutorial ID.
     * @returns {Tutorial|undefined} The found tutorial or undefined.
     */
    function getTutorialById(id) {
        return tutorials.value.find(tutorial => tutorial["id"] === id);
    }

    /**
     * Sets the category object for each tutorial based on its categoryId.
     * @function
     * @returns {void}
     */
    function setCategoriesForTutorials() {
        tutorials.value.forEach(tutorial => {
            const category = getCategoryById(tutorial["categoryId"]);
            if (category) tutorial.category = category;
        });
    }

    return {
        categories,
        tutorials,
        errors,
        categoriesLoaded,
        tutorialsLoaded,
        categoriesCount,
        tutorialsCount,
        fetchCategories,
        fetchTutorials,
        addCategory,
        updateCategory,
        deleteCategory,
        getCategoryById,
        addTutorial,
        updateTutorial,
        deleteTutorial,
        getTutorialById,
        setCategoriesForTutorials
    }
});

export default usePublishingStore;

