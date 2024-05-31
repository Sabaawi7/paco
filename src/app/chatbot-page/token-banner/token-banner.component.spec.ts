import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBannerComponent } from './token-banner.component';

describe('TokenBannerComponent', () => {
  let component: TokenBannerComponent;
  let fixture: ComponentFixture<TokenBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
