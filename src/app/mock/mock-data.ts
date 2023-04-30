import {Car} from '../interfaces/car';
import {CAR_BRANDS, CAR_CONSTRUCTIONYEAR, CAR_FUEL, CAR_MODEL, CAR_SITS, CAR_TRANSMISSION} from "./enums";

export function generateId(): number {
  const id = Math.floor(Math.random() * 1000000);
  return id;
}
export const carModelsArray: Array<Car['details']['model']> = [
    CAR_MODEL.CABRIO, CAR_MODEL.ELEKTO, CAR_MODEL.LIMOUSINE, CAR_MODEL.KOMPAKT, CAR_MODEL.COUPE, CAR_MODEL.PICKUP, CAR_MODEL.KOMBI, CAR_MODEL.CABRIO, CAR_MODEL.SUV, CAR_MODEL.VAN
];

export const carArray: Array<Car> = [{
  id: 1,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 2,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 3,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 4,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 5,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 6,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 7,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  },
}, {
  id: 8,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 9,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 10,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}, {
  id: 11,
  image: 'https://bit.ly/3mcT32M',
  details: {
    brand: CAR_BRANDS.MERCEDES,
    model: CAR_MODEL.COUPE,
    price: 50000,
    horsePower: 666,
    seatsAmount: CAR_SITS.VIERSITZER,
    transmissionType: CAR_TRANSMISSION.AUTOMATIK,
    fuelType: CAR_FUEL.BENZIN,
    series: 'S',
    variant: '63',
    modifications: 'AMG',
    yearOfConstruction: CAR_CONSTRUCTIONYEAR.ZWEITAUSENDDREIUNDZWANZIG,
    fuelConsumptionRateInLiter: 35,
    placeOfRental: 'Köln'
  }
}];
