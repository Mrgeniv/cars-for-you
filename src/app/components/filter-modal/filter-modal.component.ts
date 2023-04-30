import { Component, OnInit, OnChanges } from '@angular/core';
import { c } from 'src/app/mock/mock-data';
import { Car, CarBrand } from '../../interfaces';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit, OnChanges {
  carModels: Array<Car['details']['model']>;
  carBrands: Array<CarBrand | 'Beliebig' >;
  selectedCarBrand: string = '';
  carSeriesBasedOnSelectedBrand: string[] = [];
  constructor(private carService: CarService) {}

 seriesBasedOnBrand(string: string) {
  this.carService.getSeriesBasedOnBrand(string);
 }

 handleSelectChange(event: Event) {
const target = event.target as HTMLSelectElement;
this.selectedCarBrand = target.value;
if( this.selectedCarBrand !== 'Beliebig') {
  this.carSeriesBasedOnSelectedBrand = this.carService.getSeriesBasedOnBrand(this.selectedCarBrand);
} else {
  this.carSeriesBasedOnSelectedBrand = [];
}

 }

 ngOnChanges() {


 }


  ngOnInit() {
    this.carModels = this.carService.getCarModels();
    this.carBrands = ['Beliebig', ...this.carService.getCarBrands()];
    console.log(c);
  }
}
