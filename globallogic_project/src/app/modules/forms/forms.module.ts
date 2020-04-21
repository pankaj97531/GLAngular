import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import FormsExample from './forms.component';
import { FormRoute } from './forms.route'

@NgModule({
  imports: [
    CommonModule,
    FormRoute,
    FormsModule
  ],
  declarations: [
    FormsExample
  ],
  providers: [],
  bootstrap: [FormsExample]
})
export class FomrsExampleModule { }