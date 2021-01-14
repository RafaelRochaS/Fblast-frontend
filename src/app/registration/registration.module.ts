import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [RegistrationHomeComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegistrationModule { }
