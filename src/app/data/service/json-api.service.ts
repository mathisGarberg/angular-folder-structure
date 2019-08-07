import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import data from './json/data.json';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  get(url: string): Observable<any> {
    switch (url) {
      case '/projects':
        return of(data.projects);
      default: 
        const id = url.substring(url.lastIndexOf('/') + 1);
        return of(data.projects[id]);
    }
  }
}
