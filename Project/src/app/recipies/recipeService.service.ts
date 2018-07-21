import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService: ShoppingListService){
    }

    private recipes: Recipe[] = [
        new Recipe('Chicken curry', 
        'Its a spicy dish', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvACCi2om6jbdwsvhKLU4fvYJI0TvUaSnRMEgyOZEbt5MtqOiXTA',
        [
            new Ingredient('Chicken', 2),
            new Ingredient('Kukuduku masala', 1),
        ],0),
        new Recipe('Fish curry', 
        'Its a spicy dish', 
        'assets/images/butter-chicken-curry.png',
        [
            new Ingredient('Fish', 2),
            new Ingredient('Machli masala', 1),
        ],1),
        new Recipe('Mutton curry', 
        'Its a spicy dish', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvACCi2om6jbdwsvhKLU4fvYJI0TvUaSnRMEgyOZEbt5MtqOiXTA',
        [
            new Ingredient('Mutton', 2),
            new Ingredient('Meat masala', 1),
        ],2),
       ];

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipeDetail(id){
        return this.recipes[id];
    }
    addIngredientsToSL(ingredients){
        this.slService.addIngredientToShoppingList(ingredients)
    }

}