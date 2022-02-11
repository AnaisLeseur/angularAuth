import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../models/product.repository";
import {Product} from "../../models/product";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory:any;
  public productPerPage = 4;
  public selectedPage = 1;

  constructor(private repoistory: ProductRepository) { }

  ngOnInit(): void {
  }
  get products (): Product[] {
    let pageIndex = (this.selectedPage -1)*this.productPerPage;
    return this.repoistory.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productPerPage);
  }
  get categories (): (string | undefined)[] {
    return this.repoistory.getCategories()
  }
  changeCategory (newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  changePage (newPage:number) {
    this.selectedPage = newPage;
  }
  changePageSize (newSize:number) {
    this.productPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers ():number[] {
    return Array(Math.ceil(this.repoistory.getProducts(this.selectedCategory).length/this.productPerPage)).fill(0).map((x, i)=>i+1);
  }
}
