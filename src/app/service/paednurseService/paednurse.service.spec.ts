/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaednurseService } from './paednurse.service';

describe('Service: Paednurse', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaednurseService]
    });
  });

  it('should ...', inject([PaednurseService], (service: PaednurseService) => {
    expect(service).toBeTruthy();
  }));
});
