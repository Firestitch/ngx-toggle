import { AfterContentInit, EventEmitter, QueryList, Provider } from '@angular/core';
import { FsToggleOptionComponent } from '../toggle-options/fstoggleoption.component';
export declare const TOGGLE_VALUE_ACCESSOR: Provider;
export declare class FsToggleComponent implements AfterContentInit {
    fsMultiple: boolean;
    change: EventEmitter<{}>;
    private _model;
    private registeredFsToggleOptionComponents;
    options: QueryList<FsToggleOptionComponent>;
    _onTouched: () => void;
    _onChange: (value: any) => void;
    onFocused: (event: any) => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    constructor();
    ngAfterContentInit(): void;
    private registerFsToggleOptionComponents();
    private setValue(component, value);
    writeValue(value: any): void;
}
