import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import TypeScriptSample from './typescriptsample.component'

const routes: Routes = [
    {
        path: '', component: TypeScriptSample
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // },
];

export const TSRoute: ModuleWithProviders = RouterModule.forChild(routes);