import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../models/skill";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
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
