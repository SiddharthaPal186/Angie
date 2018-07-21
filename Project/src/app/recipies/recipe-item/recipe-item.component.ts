import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipeService.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService, private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getRecipeDetails(){
    this.router.navigate([this.index], {relativeTo: this.route});
  }

}
