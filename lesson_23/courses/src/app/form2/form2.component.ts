import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  public answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  public form: FormGroup;

  constructor(public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      userData: new FormGroup({
        name: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required)
      }),
      country: new FormControl('by'),
      answer: new FormControl('yes'),
    });
  }

  public onSubmit() {
    console.log(this.form);
  }

  public goToCars() {
    this.router.navigate(['/cars']);
  }
}

