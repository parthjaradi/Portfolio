import { Component, OnInit } from '@angular/core';
import {TimelineMax, Power2, TweenLite, Power4} from 'gsap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateFunction();
  }


  animateFunction(): void{
    
    var tl = new TimelineMax();
    tl.staggerFrom('.home-img', 2, {
      opacity: 0,
      scale: .25,
      ease: Power2.easeOut
    })

    tl.staggerFrom('.inner', 0.8, {
      opacity: 0,
      x: -40,
      ease: Power2.easeInOut
    }, 0.2, "-=1.5")
  }

}
