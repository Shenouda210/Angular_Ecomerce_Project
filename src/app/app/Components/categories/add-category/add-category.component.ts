import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/app/Services/categories.service';
import { Icategory } from 'src/app/app/View Models/icategory';
import { AddCategory } from 'src/app/app/View Models/addaa-category';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  newCategory: AddCategory;
  constructor(private cat: CategoriesService, private router: Router, private location: Location) {
    this.newCategory = new AddCategory();
  }

  ngOnInit() {
  }
  addNewCategory(newForm: NgForm): void {
    this.cat.addCategory(this.newCategory)
    .subscribe( data => { console.log(data),
      this.router.navigate(['/Products']); },
      err => { console.log(err); });
  }
  goback(){
    this.location.back();
  }
}
