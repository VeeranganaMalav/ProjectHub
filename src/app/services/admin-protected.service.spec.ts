import { TestBed } from '@angular/core/testing';

import { AdminProtectedService } from './admin-protected.service';

describe('AdminProtectedService', () => {
  let service: AdminProtectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProtectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
