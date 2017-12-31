export class Model {
  constructor(init?: Partial<Model>) {
    Object.assign(this, init);
  }

  id: number;
  name: string;
}
