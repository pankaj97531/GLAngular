import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DirComponent from './dir.component';

const routes: Routes = [
    {
        path: '', 
        component: DirComponent
    },
    { 
        path: 'dir', 
        component: DirComponent 
    },
   
  
];

export const DirRoutes: ModuleWithProviders = RouterModule.forChild(routes);