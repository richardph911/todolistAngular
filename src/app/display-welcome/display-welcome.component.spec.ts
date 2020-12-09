import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWelcomeComponent } from './display-welcome.component';

describe('DisplayWelcomeComponent', () => {
  let component: DisplayWelcomeComponent;
  let fixture: ComponentFixture<DisplayWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
