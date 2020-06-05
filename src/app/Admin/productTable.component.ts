// This component is responsible for showing a list of products to administrator to edit, delete or add a product

import { Component } from '@angular/core';
import { ProductRepository } from 'src/Model/product.repository';
import { Product } from 'src/Model/product.model';

@Component({
  templateUrl: './productTable.component.html'
})

export class ProductTableComponent {
  constructor( private repository: ProductRepository) {
    
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct( id: number) {
    this.repository.deleteProduct(id);
  }
}