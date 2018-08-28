import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { config } from '../app-config';

@Injectable()
export class JsonApiService {

    constructor(private httpClient: HttpClient) { }

    fetch(url): Observable<any> {
        return this.httpClient.get(this.getBaseUrl() +  config.API_URL + url)
            .pipe(
                delay(100),
                catchError(this.handleError)
            );
    }

    private getBaseUrl() {
        return `${location.protocol}//${location.hostname + (location.port ? ':' + location.port : '')}/`;
    }

    private handleError(error: any) {
        let errorMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        
        return Observable.throw(errorMsg);
    }

}