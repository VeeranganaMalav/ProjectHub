import { TestBed } from '@angular/core/testing';

import { TeamMemberProtectedService } from './team-member-protected.service';

describe('TeamMemberProtectedService', () => {
  let service: TeamMemberProtectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMemberProtectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
