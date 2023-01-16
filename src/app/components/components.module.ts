import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import {DirectivesModule} from "../directives/directives.module";



@NgModule({
  declarations: [
    LanguagePickerComponent,
    NavbarComponent,
    ThemePickerComponent
  ],
  exports: [
    NavbarComponent
  ],
    imports: [
        CommonModule,
        DirectivesModule
    ]
})
export class ComponentsModule { }
