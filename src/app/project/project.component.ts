import { Component, OnInit } from '@angular/core';
import {Project} from "../models/project";
import {ResumeService} from "../services/resume.service";
import {Skill} from "../models/skill";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ResumeService]
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private resumeService: ResumeService) { }

  getProjects(): void {
    this.resumeService.getProjects().then((projects) => {
      this.projects = projects;
    });
  }

  ngOnInit() {
    this.getProjects();
  }

}
