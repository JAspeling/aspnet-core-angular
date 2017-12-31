import { Model } from './index';

export class Make {
  constructor(init?: Partial<Make>) {
    Object.assign(this, init);
  }

  id: number;
  name: string;
  models: Model[] = [];
}
