import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'

import  displayDataComponent  from './displayData.component';
import {DisplayDataComponentRoutes} from './displayData.routes';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DisplayDataComponentRoutes
  ],
  declarations: [
    displayDataComponent
  ],
  bootstrap: [ displayDataComponent ]
})
export class DisplayDataModule { }
