import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import {DirectivesModule} from "../directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterLinkWithHref} from "@angular/router";
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MotoComponent } from './moto/moto.component';
import { InterestComponent } from './interest/interest.component';



@NgModule({
  declarations: [
    LanguagePickerComponent,
    NavbarComponent,
    ThemePickerComponent,
    SidebarComponent,
    BannerComponent,
    CarouselComponent,
    MotoComponent,
    InterestComponent
  ],
    exports: [
        NavbarComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        DirectivesModule,
        TranslateModule,
        RouterLinkWithHref
    ]
})
export class ComponentsModule { }
