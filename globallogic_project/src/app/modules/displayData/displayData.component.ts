import { Component } from '@angular/core';
import { Days } from './days';


@Component({
  selector: 'display-data',
  templateUrl: 'displayData.component.html'

})
export default class displayDataComponent {

  constructor(){
    console.log("displayDataComponent");
  }
  
  private username = 'Some Name';

  private title: string = 'List of days';

  private days: Days[] = [
    new Days(1, 'Monday'),
    new Days(2, 'Tuesday'),
    new Days(3, 'Wednesday'),
    new Days(4, 'Thursday'),
    new Days(5, 'Friday'),
    new Days(6, 'Saturday'),
    new Days(7, 'Sunday'),

  ];
  myDay = this.days[5];

  private showValue(e): void{    
    console.log(e);
      console.log(this.username)
  }
}
