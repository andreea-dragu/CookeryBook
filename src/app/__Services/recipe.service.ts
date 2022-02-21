import { Injectable } from '@angular/core';
import { Recipe } from '../__Models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 0,
      name: 'Pizza',
      imagePath: 'assets/images/recipes/Pizza.jpg',
      categoryId: 6,
      difficultyId: 1,
      time: 20,
      ingredientsIds: [3, 4, 9, 14],
      preparation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tortor id diam dictum rutrum. Aenean semper vehicula lorem at tempus. Suspendisse id feugiat velit. Etiam fermentum ipsum in metus consectetur, nec euismod velit vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas luctus dapibus. Nam sollicitudin sem ligula, ac egestas turpis commodo a. Vivamus eget nisi pretium, lobortis ligula a, congue ligula. Nulla congue at diam id bibendum. Cras nec velit sit amet nunc luctus consequat. In id volutpat ante.'
    },
    {
      id: 1,
      name: 'Tasty Schnitzel',
      imagePath: 'assets/images/recipes/TastySchnitzel.jpg',
      categoryId: 3,
      difficultyId: 2,
      time: 30,
      ingredientsIds: [1, 2],
      preparation: 'Aliquam eu venenatis felis. Phasellus vehicula malesuada lorem, ac efficitur enim placerat laoreet. In hac habitasse platea dictumst. Suspendisse efficitur vulputate nulla, vel mollis lectus pretium vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean lobortis id est sed cursus. Cras non justo id turpis rutrum viverra. Pellentesque suscipit pellentesque enim, eu mattis mi aliquam at.'
    },
    {
      id: 2,
      name: 'Tasty Big Fat Burger',
      imagePath: 'assets/images/recipes/TastyBigFatBurger.jpg',
      categoryId: 3,
      difficultyId: 3,
      time: 50,
      ingredientsIds: [0, 1, 2, 4, 9],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 3,
      name: 'Hot Spinach',
      imagePath: 'assets/images/recipes/HotSpinach.jpg',
      categoryId: 1,
      difficultyId: 2,
      time: 30,
      ingredientsIds: [4, 5, 6],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 4,
      name: 'Chicken Noodle Soup',
      imagePath: 'assets/images/recipes/ChickenNoodleSoup.jpg',
      categoryId: 2,
      difficultyId: 1,
      time: 20,
      ingredientsIds: [7, 8, 9],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      imagePath: 'assets/images/recipes/ChocolateCake.jpg',
      categoryId: 9,
      difficultyId: 3,
      time: 60,
      ingredientsIds: [13, 14, 15, 16, 17],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 6,
      name: 'Easy Meatloaf',
      imagePath: 'assets/images/recipes/EasyMeatloaf.jpg',
      categoryId: 3,
      difficultyId: 2,
      time: 30,
      ingredientsIds: [1],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 7,
      name: 'Roasted Vegetables',
      imagePath: 'assets/images/recipes/RoastedVegetables.jpg',
      categoryId: 4,
      difficultyId: 1,
      time: 20,
      ingredientsIds: [9],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 8,
      name: 'Gingery Carrot Salad',
      imagePath: 'assets/images/recipes/GingeryCarrotSalad.jpg',
      categoryId: 7,
      difficultyId: 1,
      time: 10,
      ingredientsIds: [6, 12],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
    {
      id: 9,
      name: 'Guacamole',
      imagePath: 'assets/images/recipes/Guacamole.jpg',
      categoryId: 10,
      difficultyId: 1,
      time: 10,
      ingredientsIds: [10, 11, 16],
      preparation: 'Aenean a urna est. Aenean luctus pellentesque condimentum. Duis vestibulum metus ac vehicula maximus. Vestibulum eleifend pharetra massa eget convallis. Curabitur sed commodo ligula, vitae facilisis lorem. Morbi id mi ut augue consequat ornare. Donec et nulla lectus. Phasellus accumsan odio tortor, sit amet rutrum massa aliquet in. Nunc urna est, porttitor a malesuada sagittis, feugiat in felis. Sed rutrum neque velit, nec egestas arcu euismod eu.'
    },
  ]

  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
    return this.recipes.filter(item => item.id === id)[0]
  }

  getLastRecipe() {
    const recipes = this.getRecipes()
    return recipes[recipes.length-1]
  }

  addRecipe(recipe: Recipe) {
    this.recipes = [...this.recipes, recipe]
    return this.recipes
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    return this.recipes
  }
}

