import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    OuterComponent,
    InnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
