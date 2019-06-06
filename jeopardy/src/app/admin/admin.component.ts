import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admin page';

  constructor(private authService: AuthService, private router: Router) { }

  categories = ['Geography', 'Art', 'Technology', 'Economics', 'Science', 'World History', 'Pop Culture'];

  textarea = "hello";

  logout() {
      this.authService.setUnauthenticated();
      this.router.navigate(['/login']);
  }

}
