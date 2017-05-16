import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../../models/skill';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  animations: [
    trigger('onHover', [
      transition('void => *', [
        animate(200, keyframes([
          style({opacity: 0, transform: 'scale(0)'}),
          style({opacity: 0.8, transform: 'scale(1)'}),
        ]))
      ]),
      transition('* => void', [
        animate(200, keyframes([
          style({opacity: 0.8, transform: 'scale(1)'}),
          style({opacity: 0, transform: 'scale(0)'}),
        ]))
      ])
    ])
  ]
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: Skill;
  overlay: boolean;

  constructor() { }

  showOverlay(show: boolean): void {
    this.overlay = show;
  }

  ngOnInit() {
    this.overlay = false;
  }

}
