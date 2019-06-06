import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

const GAME_DATA = [
  {
    category: 'Geography',
    questionOne: 'question',
    answerOne: 'answer',
    questionTwo: 'question',
    answerTwo: 'answer',
    questionThree: 'question',
    answerThree: 'answer',
    questionFour: 'question',
    answerFour: 'answer',
    questionFive: 'question',
    answerFive: 'answer',
  }
];

@Component({
  selector: 'app-jeopardy',
  templateUrl: './Jeopardy.component.html',
  styleUrls: ['./Jeopardy.component.css']
})
export class JeopardyComponent {
  title = 'Jeopardy page';

  constructor(private data: DataService) { }
  categoryList = ['Geography', 'Art', 'Technology', 'Economics', 'Science', 'World History', 'Pop Culture'];
  categories: object;
  teams: object;

  categoryOne = this.categoryList[this.categories[0]];

  totals = [[100, 200, 300, 400, 500], [100, 200, 300, 400, 500], [100, 200, 300, 400, 500], [100, 200, 300, 400, 500]];
  indices = [0, 1, 2, 3];

  ngOnInit() {
    this.data.categoryMessage.subscribe(message => this.categories = message);
    this.data.teamsMessage.subscribe(message => this.teams = message);
  }
}
