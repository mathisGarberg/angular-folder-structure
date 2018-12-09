import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';
import { ApiService } from './api.service';

const routes = {
    projects: '/projects'
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(
      private jsonApiService: JsonApiService,
      private apiService: ApiService) {}

    getAll(): Observable<Project[]> {
        return this.apiService.get(routes.projects);
    }

}
