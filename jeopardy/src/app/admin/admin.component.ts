import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { QuestionDialog } from '../jeopardy/jeopardy.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admin page';

  constructor(private authService: AuthService, private router: Router, private data: DataService, private apiService: ApiService) { }

  categories = ['Geography', 'Art', 'Technology', 'Economics', 'Science', 'World History', 'Pop Culture'];
  questionAmount = [0, 1, 2, 3];
  questionDataTemp: object;


  logout() {
      this.authService.setUnauthenticated();
      this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.apiService.questions().subscribe((response) => {
      this.questionDataTemp = response;
    });
  }
}
