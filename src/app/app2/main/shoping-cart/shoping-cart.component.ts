import { Order } from './../../ViewModel/Order';
import { ProductService } from 'src/app/app2/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/app2/ViewModel/Products';
import { IAlert } from 'src/app/app2/ViewModel/IAlert';
import { OrderService } from 'src/app/app2/Services/order.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  dafualtQuantity = 1;
  Quantity: number;
  productAddedTocart: Product[];
  allTotal: number;
  // ProductList: Product[];
  public alerts: Array<IAlert> = [];

  constructor(private ProductFromAPIService: ProductService, private orderService: OrderService) {
    // this.ProductList = JSON.parse( localStorage.getItem('product'));
   }

  ngOnInit() {
    this.productAddedTocart = this.ProductFromAPIService.getProductFromCart();
    // tslint:disable-next-line: forin
    // for (const i in this.productAddedTocart) {
    //    this.productAddedTocart[i].Quantity = 1;
    //   }
    this.ProductFromAPIService.removeAllProductFromCart();
    this.ProductFromAPIService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }

  onAddQuantity(product: Product) {
    // Get Product
    this.productAddedTocart = this.ProductFromAPIService.getProductFromCart();
    this.productAddedTocart.find(p => p.ID == product.ID).Quantity = product.Quantity + 1;

    this.ProductFromAPIService.removeAllProductFromCart();
    this.ProductFromAPIService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }

  onRemoveQuantity(product: Product) {
    this.productAddedTocart = this.ProductFromAPIService.getProductFromCart();
    this.productAddedTocart.find(p => p.ID == product.ID).Quantity = product.Quantity - 1;
    this.ProductFromAPIService.removeAllProductFromCart();
    this.ProductFromAPIService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }


  calculteAllTotal(allItems: Product[]) {
    let total = 0;
// tslint:disable-next-line: forin
    for (const i in allItems) {
      total = total + (allItems[i].Quantity * allItems[i].PriceBeforeDiscount);
   }
    this.allTotal = total ;
  }


//   ConfirmOrder()
//   {
//     const date: Date = new Date();
//     // var id=this.currentUser['Id'];
//     // var name=this.currentUser["UserName"];
//     var day = date.getDate();
//     var monthIndex = date.getMonth();
//     var year = date.getFullYear();
//     var minutes = date.getMinutes();
//     var hours = date.getHours();
//     var seconds = date.getSeconds();
//     var dateTimeStamp = day.toString() + monthIndex.toString() + year.toString() + minutes.toString() + hours.toString()+seconds.toString();
//     let orderDetail: any = {};
//     // Orderdetail is object which hold all the value, which needs to be saved into database
//     // orderDetail.CustomerId=this.currentUser['Id'];
//     // orderDetail.CustomerName=this.currentUser["UserName"];
//    //  orderDetail.DeliveryAddress=this.deliveryForm.controls['DeliveryAddress'].value;
//     // orderDetail.Phone=this.deliveryForm.controls['Phone'].value;
//     // orderDetail.PaymentRefrenceId=id+"-"+name+dateTimeStamp;
//     // orderDetail.OrderPayMethod="Cash On Delivery";
//     // Assigning the ordered item details
//     this.Order = [];
// // tslint:disable-next-line: forin
//     for (let i in this.productAddedTocart) {
//       this.Order.push({
//         ID: 0,
//         ProductID: this.productAddedTocart[i].ID,
//         OrderedQuantity: this.productAddedTocart[i].Quantity,
//         OrderID: 0,
//       }) ;
//    }
//       // So now compelte object of order is
//     orderDetail.OrderItems = this.Order;

//     this.orderService.PlaceOrder(orderDetail)
//             .subscribe((result) => {
//               this.globalResponse = result;
//             },
//             error => { // This is error part
//               console.log(error.message);
//               this.alerts.push({
//                 id: 2,
//                 type: 'danger',
//                 message: 'Something went wrong while placing the order, Please try after sometime.'
//               });
//             },
//             () => {
//                 //  This is Success part
//                 //console.log(this.globalResponse);
//                 this.alerts.push({
//                   id: 1,
//                   type: 'success',
//                   message: 'Order has been placed succesfully.',
//                 });

//                 }
//               )

//   }



  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }


}
