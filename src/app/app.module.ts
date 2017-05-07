import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { HeadComponent } from './head/head.component';
import { SkillComponent } from './head/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HeadComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
