import { Injectable } from '@angular/core'
import { Ingredient } from '../__Models/ingredient'

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

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
    return this.ingredients[id]
  }
}
