import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstAdminComponent } from './inst-admin.component';

describe('InstAdminComponent', () => {
  let component: InstAdminComponent;
  let fixture: ComponentFixture<InstAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
