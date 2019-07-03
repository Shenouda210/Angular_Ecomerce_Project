import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/app/Services/products.service';
import {Location} from '@angular/common';
import { Product } from 'src/app/app/View Models/product';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
selectedProduct: Product;
  constructor( private productService: ProductsService, private activatedRoute: ActivatedRoute, private location: Location , private router:Router) { }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.productService.GetProductById(selId).subscribe(data => { this.selectedProduct = data; });
  }
  deletecategory() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.productService.deleteProduct(selId).subscribe(data => {
      console.log(data),
      this.router.navigate(['/Products']),
        error => { console.log(error);}
    });
  }
  goback(){
    this.location.back();
  }
}
