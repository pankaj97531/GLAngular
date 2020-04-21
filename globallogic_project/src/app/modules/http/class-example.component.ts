import { Component, OnInit } from '@angular/core';

import { Mobile, SmartPhone } from './model';
import { Subject } from 'rxjs';

import HttpExampleService from './htpp-exmaple.http.service';

@Component({
  selector: 'class-example',
  templateUrl: 'class-example.component.html'

})

export default class ClassExample implements OnInit {

  private mobile: Mobile = new Mobile('google', 'v10.1');

  private smartPhone: Mobile = new SmartPhone();

  constructor(private httpExampleService : HttpExampleService) {
    //this.mobile.brandName = 'Google';
    //this.mobile.version =
    //this.mobile.turon();
    //this.smartPhone.turon();
    this.mobile.version;

    this.smartPhone.turon();

    //this.httpExampleService.getData().subscribe();

    //const t = this.httpExampleService.someStream.asObservable();

    // this.httpExampleService.someStream.subscribe((val)=>{
    //   console.log(val)
    // })

  }

  ngOnInit() {
    //console.log('came here')
  }
}