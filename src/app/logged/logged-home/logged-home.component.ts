import { Component, OnInit } from '@angular/core';

export interface Expenses {
  name: string;
  value: number;
  date: Date;
}

@Component({
  selector: 'app-logged-home',
  templateUrl: './logged-home.component.html',
  styleUrls: ['./logged-home.component.css']
})
export class LoggedHomeComponent implements OnInit {

  username = 'Joe Das Quebradas';
  income = '$ 5,000.00';
  expensesTable: Expenses[] = [
    {name: 'Electric', value: 90.60, date: new Date('2021-01-18')},
    {name: 'Gas', value: 50, date: new Date('2021-02-01')},
    {name: 'Food', value: 260.30, date: new Date('2021-02-05')},
    {name: 'TV', value: 80, date: new Date('2021-01-19')},
    {name: 'Internet', value: 50, date: new Date('2021-01-25')},
  ];
  displayedColumns: string[] = ['name', 'value', 'date'];

  constructor() { }

  ngOnInit(): void {
  }

  geTotalExpense(): number {
    return this.expensesTable.map(i => i.value).reduce((acc, value) => acc + value, 0);
  }
}
