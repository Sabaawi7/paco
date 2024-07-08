import { TestBed } from '@angular/core/testing';
import { InterviewService } from './interview-service.service';

describe('InterviewServiceService', () => {
  let service: InterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
