import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { FsCommonModule } from '@firestitch/common';

import { FsToggleContainerComponent } from './components/toggle-container/fstogglecontainer.component';
import { FsToggleComponent } from './components/toggle/fstoggle.component';
import { FsToggleOptionComponent } from './components/toggle-options/fstoggleoption.component';

@NgModule({
    declarations: [
      FsToggleContainerComponent,
      FsToggleComponent,
      FsToggleOptionComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsToggleModule,
      providers: []
    };
  }
}
