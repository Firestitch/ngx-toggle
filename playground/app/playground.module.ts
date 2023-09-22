import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsToggleModule } from '@firestitch/toggle';

import { AppComponent } from './app.component';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { SecondExampleComponent } from './components/second-example/second-example.component';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsToggleModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    SecondExampleComponent
  ],
})
export class PlaygroundModule {
}
