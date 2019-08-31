import { Component, OnInit } from '@angular/core';
import {TimelineMax, Power2, TweenLite, Power4, SteppedEase, Sine, Circ} from 'gsap';
import { delay } from 'q';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animateSkills();
  }

  animateSkills():void{
    var tl = new TimelineMax();
   
    tl.to(['.progLangCard','.webTechCard','.softwareCard'], 2, {
      opacity: 0.65,
      ease:Power2.easeInOut
    })
    
    
  }

  

}
