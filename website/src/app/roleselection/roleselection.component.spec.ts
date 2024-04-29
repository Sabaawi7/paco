import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleselectionComponent } from './roleselection.component';

describe('RoleselectionComponent', () => {
  let component: RoleselectionComponent;
  let fixture: ComponentFixture<RoleselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleselectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
