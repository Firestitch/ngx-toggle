(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/toggle", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/toggle"] = factory();
	else
		root["@firestitch/toggle"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/toggle-container/fstogglecontainer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "::ng-deep label {\n  -webkit-transform: translate3d(0, 0px, 0) scale(0.75);\n          transform: translate3d(0, 0px, 0) scale(0.75);\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  display: block;\n  line-height: 21px;\n  -webkit-transition: cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  transition: cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  color: rgba(0, 0, 0, .54);\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-toggle/src/components/toggle-container/C:/Projects/fs-toggle/src/components/toggle-container/C:/Projects/fs-toggle/src/components/toggle-container/src/components/toggle-container/fstogglecontainer.scss","C:/Projects/fs-toggle/src/components/toggle-container/C:/Projects/fs-toggle/src/components/toggle-container/fstogglecontainer.scss"],"names":[],"mappings":"AAAU;EACR,sDAAA;UAAA,8CAAA;EACA,+BAAA;UAAA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,2DAAA;EAAA,mDAAA;EACA,0BAAA;CCCD","file":"fstogglecontainer.scss","sourcesContent":["::ng-deep label {\n  transform: translate3d(0, 0px, 0) scale(0.75);\n  transform-origin: left;\n  display: block;\n  line-height: 21px;\n  transition: cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  color: rgba(0, 0, 0, 0.54);\n}\n","::ng-deep label {\n  transform: translate3d(0, 0px, 0) scale(0.75);\n  transform-origin: left;\n  display: block;\n  line-height: 21px;\n  transition: cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/toggle-options/fstoggleoption.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\n  margin-right: 5px;\n}\n\n:host:last-child {\n  margin: 0;\n}\n\n:host .fs-toggle-option {\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px 8px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  text-align: center;\n  color: #fff;\n}\n\n:host .fs-toggle-option .mat-icon {\n  vertical-align: middle;\n}\n\n:host .fs-toggle-option .fs-toggle-option-template {\n  vertical-align: middle;\n}\n\n:host .fs-toggle-option.selected mat-icon {\n  color: #fff;\n}\n\n:host .fs-toggle-option:not(.selected) {\n  background-color: transparent !important;\n}\n\n", "", {"version":3,"sources":["C:/Projects/fs-toggle/src/components/toggle-options/C:/Projects/fs-toggle/src/components/toggle-options/C:/Projects/fs-toggle/src/components/toggle-options/src/components/toggle-options/fstoggleoption.scss","C:/Projects/fs-toggle/src/components/toggle-options/C:/Projects/fs-toggle/src/components/toggle-options/fstoggleoption.scss"],"names":[],"mappings":"AAAA;EAEE,kBAAA;CCAD;;ADFD;EAKI,UAAA;CCCH;;ADEC;EACE,mBAAA;EAEA,sBAAA;EACA,iBAAA;EACA,gBAAA;EACA,4BAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;CCAH;;ADrBD;EAwBM,uBAAA;CCCL;;ADEG;EACE,uBAAA;CCCL;;ADEc;EACT,YAAA;CCCL;;ADzBC;EA2BI,yCAAA;CCEL","file":"fstoggleoption.scss","sourcesContent":[":host {\n\n  margin-right: 5px;\n\n  &:last-child {\n    margin: 0;\n  }\n\n  .fs-toggle-option {\n    border-radius: 4px;\n\n    display: inline-block;\n    padding: 5px 8px;\n    cursor: pointer;\n    -webkit-touch-callout:none;\n    -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n    outline: none;\n    text-align: center;\n    color: #fff;\n\n    .mat-icon {\n      vertical-align: middle;\n    }\n\n    .fs-toggle-option-template {\n      vertical-align: middle;\n    }\n\n    &.selected mat-icon {\n      color: #fff;\n    }\n    &:not(.selected) {\n      background-color: transparent !important;\n    }\n  }\n}\n\n\n",":host {\n  margin-right: 5px;\n}\n\n:host:last-child {\n  margin: 0;\n}\n\n:host .fs-toggle-option {\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px 8px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  text-align: center;\n  color: #fff;\n}\n\n:host .fs-toggle-option .mat-icon {\n  vertical-align: middle;\n}\n\n:host .fs-toggle-option .fs-toggle-option-template {\n  vertical-align: middle;\n}\n\n:host .fs-toggle-option.selected mat-icon {\n  color: #fff;\n}\n\n:host .fs-toggle-option:not(.selected) {\n  background-color: transparent !important;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/toggle/index.ts"));
__export(__webpack_require__("./components/toggle-container/index.ts"));
__export(__webpack_require__("./components/toggle-options/index.ts"));


/***/ }),

/***/ "./components/toggle-container/fstogglecontainer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("@angular/core");
var FsToggleContainerComponent = (function () {
    function FsToggleContainerComponent() {
    }
    FsToggleContainerComponent.prototype.ngOnInit = function () {
    };
    FsToggleContainerComponent = __decorate([
        core_1.Component({
            selector: 'fs-toggle-container',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__("./components/toggle-container/fstogglecontainer.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsToggleContainerComponent);
    return FsToggleContainerComponent;
}());
exports.FsToggleContainerComponent = FsToggleContainerComponent;


/***/ }),

/***/ "./components/toggle-container/fstogglecontainer.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/toggle-container/fstogglecontainer.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/toggle-container/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/toggle-container/fstogglecontainer.component.ts"));


/***/ }),

/***/ "./components/toggle-options/fstoggleoption.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("@angular/core");
var Subject_1 = __webpack_require__("rxjs/Subject");
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
            styles: [__webpack_require__("./components/toggle-options/fstoggleoption.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsToggleOptionComponent);
    return FsToggleOptionComponent;
}());
exports.FsToggleOptionComponent = FsToggleOptionComponent;


/***/ }),

/***/ "./components/toggle-options/fstoggleoption.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/toggle-options/fstoggleoption.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/toggle-options/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/toggle-options/fstoggleoption.component.ts"));


/***/ }),

/***/ "./components/toggle/fstoggle.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
var common_1 = __webpack_require__("@firestitch/common");
var fstoggleoption_component_1 = __webpack_require__("./components/toggle-options/fstoggleoption.component.ts");
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
        this.registerFsToggleOptionComponents();
        this.options.changes.subscribe(this.registerFsToggleOptionComponents);
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


/***/ }),

/***/ "./components/toggle/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/toggle/fstoggle.component.ts"));


/***/ }),

/***/ "./fstoggle.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var forms_1 = __webpack_require__("@angular/forms");
var material_1 = __webpack_require__("@angular/material");
var common_2 = __webpack_require__("@firestitch/common");
var fstogglecontainer_component_1 = __webpack_require__("./components/toggle-container/fstogglecontainer.component.ts");
var fstoggle_component_1 = __webpack_require__("./components/toggle/fstoggle.component.ts");
var fstoggleoption_component_1 = __webpack_require__("./components/toggle-options/fstoggleoption.component.ts");
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


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fstoggle.module.ts"));
__export(__webpack_require__("./components/index.ts"));


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ }),

/***/ "@firestitch/common":
/***/ (function(module, exports) {

module.exports = require("@firestitch/common");

/***/ }),

/***/ "rxjs/Subject":
/***/ (function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map