import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public recipeId: number;

    constructor(name: string, desc: string, imgPath: string, ingredients: Ingredient[], recipeId: number){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
        this.recipeId = recipeId;
    }
}