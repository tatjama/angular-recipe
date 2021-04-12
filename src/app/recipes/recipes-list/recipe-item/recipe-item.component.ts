import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() onSelectedRecipe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(selectedRecipe: Recipe){
    this.onSelectedRecipe.emit(selectedRecipe);
  }
}
