import {
  HttpClient,
  HttpClientModule,
  HttpHandler
} from '@angular/common/http';
import { VegaHttpClient } from '../services/vega.httpClient';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';

import {
  ErrorComponent,
  HomeComponent,
  AddVehicleComponent
} from '../components';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@NgModule({
  imports: [FormsModule, BrowserModule, HttpClientModule, LoadingModule],
  declarations: [ErrorComponent, HomeComponent, AddVehicleComponent],
  providers: [HttpClient, VegaHttpClient, VehicleService],
  exports: [],
  bootstrap: []
})
export class ComponentsModule {}
