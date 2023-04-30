import {Car} from '../interfaces/car';
import {CAR_BRANDS, CAR_CONSTRUCTIONYEAR, CAR_FUEL, CAR_MODEL, CAR_SITS, CAR_TRANSMISSION} from "./enums";

export function generateId(): number {
  const id = Math.floor(Math.random() * 1000000);
  return id;
}
export const carModelsArray: Array<Car['details']['model']> = [
    CAR_MODEL.CABRIO, CAR_MODEL.ELEKTRO, CAR_MODEL.LIMOUSINE, CAR_MODEL.KOMPAKT, CAR_MODEL.COUPE, CAR_MODEL.PICKUP, CAR_MODEL.KOMBI, CAR_MODEL.CABRIO, CAR_MODEL.SUV, CAR_MODEL.VAN
];

export const carArray: Array<Car> = [{
  id: 1,
  image: 'https://bit.ly/3obVxil',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 500,
    horsePower: 666,
    seatsAmount: CAR_SITS.ZWEISITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',

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
    series: '4',
    variant: 'Competition',
   
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
    series: 'Vito',
   
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
    series: 'Q',
    variant: '5',
    modifications: 'S',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 5,
  image: 'https://bit.ly/417Plqo',
  details: {
    brand: CAR_BRANDS.AUDI,
    model: CAR_MODEL.COUPE,
    price: 500,
    horsePower: 544,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'A',
    variant: '8',
    modifications: 'RS',
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
    model: CAR_MODEL.COUPE,
    price: 544,
    horsePower: 900,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.MAUNELL,
    fuelType: CAR_FUEL.BENZIN,
    series: '5',

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
