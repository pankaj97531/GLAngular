import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  RouteExampleComponent  from './route-example.component';
import { RouteExampleComponentRoutes} from './route-example.route'
import  HomeComponent  from './components/home/home.component';
import  ProductComponent from './components/products/products.component';
import HeaderComponent from './components/header/header.component';
import PageNotFoundComponent from './components/pageNotFound/pageNotFound.component';
import ProductDetailPage from './components/productDetails/product-details.compoent';

import AuthGuardService from './services/auth-guard.service';
import UserAuthService from './services/user-auth.service';



@NgModule({
  imports: [
    CommonModule,    
    RouteExampleComponentRoutes

  ],
  declarations: [
    RouteExampleComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    ProductDetailPage,
    PageNotFoundComponent
  ],
  providers:[
    AuthGuardService,
    UserAuthService
  ],
  bootstrap: [ RouteExampleComponent ]
})
export class RoutesExampleModule { }
