import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/app/View Models/product';
import { ProductsService } from 'src/app/app/Services/products.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { from } from 'rxjs';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { AddCategory } from 'src/app/app/View Models/addaa-category';
import { forEach } from '@angular/router/src/utils/collection';
import { Icategory } from 'src/app/app/View Models/icategory';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
categories: Icategory[];
  NewProduct: Product;
  cat_ID: number;
  constructor(private categoriesServe: CategoriesService,private ProductService: ProductsService, private router: Router, private location: Location) {
    this.NewProduct = new Product();
    
  }

  ngOnInit() {
    this.categoriesServe.GetAllCategories().subscribe(cats =>{ this.categories = cats},
      error => console.log(error));
  }
  addNewCategory(): void {
    this.NewProduct.category_ID = this.cat_ID;
    this.ProductService.addProduct(this.NewProduct)
    .subscribe( data => { console.log(data),
      this.router.navigate(['/Products']); },
      err => { console.log(err); });
  }
  goback(){
    this.location.back();
  }
}
