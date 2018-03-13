"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var common_2 = require("@firestitch/common");
var fstogglecontainer_component_1 = require("./components/toggle-container/fstogglecontainer.component");
var fstoggle_component_1 = require("./components/toggle/fstoggle.component");
var fstoggleoption_component_1 = require("./components/toggle-options/fstoggleoption.component");
var FsToggleModule = (function () {
    function FsToggleModule() {
    }
    FsToggleModule_1 = FsToggleModule;
    FsToggleModule.forRoot = function () {
        return {
            ngModule: FsToggleModule_1,
            providers: []
        };
    };
    FsToggleModule = FsToggleModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                fstogglecontainer_component_1.FsToggleContainerComponent,
                fstoggle_component_1.FsToggleComponent,
                fstoggleoption_component_1.FsToggleOptionComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                material_1.MatIconModule,
                common_2.FsCommonModule
            ],
            providers: [],
            exports: [
                fstogglecontainer_component_1.FsToggleContainerComponent,
                fstoggle_component_1.FsToggleComponent,
                fstoggleoption_component_1.FsToggleOptionComponent
            ]
        })
    ], FsToggleModule);
    return FsToggleModule;
    var FsToggleModule_1;
}());
exports.FsToggleModule = FsToggleModule;
//# sourceMappingURL=fstoggle.module.js.map