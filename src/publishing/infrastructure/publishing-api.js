import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath    = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath     = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

/**
 * PublishingApi class to handle API operations for Publishing context.
 * Extends BaseApi and provides CRUD operations for categories and tutorials.
 *
 * @class
 * @extends BaseApi
 * @example
 * const publishingApi = new PublishingApi();
 * publishingApi.getCategories().then(response => console.log(response.data));
 */
export class PublishingApi extends BaseApi {
    /**
     * @type {BaseEndpoint}
     * @private
     */
    #categoriesEndpoint;
    /**
     * @type {BaseEndpoint}
     * @private
     */
    #tutorialsEndpoint;

    /**
     * Initializes endpoints for categories and tutorials.
     */
    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
        this.#tutorialsEndpoint = new BaseEndpoint(this, tutorialsEndpointPath);
    }

    /**
     * Fetches all categories.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the categories' response.
     */
    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    /**
     * Fetches a category by its ID.
     * @param {number|string} id - The ID of the category.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the category response.
     */
    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    /**
     * Creates a new category.
     * @param {Object} resource - The category data to create.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the created category response.
     */
    createCategory(resource) {
        return this.#categoriesEndpoint.create(resource);
    }

    /**
     * Updates an existing category.
     * @param {Object} resource - The category data to update (must include id).
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the updated category response.
     */
    updateCategory(resource) {
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a category by its ID.
     * @param {number|string} id - The ID of the category to delete.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the delete response.
     */
    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }

    /**
     * Fetches all tutorials.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the tutorials' response.
     */
    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    /**
     * Fetches a tutorial by its ID.
     * @param {number|string} id - The ID of the tutorial.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the tutorial response.
     */
    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    /**
     * Creates a new tutorial.
     * @param {Object} resource - The tutorial data to create.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the created tutorial response.
     */
    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    /**
     * Updates an existing tutorial.
     * @param {Object} resource - The tutorial data to update (must include id).
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the updated tutorial response.
     */
    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a tutorial by its ID.
     * @param {number|string} id - The ID of the tutorial to delete.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the delete response.
     */
    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}
