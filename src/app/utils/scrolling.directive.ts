import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

interface DOMRectI {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x?: number;
    y?: number;
}

@Directive({
    selector: '.scrollToCenter',
})
export class MatTabScrollToCenterDirective {

    constructor(private element: ElementRef) { }

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        const scrollContainer = this.element.nativeElement.querySelector('.mat-tab-list');
        const currentScrolledContainerPosition: number = scrollContainer.scrollLeft;
        const newPositionScrollTo = this.calcScrollToCenterValue(event, currentScrolledContainerPosition);

        scrollContainer.scroll({
            left: newPositionScrollTo,
            behavior: 'smooth',
        });
    }

    calcScrollToCenterValue(clickedContainer: MouseEvent, currentScrolledContainerPosition: number): number {
        const scrolledButton: DOMRectI = (clickedContainer.target as HTMLElement).getBoundingClientRect();
        const leftXOffset = (window.innerWidth - scrolledButton.width) / 2;
        const currentVisibleViewportLeft = scrolledButton.left;
        const neededLeftOffset = currentVisibleViewportLeft - leftXOffset;
        console.log(scrolledButton);
        const newValueToSCroll = currentScrolledContainerPosition + neededLeftOffset;
        return newValueToSCroll;
    }
}
