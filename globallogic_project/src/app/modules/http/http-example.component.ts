import { Component, OnInit } from '@angular/core';

import HttpExampleService from './htpp-exmaple.http.service';
//import MObile from './model';
import { pipe, fromEvent, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'http-example',
  templateUrl: 'http-example.component.html'

})
export default class httpExampleComponent implements OnInit {
  private days$ ;
  //private mobile : MObile = new MObile();

  constructor(private httpExampleService: HttpExampleService) { }

  ngOnInit() {
    
    this.days$ = this.httpExampleService.getData().pipe(map((data)=>{
      return data.days;
    }));

    

    // .subscribe(
    //   (data) => {
    //     console.log('data', data);
    //     this.days = data.days;
    //   },
    //   (error) => {
    //     console.log(error);
    //   })
    //this.mobile.brandName

  }
}
