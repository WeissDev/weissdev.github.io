import { Component, OnInit } from '@angular/core';
import {ResumeService} from "../services/resume.service";
import {Education} from "../models/education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [ResumeService]
})
export class EducationComponent implements OnInit {
  protected education: Education[];

  constructor(private resumeService: ResumeService) { }

  getEducation(): void {
    this.resumeService.getEducation().then((education) => {
      this.education = education;
    });
  }

  ngOnInit() {
    this.getEducation();
  }

}
