
// This component is responsible for allowing the dministrator to enter the details required to create or edit a product


import { ProductRepository } from './../../Model/product.repository';
import { Product } from 'src/Model/product.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './productEditor.component.html'
})

export class ProductEditorComponent {

  editing = false;
  product: Product = new Product();

  constructor( private repository: ProductRepository, private router: Router, activateRoute: ActivatedRoute) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProduct(activateRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
