import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Brownie Pie', 'Tasty yummy dessert.', 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/46/1280x853/gallery-1447456786-delish-cool-whip-pies-slutty-brownie-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
