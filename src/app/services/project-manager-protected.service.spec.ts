import { TestBed } from '@angular/core/testing';

import { ProjectManagerProtectedService } from './project-manager-protected.service';

describe('ProjectManagerProtectedService', () => {
  let service: ProjectManagerProtectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectManagerProtectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
