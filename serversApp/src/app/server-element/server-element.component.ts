import { Component, Input, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  
  ngOnInit() {
    console.log(`Text: ${this.paragraph.nativeElement.textContent}`)
  }

  ngAfterContentInit() {
    console.log(`Text: ${this.paragraph.nativeElement.textContent}`)
  }
}
