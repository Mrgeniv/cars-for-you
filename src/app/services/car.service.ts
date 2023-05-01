import { Injectable } from '@angular/core';
import { Car, CarBrand } from '../interfaces';
import {CAR_SERIES, SeriesType, VariantsType} from '../types';
import { carArray, carModelsArray, data } from '../mock/mock-data';

@Injectable()
export class CarService {
  cars: Car[] = carArray;
  carShow: Car;
  carModels = carModelsArray;
  seriesBasedOnBrand: Array<SeriesType>
  variantsBasedOnSeries: VariantsType
  constructor() {}

  showCarDetails(car: Car) {
    this.carShow = car;
  }
  addCar(car: Car): void {
    this.cars.push(car);
  }
  getCars(): Car[] {
    return this.cars;
  }

  getCarBrands() : Array<CarBrand> {
    const brandsOfCarPool =  this.cars.map(car => car.details.brand);
    const uniqueBrandsOfCaPool = [...new Set(brandsOfCarPool)];
    return uniqueBrandsOfCaPool;

  }

  getSeriesBasedOnBrand(carBrand: string) : Array<SeriesType> {
    this.seriesBasedOnBrand = data.find(series => series.brandId === carBrand).series;

    return this.seriesBasedOnBrand
  }

  getVariantsBasedOnSeries(series: string) : Array<string> {
    this.variantsBasedOnSeries = this.seriesBasedOnBrand.find(variants => variants.seriesId === series).variants;
   return this.variantsBasedOnSeries
  } 

  getCarModels(): Array<Car['details']['model']> {
    return this.carModels;
  }

  deleteCar(carToDelete:Car){
   this.cars.splice(this.cars.indexOf(carToDelete),1);
  }

 

  updateCar(car: Car): void {
    const index = this.cars.findIndex((c) => c.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
    }
  }
}
