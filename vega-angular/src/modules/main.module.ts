import { ComponentsModule } from './components.module';
import { AppComponent } from '../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }
