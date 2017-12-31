import { VegaHttpClient } from './vega.httpClient';
import { Injectable } from '@angular/core';
import { Feature } from '../classes/feature';
import { Make, Model } from '../classes/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {
  constructor(private httpClient: VegaHttpClient) {}

  getDummyFeatures(): Feature[] {
    return [
      new Feature({ id: 1, name: 'Feature 1' }),
      new Feature({ id: 2, name: 'Feature 2' }),
      new Feature({ id: 3, name: 'Feature 3' })
    ];
  }

  getDummyMakes(): Make[] {
    return [
      new Make({
        id: 1,
        name: 'Make 1',
        models: [
          new Model({ id: 1, name: 'Model 1' }),
          new Model({ id: 2, name: 'Model 2' })
        ]
      }),
      new Make({
        id: 2,
        name: 'Make 2',
        models: [
          new Model({ id: 1, name: 'Model 1' }),
          new Model({ id: 2, name: 'Model 2' }),
          new Model({ id: 3, name: 'Model 3' })
        ]
      }),
      new Make({
        id: 3,
        name: 'Make 3',
        models: [
          new Model({ id: 1, name: 'Model 1' }),
          new Model({ id: 2, name: 'Model 2' }),
          new Model({ id: 3, name: 'Model 3' }),
          new Model({ id: 4, name: 'Model 4' })
        ]
      })
    ];
  }

  getMakes(): Observable<Make[]> {
    return this.httpClient.get('makes');
  }

  getFeatures(): Observable<Feature[]> {
    return this.httpClient.get('features');
  }

  getDummyModels(): Model[] {
    return [
      new Model({ id: 1, name: 'Model 1' }),
      new Model({ id: 2, name: 'Model 2' }),
      new Model({ id: 3, name: 'Model 3' })
    ];
  }
}
