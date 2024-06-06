import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAnalysisComponent } from './date-analysis.component';

describe('DateAnalysisComponent', () => {
  let component: DateAnalysisComponent;
  let fixture: ComponentFixture<DateAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
