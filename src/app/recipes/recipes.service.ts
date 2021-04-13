import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipesService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
    new Recipe('A test recipe 1',
    'test description',
    'https://theflexiblechef.com/wp-content/uploads/2015/07/4-July-picnic-1050x695.jpg'),
    new Recipe('A test recipe 2',
    'test description',
    'https://theflexiblechef.com/wp-content/uploads/2015/07/4-July-picnic-1050x695.jpg'),
    new Recipe('A test recipe 3',
    'test description',
    'https://theflexiblechef.com/wp-content/uploads/2015/07/4-July-picnic-1050x695.jpg'),
  ]

  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

}
