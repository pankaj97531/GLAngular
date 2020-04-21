import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]',
})

export class HighlightDirective {
    private _color: string;


    @Input() set color(value: string) {
        this._color = value;
    }
    
    constructor(private el: ElementRef) { }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    @HostListener('mouseover') onMouseOver() {        
        this.highlight(this._color);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
