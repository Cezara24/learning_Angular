import {
  Directive,
  Renderer2,
  // OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective 
// implements OnInit 
{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @Input() textColor: string = 'black';
  @Input() highlightTextColor: string ='white';
  @Input() defaultCursor: string = 'auto';
  @Input() pointerCursor: string ='pointer';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'auto';
  @HostBinding('style.color') color: string = this.textColor;
  @HostBinding('style.cursor') cursor: string = this.defaultCursor;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'transparent'
  //   );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = this.highlightTextColor;
    this.cursor = this.pointerCursor;

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'cursor',
    //   'pointer'
    // );
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'color',
    //   'white'
    // );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.color = this.textColor;
    this.cursor = this.defaultCursor;

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'color',
    //   'black'
    // );
  }
}
