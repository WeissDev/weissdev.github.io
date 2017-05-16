import { Component, OnInit } from '@angular/core';

declare const GitHubCalendar: any;

@Component({
  selector: 'app-gh-calendar',
  template: `
  <div id="calendar" class="tile white center"></div>
`,
  styles: [`
    #calendar {
      max-width: 676px;
      padding: 5px;
    }
    #calendar h2 {
      text-align: center;
    }
  `]
})
export class GhCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new GitHubCalendar('#calendar', 'WeissDev');
  }

}
