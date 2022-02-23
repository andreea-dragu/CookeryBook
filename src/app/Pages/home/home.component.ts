import { Component, OnInit } from '@angular/core'
import { Category } from 'src/app/__Models/category'
import { Recipe } from 'src/app/__Models/recipe'
import { CategoryService } from 'src/app/__Services/category.service'
import { RecipeService } from 'src/app/__Services/recipe.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  lastCategory: Category = this.categoryService.getLastCategory()
  lastRecipe: Recipe = this.recipeService.getLastRecipe()

  sliderContent: any = [
    {
      slideImgUrl: "assets/images/slider/categories.jpg",
      section1: {
        title: this.lastCategory.name,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View Category",
          url: ['category/', this.lastCategory.id]
        }
      },
      section2: {
        type: "content",
        title: "All Categories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View All Categories",
          url: "categories"
        }
      },
    },
    {
      slideImgUrl: "assets/images/slider/recipe.jpg",
      section1: {
        title: this.lastRecipe.name,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View Recipe",
          url: ['recipe/', this.lastRecipe.id ]
        }
      },
      section2: {
        type: "content",
        title: "All Recipe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View Recipes",
          url: "recipes"
        }
      },
    },
    {
      slideImgUrl: "assets/images/slider/about.jpg",
      section1: {
        title: "About",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View About",
          url: "about"
        }
      },
      section2: {
        type: "image"
      },
    },
    {
      slideImgUrl: "assets/images/slider/contact.jpg",
      section1: {
        title: "Contact",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          name: "View Contact",
          url: "contact"
        }
      },
      section2: {
        type: "image"
      },
    }
  ]

  constructor(
    private recipeService: RecipeService,
    private categoryService : CategoryService,
  ) { }

  ngOnInit(): void { }
}
