import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import FormsExample from './forms.component'

const routes: Routes = [
    {
        path: '', component: FormsExample
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // },
];

export const FormRoute: ModuleWithProviders = RouterModule.forChild(routes);