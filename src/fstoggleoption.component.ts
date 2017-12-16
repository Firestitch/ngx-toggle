import { Component, Input, Output, ElementRef, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'fs-toggle-option',
    template: `
    <div class="fs-toggle-option" (click)="select()"
    [ngClass]="{ selected: selected }"
    [ngStyle]="style">
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
      <span class="fs-toggle-option-template">
        <ng-content></ng-content>
      </span>
    </div>`,
    styleUrls: ['./fstoggleoption.scss']
})
export class FsToggleOptionComponent implements OnInit {

  @Input() value;
  @Input() selected = false;
  @Input() style;
  @Input() icon;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  select() {
  }
}
