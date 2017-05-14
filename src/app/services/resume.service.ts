import { Injectable } from '@angular/core';
import {Job} from "../models/job";
import {JOBS} from "../models/job-data";
import {Skill} from "../models/skill";
import {SKILLS} from "../models/skill-data";
import {Project} from "../models/project";
import {PROJECTS} from "../models/project-data";
import {Education} from "../models/education";
import {EDUCATION} from "../models/education-data";

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

  /**
   * Returns a skill object
   * @param name
   * @returns {Promise<Skill>}
   */
  getSkillByName(name): Promise<Skill> {
    let skill = SKILLS.filter(function(obj) {
      return obj.name === name;
    });

    return Promise.resolve(skill[0]);
  }

  /**
   * Get all projects from project-data.ts
   * @returns {Promise<Project[]>}
   */
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }

  /**
   * Get all education entries from education-data.ts
   * @returns {Promise<Education[]>}
   */
  getEducation(): Promise<Education[]> {
    return Promise.resolve(EDUCATION);
  }

}
