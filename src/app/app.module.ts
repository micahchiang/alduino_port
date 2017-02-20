import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoRollComponent } from './photo-roll/photo-roll.component';
import { DefaultImage } from './default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotoRollComponent,
    DefaultImage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
