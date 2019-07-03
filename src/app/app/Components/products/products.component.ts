import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/app/Services/products.service';
import { Product } from 'src/app/app/View Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products: Product[];
  constructor(private ProductsServices: ProductsService,private router: Router ) { }

  ngOnInit() {
    this.ProductsServices.GetAllProducts().subscribe(prods => {this.Products = prods; } ,
      error => {console.log(error);
      });
  }
  DisplayProductDetails(ProdID: number) {
this.router.navigate(['ProductDetails/', ProdID] );

  }
  addNewProduct() {
this.router.navigate(['addProduct']);
  }
  editProduct(ProdID: number) {
    this.router.navigate(['EditProduct/', ProdID ]);
      }
  DeleteProduct(ProdID: number) {
        this.router.navigate(['DeleteProduct/', ProdID ]);
          }

}
