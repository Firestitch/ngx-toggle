import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'fs-toggle-container',
    template: '<ng-content></ng-content>',
    styleUrls: ['./fstogglecontainer.scss']
})
export class FsToggleContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}