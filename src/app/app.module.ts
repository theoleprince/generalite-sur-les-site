import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './public/general/about/about.component';
import { ContactComponent } from './public/general/contact/contact.component';
import { BloglistComponent } from './public/general/blog/bloglist/bloglist.component';
import { BlogdetailComponent } from './public/general/blog/blogdetail/blogdetail.component';
import { FooterComponent } from './public/general/footer/footer.component';
import { NavBarComponent } from './public/general/nav-bar/nav-bar.component';
import { HomeComponent } from './public/general/home/home.component';
import { SigninComponent } from './public/general/signin/signin.component';
import { NotFoundComponent } from './public/general/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {  DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BloglistComponent,
    BlogdetailComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    SigninComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BlockUIModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}