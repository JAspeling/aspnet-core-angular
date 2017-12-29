import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  features: string[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.features = this.vehicleService.getFeatures();
  }

  onSubmit(form: NgForm, event: Event) {
    console.log('Submitted!', form, event);
  }
}
