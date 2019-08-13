import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DisplayChildComponentComponent } from './display-child-component/display-child-component.component';
import { SelectChildComponentComponent } from './select-child-component/select-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    DisplayChildComponentComponent,
    SelectChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
