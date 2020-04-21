import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutes } from './com.route';
import ParentComponent from './components/parent.component';
import ChildComponent from './components/child.component';
import SiblingComponent from './components/sibling.component';

import MessageService from './service/message.service';

@NgModule({
  imports: [    
    CommonModule,  
    ComponentCommunicationRoutes  
  ],
  declarations: [
    ParentComponent,
    ChildComponent,
    SiblingComponent    
  ],
  providers : [
    MessageService
  ],
  bootstrap: [ParentComponent]
})
export class ComModule { }
