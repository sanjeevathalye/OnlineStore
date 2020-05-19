import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()

export class  StaticDataSource {

    private products: Product[] = [
        new Product(101, 'Nike Lace up Shoe', 'Category 1', 'Sneaker Shoe (Category 1)', 99.99),
        new Product(102, 'T-shirt', 'Category 1', 'Sports T-shirt High Quality (Category 1)', 39.99),
        new Product(103, 'TR Trail Shoe', 'Category 1', 'Running Shoe (Category 1)', 89.99),
        new Product(104, 'Cooler', 'Category 1', 'High Quality Cooler (Category 1)', 49.99),
        new Product(105, 'Graphic T-shirt Grey L', 'Category 1', 'Cotton casual T-shirt (Category 1)', 29.99),
        new Product(201, 'Euphoria EDP 100 ml', 'Category 2', 'Liquid Amber, black violet (Category 2)', 19.99),
        new Product(202, 'Eternity Moment EDP 100 ml', 'Category 2', 'Brazilian Rose Wood, Cashmere Wood, Musk (Category 2)', 18.99),
        new Product(203, 'In Red EDT 100 ml', 'Category 2', 'Jasmene, Violet Leaf, Lily,  (Category 2)', 19.99),
        new Product(204, 'Flower Pink EDT 100 ml', 'Category 2', 'Othmani Rose (Category 2)', 19.99),
        new Product(205, 'Musk EDC 100 ml', 'Category 2', 'Musk EDC 100 ml (Category 2)', 29.99)
    ] ;

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
