import { NgModule, Component } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { SelectRecipeComponent } from "./recipies/select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipies/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipe', pathMatch: "full" },
    {path: 'recipe', component: RecipiesComponent, children: [
        {path: '', component: SelectRecipeComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}    
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule{

}