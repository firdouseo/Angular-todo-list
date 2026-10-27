import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Home],
 template:`<app-header/> <main> <app-home/> </main>
 `,
 styles:[
    `main{
       padding:16px;
       padding-inline:30px;
       font-size:22px;
    }`
 ]
 
})
export class App {
   
}
