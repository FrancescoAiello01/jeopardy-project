import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-Jeopardy',
  templateUrl: './Jeopardy.component.html',
  styleUrls: ['./Jeopardy.component.css']
})
export class JeopardyComponent {
  title = 'Jeopardy page';

  constructor(private data: DataService) { }

  categories: object;
  teams: object;

  ngOnInit() {
    this.data.categoryMessage.subscribe(message => this.categories = message);
    this.data.teamsMessage.subscribe(message => this.teams = message);
  }
}
