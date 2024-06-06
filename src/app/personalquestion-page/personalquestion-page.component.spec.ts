import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalquestionPageComponent } from './personalquestion-page.component';

describe('PersonalquestionPageComponent', () => {
  let component: PersonalquestionPageComponent;
  let fixture: ComponentFixture<PersonalquestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalquestionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalquestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
