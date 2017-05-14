import {Skill} from "./skill";

export class Project {
  title: string;
  year: string;
  description: string;
  images: string[];
  technologiesUsed: Skill[];
  url: string;
  gitHubRepoUrl: string;
}
