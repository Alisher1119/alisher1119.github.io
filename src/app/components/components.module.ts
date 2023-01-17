import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import {DirectivesModule} from "../directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    LanguagePickerComponent,
    NavbarComponent,
    ThemePickerComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent
  ],
    imports: [
        CommonModule,
        DirectivesModule,
        TranslateModule
    ]
})
export class ComponentsModule { }
