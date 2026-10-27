import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent: ()=>{
        return import('./home/home').then((m)=>m.Home)} 
}];






