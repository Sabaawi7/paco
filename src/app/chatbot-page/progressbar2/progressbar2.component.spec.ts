import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar2Component } from './progressbar2.component';

describe('Progressbar2Component', () => {
  let component: Progressbar2Component;
  let fixture: ComponentFixture<Progressbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progressbar2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Progressbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
