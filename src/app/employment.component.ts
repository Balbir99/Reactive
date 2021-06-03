import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  myclasses = {
    box: true,
    visi: true,
    box2: false,
    visible: false,
  };
  employment: FormGroup;
  constructor(
    private router: Router,
    private activate: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.employment = new FormGroup({
      designation: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z\s]+$/),
      ]),
      current_company: new FormControl(null, [Validators.required]),
      salary: new FormGroup({
        In_lakh: new FormControl(null, Validators.required),
        In_thousand: new FormControl(null, Validators.required),
      }),
      working_since: new FormGroup({
        year: new FormControl(null, Validators.required),
        month: new FormControl(null, Validators.required),
        to: new FormControl(null, Validators.required),
      }),
      city: new FormControl(null, Validators.required),
      notice_period: new FormControl(null, Validators.required),
      Specialization: new FormArray([]),
      industry: new FormControl(null, Validators.required),
    });
    //this.designation();
  }
  continue() {
    // console.log("hello");
    this.router.navigate(['education']);
  }
  //formArray
  specializationArr() {
    return this.employment.get('Specialization') as FormArray;
  }
  add() {
    console.log('hello');
    // document.getElementById("previous").style.visibility = "visible";
    this.myclasses.box = true;
    this.myclasses.visi = false;
    this.myclasses.visible = true;
  }
  get designation() {
    //console.log(this.employment.get('education')?.value);
    return this.employment.get('designation');
  }
  get industry() {
    //  console.log(this.employment.get('industry')?.value);
    return this.employment.get('industry');
  }
  get current_company() {
    // console.log(this.employment.get('current_company'));
    return this.employment.get(' current_company');
  }
  //access whole formGroup
  get salary() {
    //  console.log('abc', this.employment.salary.value.In_lakh);
    // return this.employment.get(['salary', 'In_lakh']);
    //return this.employment.get('salary.In_lakh');
    return this.employment.get('salary');
  }
  get In_Lakh() {
    return this.employment.get('salary.In_lakh');
  }

  OnaddSkills() {
    (<FormArray>this.employment.get('Specialization')).push(
      new FormControl(null, Validators.required),
    );
  }
  // removeHobby(index: number) {
  // let hobbies = <FormArray>(
  // this.userRegistrationFormGroup.controls.hobbies
  //);
  //hobbies.removeAt(index);
  //}
}
