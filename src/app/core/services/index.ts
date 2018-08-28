import { JsonApiService } from './json-api.service';

import { ProjectService } from './project.service';

export const services = [
    JsonApiService,

    ProjectService
];

export * from './json-api.service';
export * from './project.service';