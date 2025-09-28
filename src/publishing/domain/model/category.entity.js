/**
 * Represents a Category entity.
 * @class
 */
export class Category {
    /**
     * @type {?number}
     * @private
     */
    #id;
    /**
     * @type {string}
     * @private
     */
    #name;

    /**
     * Creates a new Category instance.
     * @param {Object} params - The parameters for the category.
     * @param {?number} [params.id=null] - The unique identifier for the category.
     * @param {string} [params.name=''] - The name of the category.
     */
    constructor({ id = null, name = ''}) {
        this.#id = id;
        this.#name = name;
    }

    /**
     * Gets the category ID.
     * @returns {?number} The unique identifier for the category.
     */
    get id() {
        return this.#id;
    }

    /**
     * Gets the category name.
     * @returns {string} The name of the category.
     */
    get name() {
        return this.#name;
    }

    /**
     * Sets the category name.
     * @param {string} name - The new name for the category.
     */
    set name(name) {
        this.#name = name;
    }
}