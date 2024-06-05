import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalAnalysisComponent } from './graphical-analysis.component';

describe('GraphicalAnalysisComponent', () => {
  let component: GraphicalAnalysisComponent;
  let fixture: ComponentFixture<GraphicalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicalAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
