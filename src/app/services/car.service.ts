import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { mockCarArray, mockCarClassCollection } from '../mock/mock-data';

@Injectable()
export class CarService {
  cars: Car[] = mockCarArray;
  carShow: Car;
  carModels = mockCarClassCollection;
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

  getCarModels(): Array<Car['model']> {
    return this.carModels;
  }

  updateCar(car: Car): void {
    const index = this.cars.findIndex((c) => c.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
    }
  }
}
