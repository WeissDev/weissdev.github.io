import { Injectable } from '@angular/core';
import {Job} from "../models/job";
import {JOBS} from "../models/job-data";

@Injectable()
export class ResumeService {

  constructor() { }

  /**
   * Get all the jobs from job-data.ts
   * @returns {Promise<Job[]>}
   */
  getJobs(): Promise<Job[]> {
    return Promise.resolve(JOBS);
  }

}
