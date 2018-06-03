import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GhLayoutModule } from '@angeeks/gh-layout';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    HttpClientModule,
    GhLayoutModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
