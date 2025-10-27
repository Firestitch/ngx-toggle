import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'fs-toggle-option',
  template: `
    <div fxLayoutAlign="start center" class="fs-toggle-option" (click)="click()"
      [ngClass]="{ selected: selected }"
      [ngStyle]="style">
      @if (fsIcon) {
        <mat-icon>{{ fsIcon }}</mat-icon>
      }
      <span class="fs-toggle-option-template">
        <ng-content></ng-content>
      </span>
    </div>`,
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsToggleOptionComponent implements OnInit {

  @Input() value;
  @Input() selected = false;
  @Input() style = {};
  @Input() fsWidth;
  @Input() fsIcon;
  private subject = new Subject();

  constructor() {
  }

  public ngOnInit() {
    if (this.fsWidth) {
      this.style['width'] = this.fsWidth + 'px';
    }
  }

  public click() {
    this.subject.next(this.value);
  }

  public subscribe(fn) {
    this.subject.asObservable().subscribe(fn);
  }
}
