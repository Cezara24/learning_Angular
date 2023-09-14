import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white {
      color: white;
    }
    button {
    margin: 1rem 0;
}
  `]
})
export class AppComponent {
  title: string = 'basicAssignment3';
  display: boolean = false;
  logs: Date[] = [];

  onClick() {
    this.display = true;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
