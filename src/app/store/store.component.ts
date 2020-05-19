import { ProductRepository } from './../../Model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;

  constructor( private repo: ProductRepository) { }

  ngOnInit(): void {
  }

  get Products() : Product[] {
    return this.repo.getProducts(this.selectedCategory) ;
  }

  get Categories() : string[] {
    return this.repo.getCategories() ;
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
