import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedHomeComponent } from './logged-home/logged-home.component';

const routes: Routes = [
  { path: '', component: LoggedHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
