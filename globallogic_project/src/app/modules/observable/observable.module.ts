import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import ObservablesExample from './observable.component';
import {ObservablesRoute} from './observable.route';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ObservablesRoute,
  ],
  declarations: [
    ObservablesExample
  ],
  providers: [],
  bootstrap: [ObservablesExample]
})
export class ObservableExampleModule { }