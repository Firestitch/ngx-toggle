import {  Component, Input, Output, AfterContentInit, EventEmitter, ContentChildren, QueryList,
          forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { indexOf } from '@firestitch/common';
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
export class FsToggleComponent implements AfterContentInit {

  @Input() fsMultiple = false;
  @Output() change = new EventEmitter();

  private _model: object[] | object = null;
  private registeredFsToggleOptionComponents = [];

  @ContentChildren(FsToggleOptionComponent, { descendants: true }) options: QueryList<FsToggleOptionComponent>;

  _onTouched = () => { };
  _onChange = (value: any) => { };
  onFocused = (event: any) => { };

  registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
  registerOnTouched(fn: () => any): void { this._onTouched = fn }

  constructor() {}

  ngAfterContentInit() {
    this.registerFsToggleOptionComponents();
    this.options.changes.subscribe(() => {
      this.registerFsToggleOptionComponents();
    });
  }

  private registerFsToggleOptionComponents() {
    this.options.forEach(component => {
      if (this.registeredFsToggleOptionComponents.indexOf(component) < 0) {
        this.registeredFsToggleOptionComponents.push(component);
        component.subscribe((value) => {
          this.setValue(component, value);
        })
      }
    });
  }

  private setValue(component, value) {

    if (this.fsMultiple) {

      const index = indexOf(this._model, component.value);
      component.selected = index < 0;

      if (index >= 0) {
        (<object[]>this._model).splice(index, 1);
      } else {
        (<object[]>this._model).push(value);
      }

    } else {

      this.options.forEach(item => {
        item.selected = false;
      });

      component.selected = true;
      this._model = value;
    }

    this._onChange(this._model);
    this.change.emit(this._model);
  }

  writeValue(value): void {

    if (value) {
      this._model = value;
    } else {
      this._model = this.fsMultiple ? [] : null;
    }

    if (this.options) {
      this.options.forEach(component => {

        if (this.fsMultiple) {
          component.selected = indexOf(this._model, component.value) >= 0;
        } else {
          component.selected = this._model === component.value;
        }
      });
    }
  }
}
