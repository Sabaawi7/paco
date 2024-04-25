import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastUIComponent } from './gast-ui.component';

describe('GastUIComponent', () => {
  let component: GastUIComponent;
  let fixture: ComponentFixture<GastUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GastUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
