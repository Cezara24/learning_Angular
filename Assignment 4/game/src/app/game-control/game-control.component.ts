import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() gameReset = new EventEmitter<string>();
  interval: any;
  lastNumber: number = 1;
  gameStatus: string = "notStarted";

  onStartGame() {
    if(this.gameStatus === "notStarted" || this.gameStatus === "paused"){
      this.gameStatus = "started";
      this.interval = setInterval(() =>  {
        this.intervalFired.emit(this.lastNumber);
        this.lastNumber++;
      }, 500);
    }
  }

  onPauseGame() {
    this.gameStatus = "paused";
    clearInterval(this.interval);
  }

  onGameReset() {
    if(this.gameStatus === "started") {
      clearInterval(this.interval);
      this.gameStatus = "paused";
    }
    if(this.gameStatus === "paused") {
      this.lastNumber = 1;
      this.gameReset.emit("reset");
    }
    this.gameStatus = "notStarted";
  }
}
