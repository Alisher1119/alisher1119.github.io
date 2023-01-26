import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguagePickerComponent} from './language-picker/language-picker.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ThemePickerComponent} from './theme-picker/theme-picker.component';
import {DirectivesModule} from "../directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterLinkWithHref} from "@angular/router";
import {BannerComponent} from './banner/banner.component';
import {CarouselComponent} from './carousel/carousel.component';
import {MotoComponent} from './moto/moto.component';
import {InterestComponent} from './interest/interest.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {CertificatesComponent} from './certificates/certificates.component';
import {CoreModule} from "../core/core.module";
import {StacksComponent} from './stacks/stacks.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    LanguagePickerComponent,
    NavbarComponent,
    ThemePickerComponent,
    SidebarComponent,
    BannerComponent,
    CarouselComponent,
    MotoComponent,
    InterestComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    StacksComponent,
    NotFoundComponent,
  ],
  exports: [
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactsComponent,
    EducationComponent,
    CertificatesComponent,
    StacksComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    TranslateModule,
    RouterLinkWithHref,
    CoreModule,
  ]
})
export class ComponentsModule {
}
