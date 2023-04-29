import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit {
  carModels: Array<Car['model']>;
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carModels = this.carService.getCarModels();
  }
}
