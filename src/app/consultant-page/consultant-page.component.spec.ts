import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultantPageComponent } from './consultant-page.component';

describe('ConsultantPageComponent', () => {
  let component: ConsultantPageComponent;
  let fixture: ComponentFixture<ConsultantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
