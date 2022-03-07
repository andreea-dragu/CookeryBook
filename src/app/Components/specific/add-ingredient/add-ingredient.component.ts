import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/__Models/ingredient';
import { IngredientService } from 'src/app/__Services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  openModalIngredient = false
  ingredients: Ingredient[] = this.ingredientService.getIngredients()
  notificationOnTiming = false
  messageNotificationDanger = "This ingredient already exist in list of ingredients"

  // error:boolean = false

  constructor(
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,

  )  {}


  ngOnInit(): void { }

  addIngredientForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
  })

  get name() { return this.addIngredientForm.get('name') }

  onSubmitIngredient() {
    if(this.addIngredientForm.valid) {
      let error
      let newIngredient = {
        id: this.ingredientService.getLastIngredient().id + 1,
        name: this.capitalize(this.addIngredientForm.value.name),
      }

      this.ingredients.filter( ingredient => {
        if(ingredient.name === newIngredient.name) {
          error = true
          console.log('error = true', error)
        }
      })

      if (error === true) {
        this.notificationSetTiming()
      } else {
        this.ingredientService.addIngredient(newIngredient)
        this.ingredients = this.ingredientService.getIngredients()
        this.openModalIngredient = false
        this.addIngredientForm.reset()
      }
    }
  }

  closeModalAddIngredient() {
    this.openModalIngredient = false
    this.addIngredientForm.reset()
  }

  capitalize(string:string) {
    const firstLetter = string.charAt(0)
    const restOfString = string.substring(1)
    return firstLetter.toUpperCase() + restOfString
  }

  notificationSetTiming() {
    this.notificationOnTiming = true
    setTimeout(() => { this.notificationOnTiming = false}, 3000)
  }
}
