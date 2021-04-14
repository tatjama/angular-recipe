import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  isOpen: boolean = false;

   recipe: Recipe;
   id: number;

  constructor(private recipesService: RecipesService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipesService.getRecipe(this.id);
          }
    )
  }

  openDropdown(){
    this.isOpen = !this.isOpen
  }
  addIngredientsToSL(){
    this.recipesService.addIngredientsFromRecipe(this.recipe.ingredients);

  }
}
