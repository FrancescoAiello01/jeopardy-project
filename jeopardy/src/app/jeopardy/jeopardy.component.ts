import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-jeopardy',
  templateUrl: './Jeopardy.component.html',
  styleUrls: ['./Jeopardy.component.css']
})
export class JeopardyComponent {
  title = 'Jeopardy page';

  constructor(private data: DataService, private dialog: MatDialog) { }
  categories: object;
  teams: object;

  totals = [100, 200, 300, 400, 500];
  indices = [0, 1, 2, 3, 4];

  ngOnInit() {
    this.data.categoryMessage.subscribe(message => this.categories = message);
    this.data.teamsMessage.subscribe(message => this.teams = message);
  }

  openPopup(column, row)
  {
    const dialogRef = this.dialog.open(QuestionDialog, {
      width: '250px',
      data: this.categories[row].questions[column]
    });
  }

}


@Component({
  selector: 'popup',
  templateUrl: 'popup.component.html',
})
export class QuestionDialog {

  constructor(
    public dialogRef: MatDialogRef<QuestionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
