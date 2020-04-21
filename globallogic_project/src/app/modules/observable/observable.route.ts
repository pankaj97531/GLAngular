import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ObservableExamples from './observable.component'

const routes: Routes = [
    {
        path: '', component: ObservableExamples
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // },
];

export const ObservablesRoute: ModuleWithProviders = RouterModule.forChild(routes);