import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private categoriesData = new BehaviorSubject({});
  categoryMessage = this.categoriesData.asObservable();

  private teamsData = new BehaviorSubject({});
  teamsMessage = this.teamsData.asObservable();

  constructor() { }

  changeCategories(message: object) {
    this.categoriesData.next(message);
  }
  changeTeams(message: object) {
    this.teamsData.next(message);
  }
}
