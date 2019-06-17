import {Car} from "./models/car.model";
import {BehaviorSubject} from "rxjs";

export class CarsService {

  public cars: Car[] = [{
    carName: 'Ford',
    carYear: '2009'
  },{
    carName: 'BMW',
    carYear: '2019'
  },
  ];

  public carAdded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public addCar(car: Car) {
    this.cars.push(car);
    this.carAdded.next(true);
  }
}
