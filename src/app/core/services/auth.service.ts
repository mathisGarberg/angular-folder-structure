import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

import { User } from '../../core/models/user.model';

export class ILoginContext {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'Mathis',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor() { }

  login(loginContext: ILoginContext): Observable<User> {
    if (
      loginContext.username === defaultUser.username &&
      loginContext.password === defaultUser.password) {
        return of(defaultUser);
    }

    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }

}
