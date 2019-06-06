import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
  MatCheckboxModule, MatListModule, MatToolbarModule, MatCardModule, MatTableModule, MatDialogModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './home/teams/teams.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { JeopardyComponent, QuestionDialog } from './jeopardy/jeopardy.component';
import { AuthGuard } from './guard/auth.guard';


const appRoutes: Routes = [
  {
    path: 'jeopardy',
    component: JeopardyComponent,
    data: { title: 'Jeopardy Game' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { title: 'Admin' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Jeopardy Project' }
  },
  { path: '**', component: HomeComponent } // Add page not found component
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TeamsComponent,
    CategoriesComponent,
    LoginComponent,
    AdminComponent,
    QuestionDialog,
    JeopardyComponent
  ],
  entryComponents: [
    QuestionDialog
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
