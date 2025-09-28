import {Tutorial} from "../domain/model/tutorial.entity.js";

/**
 * Assembler for converting API resources to Tutorial entities.
 * @class
 */
export class TutorialAssembler {
    /**
     * Converts a plain resource object to a Tutorial entity.
     * @param {Object} resource - The resource object representing a tutorial.
     * @returns {Tutorial} The corresponding Tutorial entity.
     */
    static toEntityFromResource(resource) {
        return new Tutorial({...resource})
    }

    /**
     * Converts an API response to an array of Tutorial entities.
     * Handles both array and object response formats.
     * Logs an error and returns an empty array if the response status is not 200.
     *
     * @param {import('axios').AxiosResponse} response - The API response containing tutorial data.
     * @returns {Tutorial[]} Array of Tutorial entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['tutorials'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}