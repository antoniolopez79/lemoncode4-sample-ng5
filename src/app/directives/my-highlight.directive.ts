import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
 }

}
