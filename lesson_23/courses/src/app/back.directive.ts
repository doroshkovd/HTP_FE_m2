import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBack]'
})

export class BackDirective implements OnInit {

  @Input() public hoverColor: string;
  @Input() public defaultColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.defaultColor);
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit() {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', this.defaultColor);
  }

}
