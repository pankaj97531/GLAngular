/*
 * Viavi-XPERTrak-GlobalLogic
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import displayDataComponent from "./displayData.component";

const routes: Routes = [
    { path: '', component: displayDataComponent
    }
];

export const DisplayDataComponentRoutes: ModuleWithProviders = RouterModule.forChild(routes);