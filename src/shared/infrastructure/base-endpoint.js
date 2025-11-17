/**
 * BaseEndpoint class to handle common API endpoint operations.
 * @class
 * @example
 * const api = new BaseApi();
 * const usersEndpoint = new BaseEndpoint(api, '/users');
 * usersEndpoint.getAll().then(response => console.log(response.data));
 */
export class BaseEndpoint {
    /**
     * @param {BaseApi} baseApi - The base API instance.
     * @param {string} endpointPath - The endpoint path.
     */
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    /**
     * @returns {Promise} A promise that resolves with the response.
     */
    getAll() {
        return this.http.get(this.endpointPath);
    }

    /**
     * @param {string|number} id - The resource ID.
     * @returns {Promise} A promise that resolves with the response.
     */
    getById(id) {
        return this.http.get(`${this.endpointPath}/${id}`);
    }

    /**
     * @param {Object} resource - The resource to create.
     * @returns {Promise} A promise that resolves with the response.
     */
    create(resource) {
        return this.http.post(this.endpointPath, resource);
    }

    /**
     * @param {string|number} id - The resource ID.
     * @param {Object} resource - The resource to update.
     * @returns {Promise} A promise that resolves with the response.
     */
    update(id, resource) {
        return this.http.put(`${this.endpointPath}/${id}`, resource);
    }

    /**
     * @param {string|number} id - The resource ID.
     * @returns {Promise} A promise that resolves with the response.
     */
    delete(id) {
        return this.http.delete(`${this.endpointPath}/${id}`);
    }
}