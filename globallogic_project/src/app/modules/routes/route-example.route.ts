import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import RouteExampleComponent from "./route-example.component";
import HomeComponent from './components/home/home.component';
import ProductComponent from './components/products/products.component';
import Productdetails from './components/productDetails/product-details.compoent';
import PageNotFoundComponent from './components/pageNotFound/pageNotFound.component';

import AuthGuard from './services/auth-guard.service'

const routes: Routes = [
    {
        path: 'admin',
        component: RouteExampleComponent,
        children: [{
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'productlist',
            component: ProductComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'productdetails/:id',
            component: Productdetails
        }]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const RouteExampleComponentRoutes: ModuleWithProviders = RouterModule.forChild(routes);