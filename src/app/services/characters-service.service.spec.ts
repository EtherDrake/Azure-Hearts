import { TestBed, inject } from '@angular/core/testing';

import { CharactersServiceService } from './characters-service.service';

describe('CharactersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersServiceService]
    });
  });

  it('should be created', inject([CharactersServiceService], (service: CharactersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
