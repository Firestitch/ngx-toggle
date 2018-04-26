import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsToggleModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsExampleModule } from '@firestitch/example';
import { AppMaterialModule } from './app/material.module';
import { FirstExampleComponent } from './app/components/first-example/first-example.component';
import { SecondExampleComponent } from './app/components/second-example/second-example.component';
import { FsFormModule } from '@firestitch/form';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsToggleModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    FsFormModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    SecondExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
