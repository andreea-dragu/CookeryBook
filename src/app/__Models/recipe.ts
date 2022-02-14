export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public imagePath: string,
    public categoryId: number,
    public difficultyId: number,
    public time: number,
    public ingredientsIds: number[],
    public preparation: string,
  ) {}
}
