import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InvestmentFormRoutingModule } from './investment-form-routing.module';
import { InvestmentFormComponent } from './investment-form.component';


@NgModule({
  declarations: [
    InvestmentFormComponent
  ],
  imports: [
    CommonModule,
    InvestmentFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvestmentFormModule { }
