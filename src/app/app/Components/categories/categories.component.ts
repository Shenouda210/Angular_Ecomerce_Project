import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/app/View Models/icategory';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categories: Icategory[];
  constructor(private catsServices: CategoriesService,private router: Router ) { }

  ngOnInit() {
    this.catsServices.GetAllCategories().subscribe(cats => {this.categories = cats; } ,
      error => {console.log(error);
      });
  }
  DisplayCatDetails(catID: number) {
this.router.navigate(['CategoryDetails/', catID] );

  }
  addNewCategory() {
this.router.navigate(['addCategory']);
  }
  editCategory(catID: number) {
    this.router.navigate(['EditCategory/', catID ]);
      }
  DeleteCategory(catID: number) {
        this.router.navigate(['DeleteCategory/', catID ]);
          }
}
