import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {
        //si ruta es vacia entonces por esta definicion se carga este componente
        path: '',
        component: PagesComponent,
        children: [
            { 
                path:'dashboard',
                component: DashboardComponent
            },
            { 
                path:'progress',
                component: ProgressComponent
            },
            { 
                path:'graficas1',
                component: Graficas1Component
            },
            {
                path: 'account-settings',
                component: AccountSettingsComponent
            },                        
            {
                path:'',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);