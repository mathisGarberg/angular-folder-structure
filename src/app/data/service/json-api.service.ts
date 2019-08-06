import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  constructor(private httpClient: HttpClient) {}

  fetch(url): Observable<any> {
    return this.httpClient.get(this.getBaseUrl() + environment.API_URL + url).pipe(
      delay(100),
      catchError(this.handleError)
    );
  }

  private getBaseUrl() {
    return `${location.protocol}//${location.hostname +
      (location.port ? ':' + location.port : '')}/`;
  }

  private handleError(error: any) {
    const errorMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';

    return throwError(errorMsg);
  }
}
