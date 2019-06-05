import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://3693f5d5-e738-4813-88e5-d01b1475de0e.mock.pstmn.io'; // Change to express server URL
  API_URL = this.BASE_URL + '/api/v1'; // API endpoint paths

  constructor(private httpClient: HttpClient) { }

  login(model) {
    return this.httpClient.post(`${this.BASE_URL}/api-token-auth/`, model); // Exact API endpoint for auth
    // TODO: Pass back 200 for good login, 401 for unathenticated in the backend
  }
  questions() {

  }
}
