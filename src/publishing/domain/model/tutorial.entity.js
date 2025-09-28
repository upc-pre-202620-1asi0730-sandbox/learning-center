export class Tutorial {
    #id
    #title
    #summary
    #categoryId

    constructor({ id = null, title = '', summary = '', categoryId = null }) {
        this.#id = id;
        this.#title = title;
        this.#summary = summary;
        this.#categoryId = categoryId;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get summary() {
        return this.#summary;
    }

    set summary(summary) {
        this.#summary = summary;
    }

    get categoryId() {
        return this.#categoryId;
    }

    set categoryId(categoryId) {
        this.#categoryId = categoryId;
    }   
}