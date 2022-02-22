import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Ingredient } from 'src/app/__Models/ingredient'
import { Recipe } from 'src/app/__Models/recipe'
import { CategoryService } from 'src/app/__Services/category.service'
import { DifficultyService } from 'src/app/__Services/difficulty.service'
import { IngredientService } from 'src/app/__Services/ingredient.service'
import { RecipeService } from 'src/app/__Services/recipe.service'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  id!: number
  recipe!: Recipe
  ingredients!:Ingredient[]
  category!: string
  difficulty!:string

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private ingredientService:IngredientService,
    private categoryService:CategoryService,
    private difficultyService:DifficultyService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.recipe = this.recipeService.getRecipe(this.id)
          this.difficulty = this.difficultyService.getDifficulty(this.recipe.difficultyId)
          this.category = this.categoryService.getCategory(this.recipe.categoryId)
          this.ingredients = this.recipe.ingredientsIds.map(ingredientId => this.ingredientService.getIngredient(ingredientId))
        }
      )
  }
}
