import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/__Models/category';
import { CategoryService } from 'src/app/__Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = this.categoriesService.getCategories()

  constructor(
    private categoriesService:CategoryService
  ) { }

  ngOnInit(): void {
  }

}
