import { Component, OnInit } from '@angular/core';
import { guid } from '@firestitch/common';


@Component({
  selector: 'second-example',
  templateUrl: 'second-example.component.html',
  styleUrls: [ 'second-example.component.css' ]
})
export class SecondExampleComponent implements OnInit {

  constructor() {}

  selected = null;

  list = [];

  ngOnInit() {
      this.list = [
      {
          id: guid(),
          name: 'Ray',
          icon: 'sentiment_satisfied'
      },
      {
          id: guid(),
          name: 'Jim',
          icon: 'sentiment_neutral'
      },
      {
          id: guid(),
          name: 'Billy',
          icon: 'sentiment_dissatisfied'
      },
      {
        id: guid(),
        name: 'Bob',
        icon: 'sentiment_dissatisfied'
      }
    ];

    this.selected = [ this.list[1], this.list[2] ];
  }

  change(value) {
    console.log(value);
  }

  listAdd() {
    this.list = this.list.concat([
      {
          id: guid(),
          name: 'Keith',
          icon: 'sentiment_satisfied'
      },
      {
          id: guid(),
          name: 'Wendy',
          icon: 'sentiment_neutral'
      },
      {
          id: guid(),
          name: 'Shawn',
          icon: 'sentiment_dissatisfied'
      },
      {
        id: guid(),
        name: 'Dave',
        icon: 'sentiment_dissatisfied'
      }
    ]);
  }
}
