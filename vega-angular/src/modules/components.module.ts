import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  ErrorComponent,
  HomeComponent,
  AddVehicleComponent
} from '../components';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [ErrorComponent, HomeComponent, AddVehicleComponent],
  providers: [VehicleService],
  exports: [],
  bootstrap: []
})
export class ComponentsModule {}
