import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInformationComponent } from './support-information.component';

describe('SupportInformationComponent', () => {
  let component: SupportInformationComponent;
  let fixture: ComponentFixture<SupportInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
