import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-home',
  templateUrl: './logged-home.component.html',
  styleUrls: ['./logged-home.component.css']
})
export class LoggedHomeComponent implements OnInit {

  username = 'Joe Das Quebradas';
  income = '$ 5,000.00';

  constructor() { }

  ngOnInit(): void {
  }

}
