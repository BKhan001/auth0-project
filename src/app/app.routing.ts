import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './bk-components/home/home.bk-components';
import {ProfileComponent} from './bk-components/profile/profile.bk-components';

const appRoutes: Routes= [

{
    path: '',
    component: HomeComponent

},

{
    path: 'profile',
    component: ProfileComponent

}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
