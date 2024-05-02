import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantUIComponent } from './consultant-ui.component';

describe('ConsultantUIComponent', () => {
  let component: ConsultantUIComponent;
  let fixture: ComponentFixture<ConsultantUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
