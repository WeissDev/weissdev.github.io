import { Component, OnInit } from '@angular/core';
import {Job} from "../models/job";
import {ResumeService} from "../services/resume.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ResumeService]
})
export class WorkComponent implements OnInit {
  jobs: Job[];

  constructor(private resumeService: ResumeService) { }

  getJobs(): void {
    this.resumeService.getJobs().then((jobs) => {
      this.jobs = jobs;
    });
  }

  ngOnInit(): void {
    this.getJobs();
  }

}
