import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIf } from '@angular/common';
import { GastUIComponent } from './gast-ui.component';

describe('GastUIComponent', () => {
  let component: GastUIComponent;
  let fixture: ComponentFixture<GastUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastUIComponent, NgIf]
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
