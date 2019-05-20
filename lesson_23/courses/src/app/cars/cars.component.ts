import {CarComponent} from "../car/car.component";
import {Component, ContentChild, ElementRef, OnInit, ViewChild, ViewEncapsulation}
  from '@angular/core';
import { Car } from "../models/car.model";

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
  public cars: Car[] = [{
    carName: 'Ford',
    carYear: '2009'
  },{
    carName: 'BMW',
    carYear: '2019'
  },
  ];
  public isMsgShow: boolean = false;

  constructor() {
  }

  public ngOnInit() {
  }

  public onCarAdded(car: Car) {
    this.cars.push(car);
    this.showMessage();
  }

  private showMessage() {
    this.isMsgShow = true;

    setTimeout(()=> {
      this.isMsgShow = false;
    }, 3000);
  }

}
