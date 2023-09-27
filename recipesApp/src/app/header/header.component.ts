import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() changeSection = new EventEmitter<string>();
  collapsed = true;

  OnChangeSection(section: string) {
    this.changeSection.emit(section);
  }
}
