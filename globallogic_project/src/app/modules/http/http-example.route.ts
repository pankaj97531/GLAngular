
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import httpExampleComponent from "./http-example.component";
import ClassExample from './class-example.component'

const routes: Routes = [
    { path: '', component: httpExampleComponent
    }
];

export const httpExampleComponentRoutes: ModuleWithProviders = RouterModule.forChild(routes);