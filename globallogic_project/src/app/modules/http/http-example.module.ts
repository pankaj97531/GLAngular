import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import  httpExampleComponent  from './http-example.component';
import ClassExample from './class-example.component'
import {httpExampleComponentRoutes} from './http-example.route';
import HttpExampleService from './htpp-exmaple.http.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    httpExampleComponentRoutes,

  ],
  declarations: [
    httpExampleComponent,
    ClassExample
  ],
  providers:[
    HttpExampleService
  ],
  bootstrap: [ httpExampleComponent ]
})
export class httpExampleModule { }
