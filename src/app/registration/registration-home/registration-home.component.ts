import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-home',
  templateUrl: './registration-home.component.html',
  styleUrls: ['./registration-home.component.css']
})
export class RegistrationHomeComponent implements OnInit {

  usernameControl = new FormControl('', Validators.required);
  firstNameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  hidePassword = true;

  constructor() { }

  ngOnInit(): void {
  }

}
