import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetYearPipe} from "./pipes/get-year.pipe";
@NgModule({
  declarations: [
    GetYearPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetYearPipe
  ],
})
export class CoreModule {
}
