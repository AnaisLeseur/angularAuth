import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreComponent } from './components/store/store.component';
import { StoreFirstGuard } from './store-first.guard';

const routes: Routes = [
  { path: "store", component:StoreComponent, canActivate:[StoreFirstGuard]},
  { path: "cart", component:CartDetailComponent, canActivate:[StoreFirstGuard]},
  { path: "checkout", component:CheckoutComponent, canActivate:[StoreFirstGuard]},
  { path: "**", redirectTo:"/store"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard],
})
export class AppRoutingModule { }
