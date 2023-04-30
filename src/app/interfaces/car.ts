import { Preis } from './preis';

export interface Car {
   id: number,
   knz: string,
   bezeichnung: string,
   model: string,
   datum: number,
   tank: string,
   verbrauch: number,
   getriebe: string,
   ps: number,
   sitze: number,
   ort: string,
   image?: string
}
