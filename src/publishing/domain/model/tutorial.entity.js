import {Category} from "./category.entity.js";

/**
 * Represents a Tutorial entity.
 * @class
 */
export class Tutorial {


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
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.categoryId = categoryId;
        this.category = category instanceof Category ? category : null;
    }

}