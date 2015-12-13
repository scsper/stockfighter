import request from 'superagent';

const API_KEY = process.env.STOCKFIGHTER_API_KEY;
const BASE_URL = "https://api.stockfighter.io/ob/api"

/**
 * Wrapper method to make requests.
 *
 * @param {String} method HTTP method for the request, i.e. 'GET', 'POST', 'PUT', etc
 * @param {String} url The url to make the request to
 *
 * @return {Promise} An unresolved promise that will contain the data of the request.
 */
export function makeRequest(method, endpoint) {
    const url = BASE_URL + endpoint;

    return new Promise(function(resolve, reject) {
        request(method, url).end(function(error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}
