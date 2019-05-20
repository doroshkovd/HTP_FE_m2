import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from "../models/car.model";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public carName: string;
  public carYear: string;

  @Output() carAdded: EventEmitter<Car> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addCar() {
    this.carAdded.emit({carName: this.carName, carYear: this.carYear});
    this.carName = '';
    this.carYear = '';
  }
}
