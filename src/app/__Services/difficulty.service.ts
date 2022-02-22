import { Injectable } from '@angular/core'
import { Difficulty } from '../__Models/difficulty'

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {

  difficulties: Difficulty[] = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'hard' },
  ]

  constructor() { }

  getDifficulties() {
    return this.difficulties.slice()
  }

  getDifficulty(id: number) {
    return this.difficulties.filter(item => item.id === id)[0].name
  }
}
