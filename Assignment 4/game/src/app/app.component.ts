import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(lastNumber: number) {
    if(lastNumber % 2 === 0) {
      this.evenNumbers.push(lastNumber)
    } else this.oddNumbers.push(lastNumber);
  }

  resetGame(action: string) {
    if(action === "reset") {
      this.oddNumbers.length = 0;
      this.evenNumbers.length = 0;
    }
  }
}
