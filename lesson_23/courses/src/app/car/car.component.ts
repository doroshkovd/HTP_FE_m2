import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() public carName: string;
  @Input() public carYear: string;

  @Output() public isNameChanges = new EventEmitter();

  constructor() {
  }

  public getName() {
    return this.carName;
  }

  public changeName() {
    this.carName = 'New name';
    this.isNameChanges.emit();
  }
}
