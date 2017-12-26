import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FsToggleModule }  from '@firestitch/toggle';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: [ 'styles.css' ],
  encapsulation: ViewEncapsulation.None
})
class AppComponent implements OnInit {
  constructor() {}

  selected = null;
  selectedMultiple = null;
  selectedIcon = null;

  list = [];


  ngOnInit() {
    setTimeout(() => {
      this.list = [
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
        },
        {
          id: 4,
          name: 'Bob',
          icon: 'sentiment_dissatisfied'
        }
      ];

      this.selected = this.list[1];
      this.selectedMultiple = [this.list[0], this.list[2]];
      this.selectedIcon = [this.list[1], this.list[2]];
    }, 2000);
  }

  change(value) {
    console.log(value);
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FsToggleModule, BrowserAnimationsModule, FormsModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
