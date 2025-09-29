/**
 * Represents a Category entity.
 * @class
 */
export class Category {
    /**
     * Creates a new Category instance.
     * @param {Object} params - The parameters for the category.
     * @param {?number} [params.id=null] - The unique identifier for the category.
     * @param {string} [params.name=''] - The name of the category.
     */
    constructor({ id = null, name = ''}) {
        this.id = id;
        this.name = name;
    }

}