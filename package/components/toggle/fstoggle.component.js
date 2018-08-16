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
    function FsToggleComponent() {
        this.fsMultiple = false;
        this.change = new core_1.EventEmitter();
        this._model = null;
        this.registeredFsToggleOptionComponents = [];
        this._onTouched = function () { };
        this._onChange = function (value) { };
        this.onFocused = function (event) { };
    }
    FsToggleComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    FsToggleComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    FsToggleComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.registerFsToggleOptionComponents();
        this.options.changes.subscribe(function () {
            _this.registerFsToggleOptionComponents();
        });
    };
    FsToggleComponent.prototype.registerFsToggleOptionComponents = function () {
        var _this = this;
        this.options.forEach(function (component) {
            if (_this.registeredFsToggleOptionComponents.indexOf(component) < 0) {
                _this.registeredFsToggleOptionComponents.push(component);
                component.subscribe(function (value) {
                    _this.setValue(component, value);
                });
            }
        });
    };
    FsToggleComponent.prototype.setValue = function (component, value) {
        if (this.fsMultiple) {
            var index = common_1.indexOf(this._model, component.value);
            component.selected = index < 0;
            if (index >= 0) {
                this._model.splice(index, 1);
            }
            else {
                this._model.push(value);
            }
        }
        else {
            this.options.forEach(function (item) {
                item.selected = false;
            });
            component.selected = true;
            this._model = value;
        }
        this._onChange(this._model);
        this.change.emit(this._model);
    };
    FsToggleComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this._model = value;
        }
        else {
            this._model = this.fsMultiple ? [] : null;
        }
        if (this.options) {
            this.options.forEach(function (component) {
                if (_this.fsMultiple) {
                    component.selected = common_1.indexOf(_this._model, component.value) >= 0;
                }
                else {
                    component.selected = _this._model === component.value;
                }
            });
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
        core_1.ContentChildren(fstoggleoption_component_1.FsToggleOptionComponent, { descendants: true }),
        __metadata("design:type", core_1.QueryList)
    ], FsToggleComponent.prototype, "options", void 0);
    FsToggleComponent = __decorate([
        core_1.Component({
            selector: 'fs-toggle',
            template: '<ng-content></ng-content>',
            providers: [exports.TOGGLE_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], FsToggleComponent);
    return FsToggleComponent;
}());
exports.FsToggleComponent = FsToggleComponent;
//# sourceMappingURL=fstoggle.component.js.map