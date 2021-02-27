import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';

const routes: Routes = [
  { path: '', component: LoggedHomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
