import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepository} from "./product.repository";
import { Cart } from './cart';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository, 
    Cart
  ]
})
export class ModelsModule { }
