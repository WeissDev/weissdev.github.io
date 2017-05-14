import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdTabsModule} from "@angular/material";

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { HeadComponent } from './head/head.component';
import { SkillComponent } from './skills/skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';

import {ResumeService} from "./services/resume.service";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HeadComponent,
    SkillComponent,
    ProjectComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdTabsModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
