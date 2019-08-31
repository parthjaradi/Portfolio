import { Component, OnInit } from '@angular/core';
import {TimelineMax, Power2, TweenLite, Power4, Power1} from 'gsap';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateWork();
  }

  animateWork():void{
    var tl = new TimelineMax();
    tl.staggerFrom('.projects', 0.3, {
      opacity: 0,
      scale: .25,
      ease: Power2.easeOut
    })
    
    tl.staggerFrom('.sneakersstop', 0.1, {
      opacity: 0,
      x:-40,
      ease: Power2.easeIn
    })

    tl.staggerFrom(['.cts','.CBIR'], 0.1, {
      opacity: 0,
      y:-40,
      ease: Power2.easeIn
    })

    tl.staggerFrom(['.tedTalk','.votingSystem'], 0.1, {
      opacity: 0,
      y:40,
      ease: Power2.easeIn
    })

    tl.staggerFrom('.sourceCode', 0.1, {
      opacity: 0,
      x:40,
      ease: Power2.easeIn
    })

    tl.staggerFrom('.ui', 0.1, {
      opacity: 0,
      scale: .25,
      ease: Power2.easeOut
    })

  }

}
