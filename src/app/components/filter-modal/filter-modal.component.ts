import { Component, OnInit, OnChanges } from '@angular/core';
import { c, data } from 'src/app/mock/mock-data';
import { SeriesType } from 'src/app/types';
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
  carSeriesBasedOnSelectedBrand: SeriesType[] = [];
  carVariantsBasedOnSlectedSeries: string[] = []
  constructor(private carService: CarService) {}

 handleSelectChangeForBrand(event: Event) {
const target = event.target as HTMLSelectElement;
this.selectedCarBrand = target.value;
console.log(this.selectedCarBrand);
if( this.selectedCarBrand !== 'Beliebig') {
  this.carSeriesBasedOnSelectedBrand = this.carService.getSeriesBasedOnBrand(this.selectedCarBrand);
  console.log(this.carSeriesBasedOnSelectedBrand);
} else {
  this.carSeriesBasedOnSelectedBrand = [];
}

 }

 ngOnChanges() {


 }


  ngOnInit() {
    this.carModels = this.carService.getCarModels();
    this.carBrands = ['Beliebig', ...this.carService.getCarBrands()];
    console.log(data);
  }
}
