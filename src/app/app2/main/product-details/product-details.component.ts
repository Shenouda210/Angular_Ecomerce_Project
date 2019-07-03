import { SharedService } from './../../Services/shared.service';
import { Sizes } from './../../ViewModel/sizes';
import { Colors } from './../../ViewModel/colors';
import { Product } from 'src/app/app2/ViewModel/Products';
import { ProductService } from 'src/app/app2/Services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlert } from 'src/app/app2/ViewModel/IAlert';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  proDetails: Product;
  ColorList: Colors[];
  SizesList: Sizes[];
  Quantity: number = 0;

  public alerts: Array<IAlert> = [];
  cartItemCount: number = 0;
  @Output() cartEvent = new EventEmitter<number>();
  public globalResponse: any;
  yourByteArray: any;
  productAddedTocart: Product[];
  constructor(private ProductFromAPIService: ProductService, private sharedService: SharedService , private router: ActivatedRoute) {

   }

  ngOnInit() {
     const setId = this.router.snapshot.paramMap.get('id');
     this.ProductFromAPIService.GetProductById(setId).subscribe((proDetails) => { this.proDetails = proDetails; },
      (err) => { console.error(err);
     });
    //  Get All COlors From API
     this.ProductFromAPIService.GetColor().subscribe((colrs) => {this.ColorList = colrs; },
      (err) => {console.error(err);
     });

     //  Get All Sizes From API
     this.ProductFromAPIService.GetSize().subscribe((sizes) => {this.SizesList = sizes; },
      (err) => {console.error(err);
     });

  }


  OnAddCart(product: Product) {

    this.productAddedTocart = this.ProductFromAPIService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      product.Quantity = this.Quantity;
      this.productAddedTocart.push(product);
      this.ProductFromAPIService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
   }, 3000);
      console.log(product);

    } else {
      const tempProduct = this.productAddedTocart.find( p => p.ID == product.ID);
      if (tempProduct == null) {
        this.productAddedTocart.push(product);
        this.ProductFromAPIService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        // setTimeout(function(){ }, 2000);
        setTimeout(() => {
          this.closeAlert(this.alerts);
     }, 3000);
      }
      else
      {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
     }, 3000);
      }

    }
    // console.log(this.cartItemCount);
    this.cartItemCount = this.productAddedTocart.length;
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateCartCount(this.cartItemCount);
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}


}
