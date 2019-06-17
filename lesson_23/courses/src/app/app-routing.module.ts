import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Form2Component} from "./form2/form2.component";
import {CarsComponent} from "./cars/cars.component";

const routes: Routes = [
  {
    path: '',
    component: Form2Component
  },
  {
    path: 'cars',
    component: CarsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {

}
