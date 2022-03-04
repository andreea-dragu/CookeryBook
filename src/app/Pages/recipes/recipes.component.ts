import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Category } from 'src/app/__Models/category'
import { Difficulty } from 'src/app/__Models/difficulty'
import { Ingredient } from 'src/app/__Models/ingredient'
import { Recipe } from 'src/app/__Models/recipe'
import { AuthService } from 'src/app/__Services/auth.service'
import { CategoryService } from 'src/app/__Services/category.service'
import { DifficultyService } from 'src/app/__Services/difficulty.service'
import { IngredientService } from 'src/app/__Services/ingredient.service'
import { RecipeService } from 'src/app/__Services/recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  // General Declarations
  recipes: Recipe[] = this.recipeService.getRecipes()
  categories: Category[] = this.categoryService.getCategories()
  ingredients: Ingredient[] = this.ingredientService.getIngredients()
  difficulties: Difficulty[] = this.difficultyService.getDifficulties()
  searchText: any
  sortRecipe: any

  auto_fit: string = 'auto-fit'
  auto_fill: string = 'auto-fill'
  objectProperties: any[] = [
    {
      key: 'difficultyId',
      value: 'Difficulty'
    },
    {
      key: 'time',
      value: 'Time'
    },
    {
      key: 'name',
      value: 'Name'
    },
  ]

  openModal = false
  isLogged: boolean = false

  filters: {[key: string]: number[]} = {}
  filteredRecipes: Recipe[] = []

  updateListIngredients!:any

  constructor(
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private ingredientService: IngredientService,
    private difficultyService: DifficultyService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.filteredRecipes = this.recipeService.getRecipes()
    this.isLogged = this.authService.checkIfIsAuthenticated()

    this.updateListIngredients = this.ingredientService.changedIngredients
      .subscribe(
        (ingredients: Ingredient[]) => this.ingredients = ingredients )
  }

  ngOnDestroy(): void {
    this.updateListIngredients.unsubscribe()
  }

  // Delete Recipe Form Builder
  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
    this.recipes = this.recipeService.getRecipes()
    this.filteredRecipes = this.recipeService.getRecipes()
  }

  // Filter By
  filterRecipeBy(filterCategory: any, event: any) {
    const value = Number(event.srcElement.defaultValue)
    if (event.srcElement.checked === true) {
      if(!this.filters.hasOwnProperty(filterCategory)) {
        this.filters[filterCategory] = []
      }
      this.filters[filterCategory] = [...this.filters[filterCategory], value]
    } else if(event.srcElement.checked === false) {
      const indexOf = this.filters[filterCategory].indexOf(value)
      this.filters[filterCategory].splice(indexOf, 1)
    }
    this.filteredRecipes = this.recipes.filter((recipe: any) => {
      let checkItem = true
      for (const filter in this.filters) {
        if(this.filters[filter].length > 0 && !this.filters[filter].includes(recipe[filter])) {
          checkItem = false
        }
      }
      return checkItem
    })
    return this.filteredRecipes
  }

// Add Recipe Form Builder
  addRecipeForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
    categoryId: [null, Validators.required],
    difficultyId: [null, Validators.required],
    time: [null, [Validators.required, Validators.min(10), Validators.max(2000)]],
    imagePath: [''],
    ingredientsIds: ['', Validators.required],
    preparation: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(5000)]],
  })
  get name() { return this.addRecipeForm.get('name') }
  get categoryId() { return this.addRecipeForm.get('categoryId') }
  get difficultyId() { return this.addRecipeForm.get('difficulty') }
  get time() { return this.addRecipeForm.get('time') }
  get ingredientsIds() { return this.addRecipeForm.get('ingredientsIds') }
  get preparation() { return this.addRecipeForm.get('preparation') }

// Submit Recipe
  onSubmit() {
    if(this.addRecipeForm.valid) {

      // Build the image if is not imagePath value
      let imageUrl
      if( this.addRecipeForm.value.imagePath === '') { imageUrl = 'assets/images/recipes/default-image.jpg'
      } else {
        imageUrl = this.addRecipeForm.value.imagePath
      }

      // Building the newRecipe object
      let newRecipe = {
        id: this.recipeService.getLastRecipe().id + 1,
        name: this.addRecipeForm.value.name,
        imagePath: imageUrl,
        categoryId: Number(this.addRecipeForm.value.categoryId),
        difficultyId: Number(this.addRecipeForm.value.difficultyId),
        time: this.addRecipeForm.value.time,
        ingredientsIds: this.addRecipeForm.value.ingredientsIds,
        preparation: this.addRecipeForm.value.preparation,
      }
      this.recipeService.addRecipe(newRecipe)
      this.recipes = this.recipeService.getRecipes()
      this.filteredRecipes = this.recipeService.getRecipes()
      this.openModal = false
      this.addRecipeForm.reset()
    }
  }

// Close Modal
  closeModal() {
    this.openModal = false
    this.addRecipeForm.reset()
  }
}
