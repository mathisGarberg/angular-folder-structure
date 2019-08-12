import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private jsonApiService: JsonApiService
  ) {}
}
