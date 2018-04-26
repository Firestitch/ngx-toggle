import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html',
  styleUrls: [ 'first-example.component.css' ]
})
export class FirstExampleComponent implements OnInit {

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
