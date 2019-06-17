import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from "../models/car.model";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public carName: string;
  public carYear: string;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
  }

  public addCar() {
    this.carsService.addCar({carName: this.carName, carYear: this.carYear});
    this.carName = '';
    this.carYear = '';
  }
}
