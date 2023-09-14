import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicAssignment2';

  userName: string = "";
  canResetUsername: boolean = false;

  resetUsername() {
    this.userName = "";
  }
}
