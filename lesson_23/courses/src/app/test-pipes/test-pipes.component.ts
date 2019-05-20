import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {

  public name: string = 'Name Second Name';
  public money: number = 350;
  public amount: number = 0.45;
  public num: number = 2.53456677;
  public obj: any = {
    test: 1,
    test2: 2,
    test3: 3,
  };




  constructor() { }

  ngOnInit() {
  }

}
