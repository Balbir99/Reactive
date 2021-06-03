import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../modals/users';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  users: FormGroup;
  NotAllowedName = ['balbir', 'aaa'];
  constructor(
    private router: Router,
    private activate: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.users = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z\s]+$/),
        this.notAllowedNames.bind(this),
      ]),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email,
          this.emailDomainValidator.bind(this),
        ],
        this.NaEmail,
      ),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      resume: new FormControl('', Validators.required),
    });
  }
  //continue(){
  //console.log("hello");
  //this.router.navigate(['employment']);

  //}
  onSubmit() {
    console.log(this.users.controls);
    if (this.users.valid) {
      this.router.navigate(['employment']);
    } else {
      console.log('show error');
    }
  }
  get email() {
    return this.users.get('email');
  }
  get name() {
    return this.users.get('name');
  }
  get phone() {
    return this.users.get('phone');
  }
  get resume() {
    return this.users.get('resume');
  }
  notAllowedNames(control: FormControl) {
    if (this.NotAllowedName.indexOf(control.value) !== -1) {
      return {
        notAllowedName: true,
      };
    }
    return null;
  }

  emailDomainValidator(control: FormControl) {
    let email = control.value;

    if (email && email.indexOf('@') != -1) {
      let [_, domain] = email.split('@');

      if (domain !== 'gmail.com') {
        return {
          emailDomain: {
            parsedDomain: domain,
          },
        };
      }
    }
    return null;
  }
  NaEmail(control: AbstractControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'balbir.kaur@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return myResponse;
  }
}
