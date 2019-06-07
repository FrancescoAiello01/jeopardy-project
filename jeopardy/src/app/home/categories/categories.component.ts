import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  form: FormGroup;
  categories = [
  {
    id: 1, name: 'Geography',
    questions: [
      { questionText: 'What country is also known as Persia?', answer: 'Iran' },
      { questionText: 'In what country would you find Mount Kilimanjaro?', answer: 'Tanzania' },
      { questionText: 'What major river flows through the Grand Canyon?', answer: 'Colorado River' },
      { questionText: 'What name is given to the northeast part of China?', answer: 'Manchuria' }]
  },
  {
    id: 2, name: 'Art',
    questions: [
      { questionText: 'Who painted the Mona Lisa?', answer: 'Leonardo Da Vinci' },
      { questionText: 'Who is credited as the designer of the many statues which decorated the Parthenon?', answer: 'Phidias' },
      { questionText: 'What artist was struck in the face with a mallet by an envious rival, disfiguring him for life?', answer: 'Michelangelo' },
      { questionText: 'What artist is best known for a painting of his mother?', answer: 'Whistler' }]
  },
  {
    id: 3, name: 'Technology',
    questions: [
      { questionText: 'Before being known as PayPal, the company went by what name?', answer: 'Confinity' },
      { questionText: 'Who described the Internet as a series of tubes?', answer: 'Alaska Senator Ted Stevens' },
      { questionText: 'What was the first consumer desktop CPU to achieve 4GHz+ out of the box?', answer: 'AMD FX-4170 (Bulldozer)' },
      { questionText: 'What is the origin of the word "spam" in the context of email spam?', answer: 'A Monty Python skit from the 70s' }]
  },
  {
    id: 4, name: 'Economics', questions: [
      { questionText: 'For most people, the largest protion of their personal income comes from:', answer: 'Wages and salries from their jobs' },
      { questionText: 'When a person rents an apartment, who benefits from the transaction?', answer: 'Both the renter and the landlord' },
      { questionText: 'If the price of beef doubled and the price of poultry stayed the same, people would most likely buy:', answer: 'More poultry and less beef' },
      { questionText: 'Which of the following would most likely accelerate innovation in the computer industry?', answer: 'Greater use of computers by individuals' }]
  },
  {
    id: 5, name: 'Science', questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
  {
    id: 6, name: 'World History',
    questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
  {
    id: 7, name: 'Pop Culture',
    questions: [
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' },
      { questionText: 'question 1 category 1 ?', answer: 'answer 1 cat 1' }]
  },
];

   constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.form = this.formBuilder.group({
      categories: new FormArray([], minSelectedCheckboxes(2))
    });
    this.addCheckboxes();
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
