import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

import { FsToggleContainerComponent } from './fstogglecontainer.component';
import { FsToggleComponent } from './fstoggle.component';
import { FsToggleOptionComponent } from './fstoggleoption.component';

@NgModule({
    declarations: [
      FsToggleContainerComponent,
      FsToggleComponent,
      FsToggleOptionComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MatIconModule
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsToggleModule,
      providers: []
    };
  }
}