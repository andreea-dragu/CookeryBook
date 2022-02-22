import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Recipe } from 'src/app/__Models/recipe'
import { DifficultyService } from 'src/app/__Services/difficulty.service'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() item!: Recipe
  @Input() adminPermission!: boolean
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private difficultyService: DifficultyService) { }

  ngOnInit(): void { }

  onGetDifficulty(id:number) { return this.difficultyService.getDifficulty(id) }

  deleteRecipe(id: number) { this.deleteEvent.emit(id) }
}
