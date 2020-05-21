import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { StoreComponent } from './store.component';
import { ModelModule } from './../../Model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent
    ],
    
    imports: [
      BrowserModule,
      FormsModule,
      ModelModule
    ],
    
    exports: [
        StoreComponent
    ]
  })

  export class StoreModule {

  }

