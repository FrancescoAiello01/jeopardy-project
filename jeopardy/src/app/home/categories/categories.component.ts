import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  form: FormGroup;
  categories: any;

  constructor(private formBuilder: FormBuilder, private data: DataService, private apiService: ApiService) {
    this.form = this.formBuilder.group({
      categories: new FormArray([], minSelectedCheckboxes(2))
    });
    this.addCheckboxes();
    this.apiService.questions().subscribe((response) => {
      this.categories = Object.keys(response);
    });
  }

  private addCheckboxes() {
    this.categories.map((o, i) => {
      const control = new FormControl(i < 4); // Set first 4 items to checked (true), else unchecked (false)
      (this.form.controls.categories as FormArray).push(control);
    });
  }

  submit() { // Get the IDs of the checkboxes selected
    const selectedOrderIds = this.form.value.categories
      .map((v, i) => v ? this.categories[i] : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
    // Send the data
    this.data.changeCategories(selectedOrderIds);
  }
}

function minSelectedCheckboxes(min = 2) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
