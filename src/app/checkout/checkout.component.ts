import { OrderRepository } from './../../Model/order.repository';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/Model/order.model';
import { Subscriber } from 'rxjs';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  orderSent = false;
  orderSubmitted = false;

  constructor( public order: Order, public repo: OrderRepository) { }

  ngOnInit(): void {
  }

  submitOrder (form: NgForm) {
    this.orderSubmitted = true;
    if (form.valid) {
      this.repo.saveOrder(this.order).subscribe (order => {
        this.order.clearOrder();
        this.orderSent = true;
        this.orderSubmitted = false;
      })
    }
  }

}
