import {Directive,ElementRef, HostListener }from '@angular/core';

@Directive({
    selector: '[customhover]'
})
export class MyAttributeDirective {
    constructor(private el:ElementRef) {
el.nativeElement.style.background = 'blue';
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlightColor('green');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlightColor('yellow');
    }
    public highlightColor(color:any) {
this.el.nativeElement.style.backgroundColor=color;
    }
}