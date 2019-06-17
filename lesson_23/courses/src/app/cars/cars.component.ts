import {CarComponent} from "../car/car.component";
import {Component, ContentChild, ElementRef, OnInit, ViewChild, ViewEncapsulation}
 from '@angular/core';
import { Car } from "../models/car.model";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsComponent implements OnInit {

  @ViewChild('firstAppCar') public firstAppCar: CarComponent;
  @ViewChild('btnTest') public btnTest: ElementRef;
  @ContentChild('mainTitle') public mainTitle: ElementRef;

  public carName: string;
  public isCarAdded: boolean = false;
  public filter = '';
  public cars: Car[];
  public isMsgShow: boolean = false;

  constructor(private carsService: CarsService) {
  }

  public ngOnInit() {
    this.cars = this.carsService.cars;
    this.carsService.carAdded.subscribe((isAdded: boolean) => {
      if (isAdded) {
        this.showMessage();
      }
    });
  }

  private showMessage() {
    this.isMsgShow = true;

    setTimeout(()=> {
      this.isMsgShow = false;
    }, 3000);
  }
}
