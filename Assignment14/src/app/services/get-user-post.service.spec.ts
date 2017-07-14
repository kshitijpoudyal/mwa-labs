import { TestBed, inject } from '@angular/core/testing';

import { GetUserPostService } from './get-user-post.service';

describe('GetUserPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserPostService]
    });
  });

  it('should be created', inject([GetUserPostService], (service: GetUserPostService) => {
    expect(service).toBeTruthy();
  }));
});
