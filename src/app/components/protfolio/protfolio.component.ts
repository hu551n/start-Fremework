
import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {
  PortfolioSrc: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ];
  flag:boolean=true;
  modelImg: string = '';

  hideModel(element:EventTarget|null, img:HTMLImageElement):void{
    if(element == img) return;
    this.flag = true;
  }
}
