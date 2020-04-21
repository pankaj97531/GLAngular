import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {routing} from './app.route';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './testModule/childOneComponent/childOne.component';
import { ChildTwoComponent } from './testModule/childTwoComponent/childTwo.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    routing
  ],
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
