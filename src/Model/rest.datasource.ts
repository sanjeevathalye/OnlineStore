import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Cart } from './../app/store/cart.model';
import { Order } from './order.model';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

const PROTOCOL= 'http';
const PORT= 4210 ;

@Injectable()

export class RestDataSource {
    baseUrl: string;
    authToken: string;

    constructor(private http: HttpClient) {
        this.baseUrl= `${PROTOCOL}://${location.hostname}:${PORT}/`
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + 'products');
    }

    saveOrder(order: Order) : Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + 'login', 
        { name: user, password: pass}).pipe(map(response =>
            {
                this.authToken = response.success? response.token: null;
                return response.success;
            }));
    }

    // Admin related functions

    // Saving Product
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + 'products', product, this.getOptions());
    }

    // Updating Product
    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>
            (`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    }

    // Deleting product
    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product> 
        (`${this.baseUrl}products/${id}`, this.getOptions());  
    }

    // Getting orders
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + 'orders', this.getOptions());
    }

    // Updating order
    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>
            (`${this.baseUrl}orders/${order.orderID}`, order, this.getOptions());
    }

    // Deleting order
    deleteOrder(id: number): Observable<Order>  
    {
        return this.http.delete<Order> 
        (`${this.baseUrl}orders/${id}`, this.getOptions());  
    }

   private getOptions() {
        return { 
            headers: new HttpHeaders
            ({
                'Authorization': `Bearer<${this.authToken}`
             })
        }
    }
}