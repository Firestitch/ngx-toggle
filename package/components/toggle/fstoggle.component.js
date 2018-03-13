"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@firestitch/common");
var fstoggleoption_component_1 = require("../toggle-options/fstoggleoption.component");
exports.TOGGLE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return FsToggleComponent; }),
    multi: true
};
var FsToggleComponent = (function () {
    function FsToggleComponent(fsArray, _iterableDiffers) {
        this.fsArray = fsArray;
        this._iterableDiffers = _iterableDiffers;
        this.fsMultiple = false;
        this.change = new core_1.EventEmitter();
        this._model = null;
        this._toggleOptionComponents = [];
        this._childrenDiffer = null;
        // event hooks for VALUE_ACCESSOR. those are used to imitate real input behavior and emit events outside the directive, e.g. "touched"
        this._onTouched = function () { };
        this._onChange = function (value) { };
        this.onFocused = function (event) { };
        this._childrenDiffer = this._iterableDiffers.find([]).create(null);
    }
    // we initiate those functions to emit events outside the component
    FsToggleComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    FsToggleComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    FsToggleComponent.prototype.ngOnInit = function () {
    };
    FsToggleComponent.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.options && _this._childrenDiffer.diff(_this.options['_results'])) {
                for (var _i = 0, _a = _this.options['_results']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this._toggleOptionComponents.push(item['_data'].componentView.component);
                }
                for (var _b = 0, _c = _this._toggleOptionComponents; _b < _c.length; _b++) {
                    var item = _c[_b];
                    item.onClick = function (value) {
                        _this.setValue(value);
                    };
                }
                if (_this._model) {
                    _this.syncSelectedStatus();
                    _this._onChange(_this._model);
                    _this.change.emit(_this._model);
                }
            }
        });
    };
    FsToggleComponent.prototype.setValue = function (value) {
        if (this.fsMultiple) {
            var index = this.findIndex(value);
            if (index >= 0) {
                this._model.splice(index, 1);
            }
            else {
                this._model.push(value);
            }
        }
        else {
            this._model = value;
        }
        this.syncSelectedStatus();
        this._onChange(this._model);
        this.change.emit(this._model);
    };
    FsToggleComponent.prototype.syncSelectedStatus = function () {
        for (var _i = 0, _a = this._toggleOptionComponents; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.fsMultiple) {
                var index = this.findIndex(item.value);
                if (index >= 0) {
                    item.selected = true;
                }
                else {
                    item.selected = false;
                }
            }
            else {
                item.selected = item.value == this._model;
            }
        }
        ;
    };
    FsToggleComponent.prototype.findIndex = function (value) {
        return value.id ? this.fsArray.indexOf(this._model, { id: value.id }) : this._model.indexOf(value);
    };
    FsToggleComponent.prototype.writeValue = function (value) {
        if (value) {
            this._model = value;
        }
        else {
            this._model = this.fsMultiple ? [] : {};
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleComponent.prototype, "fsMultiple", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsToggleComponent.prototype, "change", void 0);
    __decorate([
        core_1.ContentChildren(fstoggleoption_component_1.FsToggleOptionComponent, { read: core_1.ViewContainerRef, descendants: true }),
        __metadata("design:type", core_1.QueryList)
    ], FsToggleComponent.prototype, "options", void 0);
    FsToggleComponent = __decorate([
        core_1.Component({
            selector: 'fs-toggle',
            template: '<ng-content></ng-content>',
            providers: [exports.TOGGLE_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [common_1.FsArray, core_1.IterableDiffers])
    ], FsToggleComponent);
    return FsToggleComponent;
}());
exports.FsToggleComponent = FsToggleComponent;
//# sourceMappingURL=fstoggle.component.js.map