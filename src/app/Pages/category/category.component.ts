import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/__Models/category';
import { Recipe } from 'src/app/__Models/recipe';
import { CategoryService } from 'src/app/__Services/category.service';
import { DifficultyService } from 'src/app/__Services/difficulty.service';
import { RecipeService } from 'src/app/__Services/recipe.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id!: number
  category!:string
  imgCategory!:string
  recipes:Recipe[] = this.recipeService.getRecipes()
  filteredRecipes:Recipe[] = []

  isLogged: boolean = false
  objectProperties:any[]= ['difficulty', 'time', 'name']
  auto_fit: string = 'auto-fit'
  auto_fill: string = 'auto-fill'

  constructor(
    private categoryService: CategoryService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.category = this.categoryService.getCategory(this.id)
        this.imgCategory = this.categoryService.getImage(this.id)

      }
    )
    this.filteredRecipes = this.recipes.filter((item:any) => item.categoryId === this.id )

  }
}

