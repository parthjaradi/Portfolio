import { Component, OnInit } from '@angular/core';
import {TimelineMax, Power2, TweenLite, Power4, Circ, Sine, Power1, Expo} from 'gsap';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateAbout();
  }

  animateAbout(): void{
    var tl = new TimelineMax();
    tl.staggerFrom(['.about-text','.about-img'], 1, {
      opacity: 0,
      scale:0.1,
      ease: Power2.easeOut
    })

  }

}
