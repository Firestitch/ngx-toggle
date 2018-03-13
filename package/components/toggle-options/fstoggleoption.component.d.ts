import { Renderer, ElementRef, OnInit } from '@angular/core';
export declare class FsToggleOptionComponent implements OnInit {
    private elementRef;
    private renderer;
    value: any;
    selected: boolean;
    style: {};
    fsWidth: any;
    fsIcon: any;
    onClick: (object) => void;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    select(): void;
}
