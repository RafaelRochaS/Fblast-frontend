import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LoggedHomeComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class LoggedModule { }