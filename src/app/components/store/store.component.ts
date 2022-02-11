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

  constructor(private repoistory: ProductRepository) { }

  ngOnInit(): void {
  }
  get products (): Product[] {
    return this.repoistory.getProducts(this.selectedCategory);
  }
  get categories (): (string | undefined)[] {
    return this.repoistory.getCategories()
  }
  changeCategory (newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
