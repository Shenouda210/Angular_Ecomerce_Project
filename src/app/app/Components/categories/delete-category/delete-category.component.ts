import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCategory } from 'src/app/app/View Models/addaa-category';
import { Location } from '@angular/common';
import { Icategory } from 'src/app/app/View Models/icategory';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  selCat:Icategory
  constructor(private catServices: CategoriesService, private activatedRoute: ActivatedRoute, private location: Location , private router:Router) { }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.catServices.GetCategoryById(selId).subscribe(data => { this.selCat = data; });
  }
  deletecategory() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.catServices.deleteCategory(selId).subscribe(data => {
      console.log(data),
      this.router.navigate(['/Categories']),
        error => { console.log(error);}
    });
  }
  goback(){
    this.location.back();
  }
}
