import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/app2/ViewModel/Products';
import { ProductService } from 'src/app/app2/Services/product.service';
import { Category } from 'src/app/app2/ViewModel/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CategoryList: Category[];
  productList: Product[];
  constructor( private ProductFromAPIService: ProductService,
               private CategoryFromAPIService: CategoryService,private router: Router ) { }

  ngOnInit() {

    // Get All Products
    this.ProductFromAPIService.GetProduct().subscribe((data) => {
      this.productList = data;
    },
      (err) => {console.error(err);
    });

    // Get All Categories
    this.CategoryFromAPIService.GetCategorys().subscribe((categories) => {
      this.CategoryList = categories;
    },
      (err) => {console.error(err);
    });
  }

  GoToProductDetails(ID: number) {
      this.router.navigate(['/productdetails', ID]);
  }


}
