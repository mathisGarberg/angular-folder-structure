import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';

const routes = {
    users: '/users'
}

@Injectable()
export class UserService {

    constructor(private jsonApiService: JsonApiService) {}

    getAll() {
        // this.
    }

}