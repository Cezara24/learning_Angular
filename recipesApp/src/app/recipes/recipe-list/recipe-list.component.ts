import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // name, description, src
    new Recipe('Jambalaya', "Enjoy a delicious plant-based dinner with this vegan rice and bean one-pot. It's packed with all five of your 5-a-day, as well as iron, vitamin C and fibre", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hdp-jambalaya-440-400-f14ba7f.jpg?quality=90&webp=true&resize=300,272'),

    new Recipe('Chilli', "Our healthy vegan chilli recipe packs in plenty of vegetables and doesn’t fall short on the flavour front. Serve it with rice or in jacket potatoes for a filling supper", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-chilli-be48585.jpg?quality=90&webp=true&resize=300,272'),

    new Recipe('Cheesecake', "Enjoy a plant-based pud using vegan 'cheese' and coconut cream. This no-bake dessert is full of rich vanilla flavour and works well with seasonal fruit", 'https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Vegan-cheesecake-23f5781.jpg?quality=90&webp=true&resize=300,272'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
