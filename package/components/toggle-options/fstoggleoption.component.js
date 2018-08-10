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
var Subject_1 = require("rxjs/Subject");
var FsToggleOptionComponent = (function () {
    function FsToggleOptionComponent() {
        this.selected = false;
        this.style = {};
        this.subject = new Subject_1.Subject();
    }
    FsToggleOptionComponent.prototype.ngOnInit = function () {
        if (this.fsWidth) {
            this.style['width'] = this.fsWidth + 'px';
        }
    };
    FsToggleOptionComponent.prototype.click = function () {
        this.subject.next(this.value);
    };
    FsToggleOptionComponent.prototype.subscribe = function (fn) {
        this.subject.asObservable().subscribe(fn);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleOptionComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleOptionComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleOptionComponent.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleOptionComponent.prototype, "fsWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsToggleOptionComponent.prototype, "fsIcon", void 0);
    FsToggleOptionComponent = __decorate([
        core_1.Component({
            selector: 'fs-toggle-option',
            template: "\n    <div fxLayoutAlign=\"start center\" class=\"fs-toggle-option\" (click)=\"click()\"\n    [ngClass]=\"{ selected: selected }\"\n    [ngStyle]=\"style\">\n      <mat-icon *ngIf=\"fsIcon\">{{ fsIcon }}</mat-icon>\n      <span class=\"fs-toggle-option-template\">\n        <ng-content></ng-content>\n      </span>\n    </div>",
            styleUrls: ['./fstoggleoption.css']
        }),
        __metadata("design:paramtypes", [])
    ], FsToggleOptionComponent);
    return FsToggleOptionComponent;
}());
exports.FsToggleOptionComponent = FsToggleOptionComponent;
//# sourceMappingURL=fstoggleoption.component.js.map