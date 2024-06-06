import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseOverviewComponent } from './response-overview.component';

describe('ResponseOverviewComponent', () => {
  let component: ResponseOverviewComponent;
  let fixture: ComponentFixture<ResponseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
