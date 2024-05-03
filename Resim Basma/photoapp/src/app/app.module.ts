import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //1.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPhotoComponent } from './display-photo/display-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
