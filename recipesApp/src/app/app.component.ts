import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipesApp';
  section: string = 'recipes';

  displaySection(section: string) {
    console.log(section);
    this.section = section;
  }
}
