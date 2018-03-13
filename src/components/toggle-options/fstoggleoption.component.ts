import { Component, Input, Output, Renderer, ElementRef, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'fs-toggle-option',
    template: `
    <div fxLayoutAlign="start center" class="fs-toggle-option" (click)="select()"
    [ngClass]="{ selected: selected }"
    [ngStyle]="style">
      <mat-icon *ngIf="fsIcon">{{ fsIcon }}</mat-icon>
      <span class="fs-toggle-option-template">
        <ng-content></ng-content>
      </span>
    </div>`,
    styleUrls: ['./fstoggleoption.scss']
})
export class FsToggleOptionComponent implements OnInit {

  @Input() value;
  @Input() selected = false;
  @Input() style = {};
  @Input() fsWidth;
  @Input() fsIcon;

  onClick: (object) => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    if (this.fsWidth) {
      this.style['width'] = this.fsWidth + 'px';
    }
  }

  select() {
    this.onClick(this.value);
  }
}
