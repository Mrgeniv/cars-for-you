import {Car, CarBrand} from '../interfaces';
import {
  AUDI_SERIES_ARRAY,
  BMW_SERIES,
  BMW_SERIES_ARRAY,
  CAR_BRANDS,
  CAR_CONSTRUCTIONYEAR,
  CAR_FUEL,
  CAR_MODEL,
  CAR_MODS,
  CAR_SERIES,
  CAR_SITS,
  CAR_TRANSMISSION,
  CAR_VARIANTS_ARRAY,
  CarsData,
  FIAT_SERIES_ARRAY,
  HYUNDAI_SERIES_ARRAY,
  LYNKCO_SERIES_ARRAY,
  MERCEDES_SERIES_ARRAY,
  MG_SERIES_ARRAY,
  POLESTAR_SERIES_ARRAY, SeriesType,
  TESLA_SERIES_ARRAY,
  VW_MOD_ARRAY,
  VW_SERIES_ARRAY
} from "../types";

export function generateId(): number {
  const id = Math.floor(Math.random() * 1000000);
  return id;
}
export const carModelsArray: Array<Car['details']['model']> = [
    CAR_MODEL.CABRIO, CAR_MODEL.ELEKTRO, CAR_MODEL.LIMOUSINE, CAR_MODEL.KOMPAKT, CAR_MODEL.COUPE, CAR_MODEL.PICKUP, CAR_MODEL.KOMBI, CAR_MODEL.CABRIO, CAR_MODEL.SUV, CAR_MODEL.VAN
];

export const data: CarsData = [
  {
    brandId: CAR_BRANDS.VW, series: VW_SERIES_ARRAY, mods: VW_MOD_ARRAY
  }
]

export const allCarSeries: Array<AllCarSeriesArray> = [
  {
    id: CAR_BRANDS.VW, series: VW_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.AUDI, series: AUDI_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.MERCEDES, series: MERCEDES_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.BMW, series: BMW_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.FIAT, series: FIAT_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.OPEL, series: FIAT_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.HYUNDAI, series: HYUNDAI_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.TESLA, series: TESLA_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.POLESTAR, series: POLESTAR_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.MG, series: MG_SERIES_ARRAY
  },
  {
    id: CAR_BRANDS.LYNKCO, series: LYNKCO_SERIES_ARRAY
  }
]

export type AllCarSeriesArray = {id : CarBrand, series: Array<SeriesType>}
export const c = CAR_VARIANTS_ARRAY.map(brand => brand)

export const carArray: Array<Car> = [{
  id: 1,
  image: 'https://bit.ly/3obVxil',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.CABRIO,
    price: 500,
    horsePower: 666,
    seatsAmount: CAR_SITS.ZWEISITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'SL',

    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 2,
  image: 'https://bit.ly/3n73A04',
  details: {
    brand: CAR_BRANDS.BMW,
    model: CAR_MODEL.COUPE,
    price: 400,
    horsePower: 555,
    seatsAmount: CAR_SITS.ZWEISITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: '4er',
    modifications: 'M Competition',
   
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDZWANZIG,
    fuelConsumptionRateInLiter: 40,
    placeOfRental: 'Bremen'
  }
}, {
  id: 3,
  image: 'https://bit.ly/3moybpv',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.VAN,
    price: 300,
    horsePower: 333,
    seatsAmount: CAR_SITS.SIEBENSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.HYBRID,
    series: 'V',
    variant: '166L',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDEINUNDZWANZIG,
    fuelConsumptionRateInLiter: 33,
    placeOfRental: 'Köln'
  }
}, {
  id: 4,
  image: 'https://bit.ly/3UzgFLH',
  details: {
    brand: CAR_BRANDS.AUDI,
    model: CAR_MODEL.SUV,
    price: 700,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'Q5',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 5,
  image: 'https://bit.ly/417Plqo',
  details: {
    brand: CAR_BRANDS.AUDI,
    model: CAR_MODEL.LIMOUSINE,
    price: 500,
    horsePower: 544,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'A8',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Berlin'
  }
}, {
  id: 6,
  image: 'https://bit.ly/41pzN0V',
  details: {
    brand: CAR_BRANDS.OPEL,
    model: CAR_MODEL.SUV,
    price: 350,
    horsePower: 222,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.ELEKTRO,
    series: 'Crossland',
    variant: 'X',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDACHTZEHN,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 7,
  image: 'https://bit.ly/41qjK2O',
  details: {
    brand: CAR_BRANDS.BMW,
    model: CAR_MODEL.LIMOUSINE,
    price: 544,
    horsePower: 900,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.MAUNELL,
    fuelType: CAR_FUEL.BENZIN,
    series: '5er',
    modifications: 'M',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDFUENFZEHN,
    fuelConsumptionRateInLiter: 12,
    placeOfRental: 'Bremen'
  },
}, {
  id: 8,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.VW,
    model: CAR_MODEL.KOMPAKT,
    price: 150,
    horsePower: 321,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.ELEKTRO,
    series: 'Golf',
    variant: 'GTE',
  
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDNEUN,
    fuelConsumptionRateInLiter: 10,
    placeOfRental: 'Bremen'
  }
}, {
  id: 9,
  image: 'https://bit.ly/4148wkI',
  details: {
    brand: CAR_BRANDS.TESLA,
    model: CAR_MODEL.ELEKTRO,
    price: 600,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'Model',
    variant: 'Y',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    placeOfRental: 'Köln'
  }
}, {
  id: 10,
  image: 'https://bit.ly/3Gl7gSb',
  details: {
    brand: CAR_BRANDS.VW,
    model: CAR_MODEL.SUV,
    price: 90,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.ELEKTRO,
    series: 'Tiguan',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 11,
  image: 'https://bit.ly/3KI5uMb',
  details: {
    brand: CAR_BRANDS.MG,
    model: CAR_MODEL.SUV,
    price: 432,
    horsePower: 34,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.HYBRID,
    series: 'EHS',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDSECHS,
    fuelConsumptionRateInLiter: 10,
    placeOfRental: 'Berlin'
  }
}];
