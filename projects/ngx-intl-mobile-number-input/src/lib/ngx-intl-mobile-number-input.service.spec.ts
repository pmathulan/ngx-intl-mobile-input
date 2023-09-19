import { TestBed } from '@angular/core/testing';

import { NgxIntlMobileNumberInputService } from './ngx-intl-mobile-number-input.service';

describe('NgxIntlMobileNumberInputService', () => {
  let service: NgxIntlMobileNumberInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntlMobileNumberInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
