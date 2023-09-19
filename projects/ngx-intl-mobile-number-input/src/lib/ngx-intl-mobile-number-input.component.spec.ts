import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlMobileNumberInputComponent } from './ngx-intl-mobile-number-input.component';

describe('NgxIntlMobileNumberInputComponent', () => {
  let component: NgxIntlMobileNumberInputComponent;
  let fixture: ComponentFixture<NgxIntlMobileNumberInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxIntlMobileNumberInputComponent]
    });
    fixture = TestBed.createComponent(NgxIntlMobileNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
