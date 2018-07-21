import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
import { RecipeService } from '../recipeService.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router) { }
  recipeItem: Recipe;
  currentId: number;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(JSON.stringify(params));
        this.currentId = params.id;
        this.recipeItem = this.recipeService.getRecipeDetail(+params.id)
      }
    );
  }
  isOpen = false;
  toggleDropDown(){
    this.isOpen = !this.isOpen;
  }

  addIngredientToSL(ingredientsToAdd){
    console.log('Add to SL'+JSON.stringify(ingredientsToAdd));
    this.recipeService.addIngredientsToSL(ingredientsToAdd);
  }

  editRecipe(){
    //this.router.navigate(["edit"], {relativeTo: this.route});
    // Another way of navigating is as below:
    this.router.navigate(['../', +this.currentId,'edit'], {relativeTo: this.route});
  }

}
