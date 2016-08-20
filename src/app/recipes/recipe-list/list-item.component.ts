import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'
@Component({
  moduleId: module.id,
  selector: 'rb-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() recipe: Recipe; 
  recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
