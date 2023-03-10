import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import {DirectivesModule} from "../directives/directives.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule,
        DirectivesModule,
        TranslateModule
    ]
})
export class PagesModule {
}
