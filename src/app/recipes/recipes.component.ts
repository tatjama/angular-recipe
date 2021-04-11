import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description', 'https://images.app.goo.gl/mV2SoSkSdK7VyVDz5')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
