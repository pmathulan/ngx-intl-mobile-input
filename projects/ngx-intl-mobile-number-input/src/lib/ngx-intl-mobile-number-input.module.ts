import { NgModule } from '@angular/core';
import { NgxIntlMobileNumberInputComponent } from './ngx-intl-mobile-number-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';



@NgModule({
  declarations: [
    NgxIntlMobileNumberInputComponent,
    NativeElementInjectorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxIntlMobileNumberInputComponent,
    NativeElementInjectorDirective
  ]
})
export class NgxIntlMobileNumberInputModule { }
