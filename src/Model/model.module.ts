import { OrderRepository } from './order.repository';
import { Cart } from './../app/store/cart.model';
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource' ;
import { Order } from './order.model';

@NgModule ({
    providers: [ ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})

export class ModelModule {

}
