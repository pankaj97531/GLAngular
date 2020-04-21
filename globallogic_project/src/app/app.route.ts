import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'angularexample',
        children: [          
            {
                path: 'displaydata',
                loadChildren: './modules/displayData/displayData.module#DisplayDataModule',
            },
            {
                path: 'httpexample',
                loadChildren: './modules/http/http-example.module#httpExampleModule',
            },
            {
                path: 'routesexample',
                loadChildren: './modules/routes/route-example.module#RoutesExampleModule',
            },
            {
                path: 'comexample',
                loadChildren: './modules/componentComunication/com.module#ComModule',
            },
            {
                path: 'direxample',
                loadChildren: './modules/directiveandpipe/dir.module#DirModule',
            },
            {
                path: 'tsexample',
                loadChildren: './modules/typescriptsample/typescriptsample.module#TSExampleModule',
            },
            {
                path: 'obxexample',
                loadChildren: './modules/observable/observable.module#ObservableExampleModule',
            },
            {
                path: 'formsexample',
                loadChildren: './modules/forms/forms.module#FomrsExampleModule',
            },
            {
                path: '',
                redirectTo: 'displaydata',
                pathMatch: 'full'
            }
        ]
    },
    { path: '', redirectTo: 'angularclass', pathMatch: 'full' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' });