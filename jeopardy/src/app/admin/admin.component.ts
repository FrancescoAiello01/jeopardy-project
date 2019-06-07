import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admin page';

  constructor(private authService: AuthService, private router: Router, private data: DataService) { }

  categories = ['Geography', 'Art', 'Technology', 'Economics', 'Science', 'World History', 'Pop Culture'];
  questionData: object;

  textarea = "hello";

  logout() {
      this.authService.setUnauthenticated();
      this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.data.categoryMessage.subscribe(message => this.questionData = message);
  }

}
