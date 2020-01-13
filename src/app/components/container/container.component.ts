import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'fs-toggle-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsToggleContainerComponent {
  constructor() {
  }
}
