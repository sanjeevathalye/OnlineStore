import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';

@Injectable() 

export class OrderRepository {

    private order: Order[] = [] ;

    constructor(private ds: StaticDataSource) {

    }

    getOrders(): Order[] {
        return this.order ;
    }
    
    saveOrder( order: Order): Observable<Order> {
        return this.ds.saveOrder(order);
    }

}