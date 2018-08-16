import { TestBed, inject } from '@angular/core/testing';

import { BlogDisplayService } from './blog-display.service';

describe('BlogDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogDisplayService]
    });
  });

  it('should be created', inject([BlogDisplayService], (service: BlogDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
