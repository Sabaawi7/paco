import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensuchePageComponent } from './tokensuche-page.component';

describe('TokensuchePageComponent', () => {
  let component: TokensuchePageComponent;
  let fixture: ComponentFixture<TokensuchePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensuchePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokensuchePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
