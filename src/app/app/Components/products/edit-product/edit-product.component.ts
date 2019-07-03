import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/app/Services/products.service';
import { Product } from 'src/app/app/View Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { from } from 'rxjs';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  SelectedProduct: Product;
  constructor(private ProductsService: ProductsService, private activatedRoute: ActivatedRoute, private location: Location , private router:Router) {


  }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.ProductsService.GetProductById(selId).subscribe(data => { this.SelectedProduct = data; });
  }
  editProduct() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.ProductsService.editProduct(selId, this.SelectedProduct).subscribe(data => {
      console.log(data),
      this.router.navigate(['/Products']),
        error => { console.log(error);}
    });
  }
  goback(){
    this.location.back();
  }
}
