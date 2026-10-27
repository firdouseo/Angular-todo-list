import { Component, input, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';


@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
HomeMessage=signal('hello from Home message')

keyUpHandler(event:KeyboardEvent){
  console.log(`User entered ${event.key} key`)
}

}
