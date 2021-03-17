import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUrl } from '../constants/constants';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  getLoginCredential() {
    return this._httpClient.get<ILogin>(LoginUrl);
  }

  signIn(user: any) {
    sessionStorage.setItem('user', user);
  }

  signOut() {
    sessionStorage.removeItem('user');
  }
}
