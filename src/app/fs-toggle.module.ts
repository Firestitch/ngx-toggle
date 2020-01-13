import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FsCommonModule } from '@firestitch/common';

import { FsToggleContainerComponent } from './components/container/container.component';
import { FsToggleComponent } from './components/toggle/toggle.component';
import { FsToggleOptionComponent } from './components/options/option.component';


@NgModule({
    declarations: [
      FsToggleContainerComponent,
      FsToggleComponent,
      FsToggleOptionComponent
    ],
    imports: [
      CommonModule,
      MatIconModule,
      FsCommonModule
    ],
    providers: [
    ],
    exports: [
      FsToggleContainerComponent,
      FsToggleComponent,
      FsToggleOptionComponent
    ]
})
export class FsToggleModule {
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsToggleModule,
      providers: []
    };
  }*/
}
