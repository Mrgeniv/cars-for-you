import { Preis } from './preis';

export class Car {
  constructor(
    public id: number,
    public knz: string,
    public bezeichnung: string,
    public model: string,
    public datum: number,
    public tank: string,
    public verbrauch: number,
    public getriebe: string,
    public ps: number,
    public preis: Preis,
    public sitze: number,
    public ort: string,
    public image?: string
  ) {}
}
