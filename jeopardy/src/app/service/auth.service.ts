import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: Observable<string>;
  private _token: string = null;
  private _tokenObserver: any;

  constructor() {
    this.token = new Observable(observer => {
      this._tokenObserver = observer;
    });
  }

  static getToken() {
    return localStorage.getItem('isAuthenticated');
  }

  getAuthenticated() {
    return localStorage.getItem('isAuthenticated');
  }

  setAuthenticated(response) {
    localStorage.setItem('isAuthenticated', '1');
    this._tokenObserver.next(this._token);
  }

  setUnauthenticated() {
    localStorage.removeItem('isAuthenticated');
  }
}
