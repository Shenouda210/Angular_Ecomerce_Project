import { Product } from 'src/app/app2/ViewModel/Products';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-from-api',
  templateUrl: './product-from-api.component.html',
  styleUrls: ['./product-from-api.component.scss']
})
export class ProductFromAPIComponent implements OnInit {
  productList: Product[];
  constructor(private ProductFromAPIService: ProductService) { }

  ngOnInit() {
    this.ProductFromAPIService.GetProduct().subscribe((data) => {
      this.productList = data;
    },
      (err) => {console.error(err)
    });
  }
}
