import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import {CarComponent} from "./car/car.component";
import {CarsComponent} from "./cars/cars.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import { BackDirective } from './back.directive';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { MultPipe } from './mult.pipe';
import { FiltrPipe } from './filtr.pipe';
import {CarsService} from "./cars.service";
import {Form2Component} from "./form2/form2.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    BackDirective,
    TestPipesComponent,
    MultPipe,
    FiltrPipe,
    Form2Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
