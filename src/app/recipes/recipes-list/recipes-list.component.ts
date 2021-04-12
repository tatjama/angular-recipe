import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[
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

  selectRecipe:Recipe;
  @Output() sentSelectedRecipe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(selectedRecipe){
    this.selectRecipe = selectedRecipe;
    this.sentSelectedRecipe.emit(this.selectRecipe)
  }
}
