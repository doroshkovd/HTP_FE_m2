import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  public answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  public defaultRadio = 'yes';
  public defaultSelect = 'by';
  public defaultName = 'Ivan';
  public defaultPsw = '123456';

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    console.log(this.form.value);
    this.form.reset();
  }

  public setDefaultValues() {
    this.form.form.patchValue({
      userData: {
        name: this.defaultName,
        password: this.defaultPsw,
      },
    });

    // this.form.setValue({
    //   userData: {
    //     name: this.defaultName,
    //     password: this.defaultPsw,
    //   },
    //   country: this.defaultSelect,
    //   answer: this.defaultRadio,
    // });
  }
}
