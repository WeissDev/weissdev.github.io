import { Component, OnInit } from '@angular/core';
import {Skill} from "../models/skill";
import {ResumeService} from "../services/resume.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [ResumeService]
})
export class HeadComponent implements OnInit {
  protected skills: Skill[];
  private showOverlay: boolean;

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
