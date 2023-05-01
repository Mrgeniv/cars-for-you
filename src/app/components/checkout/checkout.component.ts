import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carId: number
  sub: any
  currentCar: Car;
    
  constructor(private route: ActivatedRoute,private carService:CarService){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.carId = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here. 
    });

    this.currentCar = this.carService.getCarById(this.carId);
    console.log(this.currentCar);

  }

}
