import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private categoriesData = new BehaviorSubject({ default: 'default' });
  categoryMessage = this.categoriesData.asObservable();

  private teamsData = new BehaviorSubject({ default: 'default' });
  teamsMessage = this.teamsData.asObservable();

  constructor() { }

  changeCategories(message: object) {
    this.categoriesData.next(message);
  }
  changeTeams(message: object) {
    this.teamsData.next(message);
  }
}
