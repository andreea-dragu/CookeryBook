import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Ingredient } from '../__Models/ingredient'

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  changedIngredients = new Subject<Ingredient[]>()

  ingredients: Ingredient[] = [
    { id: 0, name: 'Bread' },
    { id: 1, name: 'Meat' },
    { id: 2, name: 'French Fries' },
    { id: 3, name: 'Salami' },
    { id: 4, name: 'Parmesan Cheese' },
    { id: 5, name: 'Spinach' },
    { id: 6, name: 'Garlic' },
    { id: 7, name: 'Chicken' },
    { id: 8, name: 'Noodle' },
    { id: 9, name: 'Vegetables' },
    { id: 10, name: 'Avocado' },
    { id: 11, name: 'Lime' },
    { id: 12, name: 'Carrot' },
    { id: 13, name: 'Egg' },
    { id: 14, name: 'Flour' },
    { id: 15, name: 'Chocolate' },
    { id: 16, name: 'Milk' },
    { id: 17, name: 'Whipped cream' },
  ]

  constructor() { }

  getIngredients() {
    return this.ingredients.slice()
  }

  getIngredient(id: number) {
    return this.ingredients.filter(item => item.id === id)[0]
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient]
    this.changedIngredients.next(this.ingredients.slice())
  }

  getLastIngredient() {
    const ingredients = this.getIngredients()
    return ingredients[ingredients.length-1]
  }

  deleteIngredient(id: number) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.id !== id)
    return this.ingredients
  }

}
