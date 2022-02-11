import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModelsModule} from "../../models/models.module";
import {FormsModule} from "@angular/forms";
import {StoreComponent} from "./store.component";
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';



@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    ModelsModule,
    FormsModule
  ],
  exports: [
    StoreComponent,
    CartDetailComponent,
    CheckoutComponent,
  ]
})
export class StoreModule { }
