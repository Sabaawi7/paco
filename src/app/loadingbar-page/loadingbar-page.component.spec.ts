import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingbarPageComponent } from './loadingbar-page.component';

describe('LoadingbarPageComponent', () => {
  let component: LoadingbarPageComponent;
  let fixture: ComponentFixture<LoadingbarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingbarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
