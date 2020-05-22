import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './../checkout/checkout.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { StoreComponent } from './store.component';
import { ModelModule } from './../../Model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckoutComponent
    ],
    
    imports: [
      BrowserModule,
      FormsModule,
      ModelModule,
      RouterModule
    ],
    
    exports: [
        StoreComponent, CartDetailsComponent, CheckoutComponent
    ]
  })

  export class StoreModule {

  }

