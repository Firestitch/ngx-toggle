import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'fs-toggle-option',
    template: `
    <div fxLayoutAlign="start center" class="fs-toggle-option" (click)="click()"
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
  private subject = new Subject();

  constructor() { }

  ngOnInit() {
    if (this.fsWidth) {
      this.style['width'] = this.fsWidth + 'px';
    }
  }

  click() {
    this.subject.next(this.value);
  }

  subscribe(fn) {
    this.subject.asObservable().subscribe(fn);
  }
}
