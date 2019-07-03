import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { Product } from 'src/app/app/View Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/app/Services/products.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selProduct: Product;
  constructor(private product: ProductsService, private activatedRoute: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.product.GetProductById(selId).subscribe(cat => { this.selProduct = cat },
      err => { console.log(err); });
  }
  goback() {
    this.location.back();
  }
  editCategory(catID: number) {
    this.router.navigate(['EditProduct/', catID]);
  }
}
