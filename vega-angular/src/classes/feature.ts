export class Feature {
  constructor(init?: Partial<Feature>) {
    Object.assign(this, init);
  }
  id: number;
  name: string;
}
