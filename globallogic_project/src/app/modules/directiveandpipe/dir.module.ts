import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirRoutes } from './dir.route';
import DirComponent from './dir.component';

import {HighlightDirective} from './customDirective/highlight.directive';
import {PowerPipe} from './customPipe/power.pipe';

@NgModule({
    imports: [
        CommonModule,
        DirRoutes
    ],
    declarations: [
        DirComponent,
        HighlightDirective,
        PowerPipe
    ],
    providers: [
        
    ],
    bootstrap: [DirComponent]
})
export class DirModule { }
