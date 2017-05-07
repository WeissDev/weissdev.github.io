import { Injectable } from '@angular/core';
import {Job} from "../models/job";
import {JOBS} from "../models/job-data";
import {Skill} from "../models/skill";
import {SKILLS} from "../models/skill-data";

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

  /**
   * Get all skills from skill-data.ts
   * @returns {Promise<Skill[]>}
   */
  getSkills(): Promise<Skill[]> {
    return Promise.resolve(SKILLS);
  }

}
