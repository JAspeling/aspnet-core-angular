import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  ErrorComponent,
  HomeComponent,
  AddVehicleComponent
} from '../components';

@NgModule({
  declarations: [ErrorComponent, HomeComponent, AddVehicleComponent],
  providers: [],
  exports: [],
  bootstrap: []
})
export class ComponentsModule {}
