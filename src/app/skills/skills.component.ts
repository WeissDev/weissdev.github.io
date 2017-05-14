import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../services/resume.service";
import {Skill} from "../models/skill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  protected skills: Skill[];

  constructor(private resumeService: ResumeService) { }

  getSkills(): void {
    this.resumeService.getSkills().then((skills) => {
      this.skills = skills;
    });
  }

  ngOnInit(): void {
    this.getSkills();
  }

}
