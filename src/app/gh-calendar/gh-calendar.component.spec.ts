import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhCalendarComponent } from './gh-calendar.component';

describe('GhCalendarComponent', () => {
  let component: GhCalendarComponent;
  let fixture: ComponentFixture<GhCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
