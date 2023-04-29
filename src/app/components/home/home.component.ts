import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carsArray: CarService['cars'] = [];
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carsArray = this.carService.getCars();
    console.log(this.carsArray);
  }
}
