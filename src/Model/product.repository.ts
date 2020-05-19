import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';

@Injectable()

export class ProductRepository {
    private products: Product[] = [] ;
    private categories: string[] = [] ;

    constructor(ds: StaticDataSource) {
        ds.getProducts().subscribe( data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter( (c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    // get the list of products belonging to the given category
    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }

    // get a specific product matching the given product id
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    // get all categories
    getCategories(): string[] {
        return this.categories;
    }
}
