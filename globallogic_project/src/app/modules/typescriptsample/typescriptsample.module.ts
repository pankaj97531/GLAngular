import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import TypeScriptSample from './typescriptsample.component';
import {TSRoute} from './typescriptsample.route'

@NgModule({
  imports: [
    CommonModule,
    TSRoute
  ],
  declarations: [
    TypeScriptSample
  ],
  providers: [],
  bootstrap: [TypeScriptSample]
})
export class TSExampleModule { }