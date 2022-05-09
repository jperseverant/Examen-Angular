import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopMenuComponentComponent} from "./top-menu-component/top-menu-component.component";
import {FormsModule} from "@angular/forms";
import { TimeLineComponentComponent } from './time-line-component/time-line-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponentComponent,
    TimeLineComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
