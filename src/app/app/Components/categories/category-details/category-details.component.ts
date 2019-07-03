import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/app/View Models/icategory';
import {Location} from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  selCat: Icategory;
  constructor(private category: CategoriesService, private activatedRoute: ActivatedRoute,private location: Location,private router: Router) { }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.category.GetCategoryById(selId).subscribe(cat => { this.selCat = cat },
      err => { console.log(err); });
  }
  goback(){
    this.location.back();
  }
  editCategory(catID: number) {
    this.router.navigate(['EditCategory/', catID ]);
      }
}