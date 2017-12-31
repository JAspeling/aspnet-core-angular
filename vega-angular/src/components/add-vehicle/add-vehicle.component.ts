import { VegaHttpClient } from '../../services/vega.httpClient';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Model, Feature, Make, NgxLoadingOptions } from '../../classes';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  features: Feature[] = [];
  models: Model[] = [];
  makes: Make[] = [];
  selectedMakeId: number;
  selectedModelId: number;
  vehicleRegistered: string;
  loadingFeatures = false;
  loadingMakes = false;
  loadingOptions: NgxLoadingOptions = new NgxLoadingOptions({
    backdropBackgroundColour: 'rgba(0, 0, 0, 0.1)'
  });

  constructor(
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.getMakes();
    this.getFeatures();
  }

  private getMakes() {
    this.loadingMakes = true;
    this.vehicleService.getMakes().subscribe(
      (response: Make[]) => {
        this.makes = response;
        this.loadingMakes = false;
      },
      error => {
        console.log('Failed to get the Makes', error);
        this.loadingMakes = false;
      }
    );
  }

  private getFeatures(): any {
    this.loadingFeatures = true;
    this.vehicleService.getFeatures().subscribe(
      (response: Feature[]) => {
        this.features = response;
        this.loadingFeatures = false;
      },
      error => {
        console.log('Failed to retrieve Features!', error);
        this.loadingFeatures = false;
      }
    );
  }

  onSubmit(form: NgForm, event: Event) {
    console.log('Submitted!', form, event);
  }
  onMakeChange(makeId: number) {
    console.log('Selected Make', this.selectedMakeId);
    this.models = this.makes.find(m => m.id == makeId).models;
    if (!this.models.find(m => m.id == this.selectedModelId)) {
      this.selectedModelId = undefined;
    }
  }

  onModelChange(makeId: number) {
    console.log('Selected Model', this.selectedModelId);
    // if (!this.models.find(m => m.id == this.selectedModelId)) {
    //   this.selectedModelId = undefined;
    // }
  }
}
