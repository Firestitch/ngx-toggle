import { Component, Input, Output, ViewChildren, EventEmitter, ContentChildren, QueryList,
   ViewContainerRef, forwardRef, Provider, OnInit, DoCheck, IterableDiffers, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FsArray } from '@firestitch/common';
import { FsToggleOptionComponent } from '../toggle-options/fstoggleoption.component';

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
export class FsToggleComponent implements OnInit, DoCheck {

  @Input() fsMultiple = false;
  @Output() change = new EventEmitter();

  private _model: object[] | object = null;
  private _toggleOptionComponents = [];
  private _childrenDiffer = null;

  @ContentChildren(FsToggleOptionComponent, { read: ViewContainerRef, descendants: true }) options: QueryList<FsToggleOptionComponent>;

  // event hooks for VALUE_ACCESSOR. those are used to imitate real input behavior and emit events outside the directive, e.g. "touched"
  _onTouched = () => { };
  _onChange = (value: any) => { };
  onFocused = (event: any) => { };

  // we initiate those functions to emit events outside the component
  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  constructor(private fsArray: FsArray, private _iterableDiffers: IterableDiffers) {
    this._childrenDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    setTimeout(() => {
      if (this.options && this._childrenDiffer.diff(this.options['_results'])) {

        for (const item of this.options['_results']) {
          this._toggleOptionComponents.push(item['_data'].componentView.component);
        }

        for (const item of this._toggleOptionComponents) {

          item.onClick = (value) => {
            this.setValue(value);
          };
        }

        if (this._model) {
          this.syncSelectedStatus();

          this._onChange(this._model);
          this.change.emit(this._model);
        }
      }
    });
  }

  setValue(value) {

    if (this.fsMultiple) {
      const index = this.findIndex(value);

      if (index >= 0) {
        (<object[]>this._model).splice(index, 1);
      } else {
        (<object[]>this._model).push(value);
      }
    }else {
      this._model = value;
    }

    this.syncSelectedStatus();

    this._onChange(this._model);
    this.change.emit(this._model);
  }

  syncSelectedStatus() {
    for (const item of this._toggleOptionComponents) {
      if (this.fsMultiple) {
        const index = this.findIndex(item.value);
        if (index >= 0) {
          item.selected = true;
        }else {
          item.selected = false;
        }
      }else {
        item.selected = item.value == this._model;
      }
    };
  }

  findIndex(value) {
    return value.id ? this.fsArray.indexOf(this._model, { id: value.id }) : (<object[]>this._model).indexOf(value);
  }

  writeValue(value): void {
    if (value) {
      this._model = value;
    }else {
      this._model = this.fsMultiple ? [] : {};
    }
  }
}
