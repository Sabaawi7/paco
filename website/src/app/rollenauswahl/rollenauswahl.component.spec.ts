import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollenauswahlComponent } from './rollenauswahl.component';

describe('RollenauswahlComponent', () => {
  let component: RollenauswahlComponent;
  let fixture: ComponentFixture<RollenauswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollenauswahlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RollenauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
