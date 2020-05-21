import { Cart } from './cart.model';
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
  public productsPerPage = 4 ;
  public selectedPage = 1;
  public arrayLength = 0;

  constructor( private repo: ProductRepository, private cart: Cart) { }

  ngOnInit(): void {
  }

  get Products() : Product[] {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage ;
    return this.repo.getProducts(this.selectedCategory).
            slice(pageIndex, pageIndex + this.productsPerPage) ;
  }

  get Categories() : string[] {
    return this.repo.getCategories() ;
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = newSize;
  }

  getPageNumbers(): number[] {
    this.arrayLength = Math.ceil(this.repo.getProducts(this.selectedCategory).length / this.productsPerPage);
        return Array(this.arrayLength).fill(0).map((x,i) => i + 1) ;
  }

  // add product to the cart
  addProductToCart(prod: Product) {
    this.cart.addLine(prod);
  }

}
