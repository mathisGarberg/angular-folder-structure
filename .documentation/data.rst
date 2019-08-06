Data Module
===========

The data module is a top level directory and holds the schema (models/entities) and services (repositories)
for data consumed by the application.

By default there are two subdirectories::

  ~/src/app/data
    /schema
    /service 

The schema directory holds the class definition files for data structures.  An example data structure:

.. code-block:: ts

  export class Project {
    link: string;
    title: string;
    thumbnail: string;
  }

The service directory holds the services for fetching data.  The service files are not necessarily 
a 1:1 match with schema files.  An example service file:

.. code-block:: ts

  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  import { Project } from '../schema/project';
  import { ApiService } from './api.service';
  
  const routes = {
      projects: '/projects',
      project: (id: number) =>  `/projects/${id}`
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ProjectService {
      constructor(
        private apiService: ApiService) {}
  
      getAll(): Observable<Array<Project>> {
          return this.apiService.get(routes.projects);
      }
  
      getSingle(id: number): Observable<Project> {
          return this.apiService.get(routes.project(id));
      }
  }


Multiple Data Sources
---------------------

If your application consumes data from more than one source then the data directory should be restructured
to contain subdirectories for each data source.  Do not create multiple modules for each data source::

  ~/src/app/data
    /data-source-one
      /schema
      /service
    /data-source-two
      /schema
      /service
    /data.module.ts


Schema Naming Standard
----------------------

A schema file is very much like an entity file in an Object Relational Mapper.  This schema file is central
to your application's consumption of data and therefore does not need cursory decorators such as calling it
`ProjectSchema` or `ProjectModel`.  Schemas are special because they are the only plain-named class in the 
application.
