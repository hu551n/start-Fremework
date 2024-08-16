import { Component } from '@angular/core';
import { start } from 'repl';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    titleHome:string ='star framwork';
    colorHome:string='white' ;
}
