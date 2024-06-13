import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicyPageComponent } from './privacypolicy-page.component';

describe('PrivacypolicyPageComponent', () => {
  let component: PrivacypolicyPageComponent;
  let fixture: ComponentFixture<PrivacypolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacypolicyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacypolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
