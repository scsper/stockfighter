import {makeRequest} from '../api/make_request';

export function answer() {
    makeRequest('GET', '/heartbeat').then(response => {
        console.log(response.body);
    });
}
