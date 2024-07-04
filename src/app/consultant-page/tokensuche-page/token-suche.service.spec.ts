import { TestBed } from '@angular/core/testing';

import { TokenSucheService } from './token-suche.service';

describe('TokenSucheService', () => {
  let service: TokenSucheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenSucheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
