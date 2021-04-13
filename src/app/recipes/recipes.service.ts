import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipesService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe('A test recipe 1',
    'test description',
    'https://www.simplyrecipes.com/thmb/j1WtO-KNzo7D7e3j5skU2CIQGk4=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__09__caesar-salad-horiz-a-1800-4a465eb53456465091e34138675259c2.jpg',
    [
      new Ingredient('Green salad', 1),
      new Ingredient('Meat', 3),
      new Ingredient('Croutons', 5)
    ]),
    new Recipe('A test recipe 2',
    'test description',
    'https://media-cdn.tripadvisor.com/media/photo-s/13/c5/c9/cb/vegetatian-options.jpg',
    [
      new Ingredient('French fries', 20),
      new Ingredient('Meat',1),
      new Ingredient('Bread', 2)
    ]),
    new Recipe('A test recipe 3',
    'test description',
    'https://theflexiblechef.com/wp-content/uploads/2015/07/4-July-picnic-1050x695.jpg',
    [
      new Ingredient('Strawberries', 10),
      new Ingredient('Chocolate', 1)
    ]),
  ]

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }

}
