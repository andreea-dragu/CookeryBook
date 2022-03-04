import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/__Models/ingredient';
import { IngredientService } from 'src/app/__Services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  openModal = false
  ingredients: Ingredient[] = this.ingredientService.getIngredients()

  constructor(
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  addIngredientForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
  })

  get name() { return this.addIngredientForm.get('name') }

  onSubmit() {
    if(this.addIngredientForm.valid) {
      let newIngredient = {
        id: this.ingredientService.getLastIngredient().id + 1,
        name: this.addIngredientForm.value.name,
      }
      this.ingredientService.addIngredient(newIngredient)
      this.ingredients = this.ingredientService.getIngredients()
      this.openModal = false
      this.addIngredientForm.reset()
    }
  }

  closeModal() {
    this.openModal = false
    this.addIngredientForm.reset()
  }
}
