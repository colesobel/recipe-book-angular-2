import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListItemComponent } from './list-item.component'
import { Recipe } from '../recipe'
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
  directives: [ListItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  @Output() recipeSelected = new EventEmitter<Recipe>() 
  recipe = new Recipe('Dummy', 'Dummy', 'http://xcp.ninja/images/ninja-icon.png')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit((recipe))
  }

}
