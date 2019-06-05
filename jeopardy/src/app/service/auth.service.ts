import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: Observable<string>;

  constructor() { }

  static getAuthenticated() {
    return localStorage.getItem('isAuthenticated');
  }

  setAuthenticated(response) {
    localStorage.setItem('isAuthenticated', '1');
    console.log(localStorage.getItem('isAuthenticated')); // Log this
  }

  setUnauthenticated() {
    localStorage.removeItem('isAuthenticated');
  }
}
