import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {
  getFeatures(): string[] {
    return ['Feature 1', 'Feature 2', 'asdfasdf 3'];
  }
}
