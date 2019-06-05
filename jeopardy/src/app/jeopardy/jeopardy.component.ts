import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

const ALL_QUESTIONS = [{
  category: 'Safety and Health',
  questions: [{
    question: 'The emergency evacuation plan will be exercised on what basis?',
    answer: 'Every year',
    value: 200
  }, {
    question: 'The entry permit authorization letter is issued for what time frame?',
    answer: 'One year',
    value: 400
  }, {
    question: 'Can contact lenses be worn with protective eyewear?',
    answer: 'Yes',
    value: 600
  }, {
    question: 'What AFOSH Std. covers physical examinations?',
    answer: 'AFOSH Std. 48-8',
    value: 800
  }, {
    question: 'The first action the attendant takes when a person becomes trapped?',
    answer: 'Implement the emergency response plan',
    value: 1000
  }]
}, {
  category: 'Engine Feed System',
  questions: [{
    question: 'Where is the #4 res gravity x-fer valve located?',
    answer: 'Right outboard drybay',
    value: 200
  }, {
    question: 'A/R pumps are powered by_________?',
    answer: 'Hydraulics',
    value: 400
  }, {
    question: 'At what psi does the engine manifold low press light go out?',
    answer: '7.5 +/-.5psi',
    value: 600
  }, {
    question: 'How are the engines fed when a boost pump fails?',
    answer: 'Flapper bypass valve',
    value: 800
  }, {
    question: 'What is the output of a main tank pump?',
    answer: '14-19 psi',
    value: 1000
  }]
}, {
  category: 'Gravity X-fer and Dump',
  questions: [{
    question: 'What pump(s) send fuel to the boom?',
    answer: 'A/R Pumps',
    value: 200
  }, {
    question: 'Where are the main tank gravity x-fer valves located?',
    answer: 'Rear Spar/Flap Well',
    value: 400
  }, {
    question: 'What valve must be open to dump fuel out of the boom?',
    answer: 'A/R Line valve',
    value: 600
  }, {
    question: 'At what rate does fuel x-fer from mains to the aft body?',
    answer: '1300 ppm',
    value: 800
  }, {
    question: 'During X-fer from U/D, what valve prevents over filling of the Aft body?',
    answer: 'Float operated valve',
    value: 1000
  }]
}, {
  category: 'Fuel Quantity System',
  questions: [{
    question: 'What is used to check the working condition of the fuel quantity lights?',
    answer: 'Press-to-test button',
    value: 200
  }, {
    question: 'Changes in fuel mass are measured by what component(s)?',
    answer: 'Tank Units (TU\'s)',
    value: 400
  }, {
    question: 'Changes in density are measuered by what end of the CTU?',
    answer: 'Bottom',
    value: 600
  }, {
    question: 'How many probes are in the aft body?',
    answer: 'One',
    value: 800
  }, {
    question: 'During a BIT test, what three things are checked?',
    answer: 'Tank Units, Compensator Tank Units, Tank contamination',
    value: 1000
  }]
}, {
  category: 'Refuel/Defuel System',
  questions: [{
    question: 'What is installed between the F/L/C/V and the SPR manifold?',
    answer: 'Flow restrictor',
    value: 200
  }, {
    question: 'How many methods are used for refueling a 135?',
    answer: 'Two',
    value: 400
  }, {
    question: 'Aircraft with ARR contain what type of F/L/C/V?',
    answer: 'Dual Float',
    value: 600
  }, {
    question: 'What valve connects the engine manifold with the SPR manifold?',
    answer: 'Manual Defuel valve',
    value: 800
  }, {
    question: 'How much gas can a 135 hold? (Within 500lbs.)',
    answer: '209,542',
    value: 1000
  }]
}, {
  category: 'Knowledge of your Instructor',
  questions: [{
    question: 'What was my first duty station?',
    answer: 'Robins',
    value: 200
  }, {
    question: 'Name the two year models of Mustangs I have owned',
    answer: '1998 GT, 1968 Coupe',
    value: 400
  }, {
    question: 'What two airframes have I worked on?',
    answer: 'KC-135R/T, and E-8C Joint Stars',
    value: 600
  }, {
    question: 'Did I want to come to McConnell?',
    answer: 'No',
    value: 800
  }, {
    question: 'Do I have a favorite student? If so, who?',
    answer: 'No, SSgt. Milford does not show favoritism.',
    value: 1000
  }]
}];



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

  gameData = ALL_QUESTIONS;

  ngOnInit() {
    this.data.categoryMessage.subscribe(message => this.categories = message);
    this.data.teamsMessage.subscribe(message => this.teams = message);
  }

}
