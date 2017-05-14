import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../models/skill";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'head-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  animations: [
    trigger('showPercentAnimation', [
      transition(':enter', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('300ms', style({transform: 'translateY(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: Skill;
  private overlay: boolean;

  constructor() { }

  showOverlay(show: boolean): void {
    this.overlay = show;
  }

  ngOnInit() {
    this.overlay = false;
  }

}
