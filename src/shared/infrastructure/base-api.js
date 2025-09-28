import axios from "axios";

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

/**
 * Base API class to handle HTTP requests using Axios
 * @class
 * @example
 * const api = new BaseApi();
 * api.http.get('/endpoint').then(response => console.log(response.data));
 */
export class BaseApi {
    /**
     * @private
     * Axios HTTP client instance
     * @type {import('axios').AxiosInstance}
     */
    #http;

    /**
     * Initializes the Axios HTTP client with the base URL from environment variables
     */
    constructor() {
        this.#http = axios.create({
            baseURL: platformApi
        });
    }

    /**
     * Gets the Axios HTTP client instance
     * @returns {axios.AxiosInstance}
     */
    get http() {
        return this.#http;
    }

}
