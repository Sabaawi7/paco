import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstadminComponent } from './instadmin.component';

describe('InstadminComponent', () => {
  let component: InstadminComponent;
  let fixture: ComponentFixture<InstadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
