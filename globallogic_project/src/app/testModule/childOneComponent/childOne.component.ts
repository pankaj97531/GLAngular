import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";


@Component({
    selector : "app-childone",
    templateUrl : './childOne.component.html'
})
export class ChildOneComponent implements OnInit{
    @Input() parentData : string;
    @Output() childData = new EventEmitter<string>();
    ngOnInit(){
        console.log(this.parentData);
        this.childData.emit("childdata");
    }
    onChildOneInput(data : HTMLInputElement){
        console.log(data);
    }
}