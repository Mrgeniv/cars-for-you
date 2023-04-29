import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  carShow: Car;
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  showCarDetails(car: Car) {
    this.carShow = car;
  }

  addCar(car: Car): void {
    this.carService.addCar(car);
  }

  getCars(): Car[] {
    return this.carService.getCars();
  }
}
