import { Injectable } from '@angular/core';
import { Car, CarBrand } from '../interfaces/car';
import { CAR_SERIES } from '../mock/enums';
import { allCarSeries, carArray, carModelsArray } from '../mock/mock-data';

@Injectable()
export class CarService {
  cars: Car[] = carArray;
  carShow: Car;
  carModels = carModelsArray;
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

  getSeriesBasedOnBrand(carBrand: string) : Array<string> {
    const seriesBasedOnBrand = allCarSeries.find(series => series.id == carBrand);

    return seriesBasedOnBrand.series
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
