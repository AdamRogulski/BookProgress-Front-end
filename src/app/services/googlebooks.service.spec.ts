import { TestBed } from '@angular/core/testing';

import { GooglebooksService } from './googlebooks.service';

describe('GooglebooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglebooksService = TestBed.get(GooglebooksService);
    expect(service).toBeTruthy();
  });
});
