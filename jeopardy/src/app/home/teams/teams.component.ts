import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  profileForm = this.fb.group({
    team1: ['', Validators.required],
    team2: ['', Validators.required],
    team3: [''],
    team4: ['']
  });

  constructor(private fb: FormBuilder, private data: DataService) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // Send the data
    this.data.changeTeams(this.profileForm.value);
  }

}
