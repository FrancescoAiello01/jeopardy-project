import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Injectable({ providedIn: 'root' })
export class DataService {

  private categoriesData = new BehaviorSubject({});
  categoryMessage = this.categoriesData.asObservable();

  private teamsData = new BehaviorSubject({});
  teamsMessage = this.teamsData.asObservable();

  allQuestions: any;

  constructor(private apiService: ApiService) { }

  changeCategories(message: object) {
    this.categoriesData.next(message);
  }
  changeTeams(message: object) {
    this.teamsData.next(message);
  }
  async getQuestions() {
    this.apiService.questions().subscribe(async (response) => {
      await response;
      this.allQuestions = response;
      console.log(this.allQuestions)
    });
  }
}
