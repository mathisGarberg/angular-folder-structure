import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';

const routes = {
    projects: '/projects.json'
}

@Injectable()
export class ProjectService {

    constructor(private jsonApiService: JsonApiService) {}

    getAll(): Observable<Project[]> {
        return this.jsonApiService
            .fetch(routes.projects);
    }

}