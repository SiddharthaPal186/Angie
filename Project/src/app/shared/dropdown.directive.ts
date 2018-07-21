import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDropDown]"
})
export class dropDown{
    @HostListener('click') toggleDropDownMenu(eventData: Event){
        console.log('Click registered');
        console.log(JSON.stringify(this.elRef));
    }
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }
}