import { Component, Input, ViewChildren, ContentChildren, QueryList, ViewContainerRef, forwardRef, Provider, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FsToggleOptionComponent } from './fstoggleoption.component';

export const TOGGLE_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsToggleComponent),
  multi: true
};

@Component({
    selector: 'fs-toggle',
    template: '<ng-content></ng-content>',
    providers: [TOGGLE_VALUE_ACCESSOR]
})
export class FsToggleComponent implements OnInit, AfterViewInit {

  private _model = null;

  @ContentChildren(FsToggleOptionComponent, { read: ViewContainerRef, descendants: true }) options: QueryList<FsToggleOptionComponent>;

  // event hooks for VALUE_ACCESSOR. those are used to imitate real input behavior and emit events outside the directive, e.g. "touched"
  _onTouched = () => { };
  _onChange = (value: any) => { };
  onFocused = (event: any) => { };

  // we initiate those functions to emit events outside the component
  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.options);
    /*
    console.log(this.options.toArray());
    this.options.changes
      .subscribe((value) => {
        console.log('Changed');
      });

      this.options.map(option => console.log(option))
      */
  }

  writeValue(value: any): void {
    // console.log(value);
    this._model = value || [];
  }

  select($event) {
    console.log($event);
    /*
    $scope.selected = true;
    if(controller.$scope.multiple) {
      var index = controller.$scope.model.indexOf($scope.value);
      if(index>=0) {
        controller.$scope.model.splice(index,1);
        $scope.selected = false;
      } else {
        controller.$scope.model.push($scope.value);
      }

    } else {
      controller.$scope.model = $scope.value;
    }
    */
  }
}
