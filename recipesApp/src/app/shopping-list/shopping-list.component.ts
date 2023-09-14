import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    // name, amount
    new Ingredient('olive oil ', 1),
    new Ingredient('onion', 3)
  ];
}
