import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { SecondExampleComponent } from './components/second-example/second-example.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, FirstExampleComponent, SecondExampleComponent]
})
export class AppComponent {
  public config = environment;
}
