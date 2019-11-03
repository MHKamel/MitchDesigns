import { TestBed } from '@angular/core/testing';

import { MitchService } from './mitch.service';

describe('MitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MitchService = TestBed.get(MitchService);
    expect(service).toBeTruthy();
  });
});
