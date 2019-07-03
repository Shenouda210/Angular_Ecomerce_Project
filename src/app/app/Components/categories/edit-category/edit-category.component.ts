import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCategory } from 'src/app/app/View Models/addaa-category';
import { Location } from '@angular/common';
import { Icategory } from 'src/app/app/View Models/icategory';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  selCat: Icategory;
  constructor(private catServices: CategoriesService, private activatedRoute: ActivatedRoute, private location: Location , private router:Router) {


  }

  ngOnInit() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.catServices.GetCategoryById(selId).subscribe(data => { this.selCat = data; });
  }
  editcategory() {
    const selId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.catServices.editCategory(selId, this.selCat).subscribe(data => {
      console.log(data),
      this.router.navigate(['/Categories']),
        error => { console.log(error);}
    });
  }
  goback(){
    this.location.back();
  }
}
