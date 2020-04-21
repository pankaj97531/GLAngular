import { Component } from '@angular/core';

@Component({
    selector:'parent-compoent',
    templateUrl:'./parent.component.html'
})

export default class ParentComponent{
    
    private parentData : string = 'Value from the parent';
    
    private dataFromChild: string = null;

    getValue(e):void{
        this.dataFromChild = e;
    }
}
