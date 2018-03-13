import { EventEmitter, QueryList, Provider, OnInit, DoCheck, IterableDiffers } from '@angular/core';
import { FsArray } from '@firestitch/common';
import { FsToggleOptionComponent } from '../toggle-options/fstoggleoption.component';
export declare const TOGGLE_VALUE_ACCESSOR: Provider;
export declare class FsToggleComponent implements OnInit, DoCheck {
    private fsArray;
    private _iterableDiffers;
    fsMultiple: boolean;
    change: EventEmitter<{}>;
    private _model;
    private _toggleOptionComponents;
    private _childrenDiffer;
    options: QueryList<FsToggleOptionComponent>;
    _onTouched: () => void;
    _onChange: (value: any) => void;
    onFocused: (event: any) => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    constructor(fsArray: FsArray, _iterableDiffers: IterableDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
    setValue(value: any): void;
    syncSelectedStatus(): void;
    findIndex(value: any): number;
    writeValue(value: any): void;
}
