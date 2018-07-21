import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipeService.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    
  }
  
  // recipeListItemSelected(selectedRecipe){
  //   console.log('data received: ' + JSON.stringify(selectedRecipe));
  //   this.selectedRecipeItem = selectedRecipe;
  // }



}
