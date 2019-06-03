import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    username: '',
    password: ''
  };

  submitted = false;

  constructor(private apiService: ApiService, private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.login(this.model).subscribe((response) => {
      this.authService.setAuthenticated(response);
      this.router.navigate(['/admin']);
    });
    this.submitted = true;
  }
}
