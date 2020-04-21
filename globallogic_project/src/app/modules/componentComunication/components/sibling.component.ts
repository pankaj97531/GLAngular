import {Component} from '@angular/core';

import MessageService from '../service/message.service';

@Component({
    selector:'sibling-component',
    templateUrl:'./sibling.component.html'
})

export default class SiblingComponent{

    private value : string;
    constructor(private messageService : MessageService){
        this.messageService.getMessage()
        .subscribe((data)=>{
            this.value = data;
        })
    }
}