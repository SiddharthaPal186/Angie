import { Ingredient } from "../shared/ingredient.model";
import { isNgTemplate } from "@angular/compiler";

export class ShoppingListService{
    
    private ingredients: Ingredient[] = [
        new Ingredient('chicken', 1),
        new Ingredient('Tomato', 5)
    ];
    addIngredient(ingredient){
        console.log(JSON.stringify(ingredient));
        this.ingredients.push(ingredient);
      }

    getIngredient(){
        return this.ingredients;
    }
    addIngredientToShoppingList(ingredients){
        console.log(ingredients);
        ingredients.forEach(element => {
            console.log(element);
            this.ingredients.push(element);
        });
    }
    
}