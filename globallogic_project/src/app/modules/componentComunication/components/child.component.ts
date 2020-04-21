import { Component, Input, Output, EventEmitter } from '@angular/core';

import MessageService from '../service/message.service';

@Component({
    selector: 'child-component',
    templateUrl: './child.component.html'
})

export default class Child {

    
    private _data = '';

    @Input()
    set data(data: string) {
        this._data = (data && data.trim()) || '<no name set>';
    }

    get data(): string { return this._data; }

    @Output() outSomeValue = new EventEmitter<string>();

    constructor(private messageService : MessageService){}

    btnClick(e):void{
        this.outSomeValue.emit('Value from the child');
        this.messageService.sendMessage('message from the child to sibling');
    }
}