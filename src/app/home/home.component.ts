import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  hidePassword = true;

  constructor() { }

  ngOnInit(): void {
  }

}
