import {Category} from "./category.entity.js";

/**
 * Represents a Tutorial entity.
 * @class
 */
export class Tutorial {
    /**
     * @type {?number}
     * @private
     */
    #id;
    /**
     * @type {string}
     * @private
     */
    #title;
    /**
     * @type {string}
     * @private
     */
    #summary;
    /**
     * @type {?number}
     * @private
     */
    #categoryId;
    /**
     * @type {?Category}
     * @private
     */
    #category;

    /**
     * Creates a new Tutorial instance.
     * @param {Object} params - The parameters for the tutorial.
     * @param {?number} [params.id=null] - The unique identifier for the tutorial.
     * @param {string} [params.title=''] - The title of the tutorial.
     * @param {string} [params.summary=''] - The summary of the tutorial.
     * @param {?number} [params.categoryId=null] - The category ID associated with the tutorial.
     * @param {?Category} [params.category=null] - The Category instance associated with the tutorial.
     */
    constructor({ id = null, title = '', summary = '', categoryId = null, category = null }) {
        this.#id = id;
        this.#title = title;
        this.#summary = summary;
        this.#categoryId = categoryId;
        this.#category = category instanceof Category ? category : null;
    }

    /**
     * Gets the tutorial ID.
     * @returns {?number} The unique identifier for the tutorial.
     */
    get id() {
        return this.#id;
    }

    /**
     * Gets the tutorial title.
     * @returns {string} The title of the tutorial.
     */
    get title() {
        return this.#title;
    }

    /**
     * Sets the tutorial title.
     * @param {string} title - The new title for the tutorial.
     */
    set title(title) {
        this.#title = title;
    }

    /**
     * Gets the tutorial summary.
     * @returns {string} The summary of the tutorial.
     */
    get summary() {
        return this.#summary;
    }

    /**
     * Sets the tutorial summary.
     * @param {string} summary - The new summary for the tutorial.
     */
    set summary(summary) {
        this.#summary = summary;
    }

    /**
     * Gets the category ID associated with the tutorial.
     * @returns {?number} The category ID.
     */
    get categoryId() {
        return this.#categoryId;
    }

    /**
     * Sets the category ID associated with the tutorial.
     * @param {?number} categoryId - The new category ID.
     */
    set categoryId(categoryId) {
        this.#categoryId = categoryId;
    }
}