import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {LanguageService} from "./core/services/language.service";
import {PagesModule} from "./pages/pages.module";
import {ComponentsModule} from "./components/components.module";
import {APP_NAME} from "./core/constants/app.constants";
import {LANGUAGES} from "./core/constants/language.constant";
import {SIDEBAR_ITEMS} from "./core/constants/sidebar.constants";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
  ],
  providers: [
    {provide: LANGUAGES, useValue: LANGUAGES},
    {provide: APP_NAME, useValue: "Alisher Khayrillaev"},
    {provide: SIDEBAR_ITEMS, useValue: SIDEBAR_ITEMS},
    LanguageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
