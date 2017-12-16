import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FsToggleModule }  from '@firestitch/toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent {
  constructor() {}
  selected = [];
  list = [
    {
        id: 1,
        name: 'Ray',
        icon: 'sentiment_satisfied'
    },
    {
        id: 2,
        name: 'Jim',
        icon: 'sentiment_neutral'
    },
    {
        id: 3,
        name: 'Billy',
        icon: 'sentiment_dissatisfied'
    }
  ];


  ngOnInit() {  
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsToggleModule, BrowserAnimationsModule, FormsModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
