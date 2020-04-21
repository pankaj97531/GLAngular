import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ParentComponent from './components/parent.component';


const routes: Routes = [
    {
        path: '', 
        component: ParentComponent
    },
    { 
        path: 'parent', 
        component: ParentComponent 
    },
   
  
];

export const ComponentCommunicationRoutes: ModuleWithProviders = RouterModule.forChild(routes);