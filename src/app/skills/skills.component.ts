import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../services/resume.service";
import {Skill} from "../models/skill";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('showPercentAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1000ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('1000ms', style({ opacity: 0}))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private resumeService: ResumeService) { }

  getSkills(): void {
    this.resumeService.getSkillsSorted().then((skills) => {
      this.skills = skills;
    });
  }

  ngOnInit(): void {
    this.getSkills();
  }

}
