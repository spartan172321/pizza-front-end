import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PizzaOrderComponent} from './components/pizza-order/pizza-order.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"order",component:PizzaOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
