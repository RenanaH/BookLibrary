import { TestBed } from '@angular/core/testing';

import { ServiceLibraryService } from './service-library.service';

describe('ServiceLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLibraryService = TestBed.get(ServiceLibraryService);
    expect(service).toBeTruthy();
  });
});
