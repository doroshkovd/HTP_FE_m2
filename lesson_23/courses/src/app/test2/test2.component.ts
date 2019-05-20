import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

  public message = 'Test message';

  public items: number[] = [1,2,3,4,5];
  public value: number = this.items[0]
  constructor() {
  }

  public onClick(value: number): void {
    this.value = value;
  }

}
