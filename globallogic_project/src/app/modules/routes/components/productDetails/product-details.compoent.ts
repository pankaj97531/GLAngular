import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector:'product-details',
    templateUrl:'./product-details.component.html'
})

export default class ProductDetailPage{

    constructor(private route : ActivatedRoute){

         this.route.paramMap.subscribe((param)=>{
             console.log(param['params'].id);
         })
    }

}