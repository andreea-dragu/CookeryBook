import { Injectable } from '@angular/core'
import { Category } from '../__Models/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      id: 1,
      name: 'Appetizers',
      imgPath:'assets/images/categories/appetizers.jpg'
    },
    {
      id: 2,
      name: 'Borscht and Soups',
      imgPath:'assets/images/categories/borscht_and_soups.jpg'
    },
    {
      id: 3,
      name: 'Meat Dishes',
      imgPath:'assets/images/categories/meat_dishes.jpg'
    },
    {
      id: 4,
      name: 'Vegetable Dishes',
      imgPath:'assets/images/categories/vegetable_dishes.jpg'
    },
    {
      id: 5,
      name: 'Fish Dishes',
      imgPath:'assets/images/categories/fish_dishes.jpg'
    },
    {
      id: 6,
      name: 'Pasta and Pizza',
      imgPath:'assets/images/categories/pasta_and_pizza.jpg'
    },
    {
      id: 7,
      name: 'Salads',
      imgPath:'assets/images/categories/salads.jpg'
    },
    {
      id: 8,
      name: 'Ice creams',
      imgPath:'assets/images/categories/ice_creams.jpg'
    },
    {
      id: 9,
      name: 'Cakes',
      imgPath:'assets/images/categories/cakes.jpg'
    },
    {
      id: 10,
      name: 'Sauces',
      imgPath:'assets/images/categories/sauces.jpg'
    },
  ]

  constructor() { }

  getCategories() {
    return this.categories.slice()
  }

  getCategory(id: number) {
    return this.categories.filter(item => item.id === id)[0].name
  }

  getImage(id: number) {
    return this.categories.filter(item => item.id === id)[0].imgPath
  }

  getLastCategory() {
    const categories = this.getCategories()
    return categories[categories.length-1]
  }
}
