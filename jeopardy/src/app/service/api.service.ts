import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:5000'; // Change to express server URL
  API_URL = this.BASE_URL + '/api/v1'; // API endpoint paths

  constructor(private httpClient: HttpClient) { }

  login(model) {
    return this.httpClient.post(`${this.BASE_URL}/api-token-auth/`, model); // Exact API endpoint for auth
    // TODO: Pass back 200 for good login, 401 for unathenticated in the backend
  }
  questions() {
    return this.httpClient.get(`${this.BASE_URL}/allQuestions/`); // Get all questions in database
  }
}
