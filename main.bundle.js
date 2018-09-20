webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demo-d3-charts/demo-d3-charts.module": [
		"../../../../../src/app/features/demo-d3-charts/demo-d3-charts.module.ts",
		0
	],
	"./features/features.module": [
		"../../../../../src/app/features/features.module.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'spia', pathMatch: 'full' },
    { path: 'spia', loadChildren: './features/features.module#FeaturesModule' },
    { path: '**', redirectTo: 'spia', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_translation_translation_service__ = __webpack_require__("../../../../../src/app/core/services/translation/translation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var modules = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
    __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
];
var exports = [];
var providers = [
    __WEBPACK_IMPORTED_MODULE_6_d3_ng2_service__["a" /* D3Service */] // <-- import provider
];
var AppModule = /** @class */ (function () {
    function AppModule(translationSvc) {
        this.translationSvc = translationSvc;
        translationSvc.registerFor('');
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: modules,
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            providers: providers,
            exports: exports,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__core_services_translation_translation_service__["a" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_services_translation_translation_service__["a" /* TranslationService */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top nav-bg\">\n  <a class=\"navbar-brand\"><img class=\"rounded-circle\" src=\"./assets/images/SPIA_LOGO.jpg\">SPI Automation</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n    <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n          <i class=\"fa fa-user\"></i> A263640(Admin) <span (click)=\"onLoggedout()\"><i class=\"fa fa-fw fa-power-off\"></i></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .navbar {\n  background-color: #212831; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n    :host .navbar .navbar-brand img {\n      margin-right: 5px;\n      height: 37px;\n      width: 50px;\n      background-color: white; }\n  :host .navbar .nav-item > a {\n    color: #fff; }\n    :host .navbar .nav-item > a span:hover {\n      color: #0569f5; }\n\n:host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n    :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.rounded-circle {\n  border: 2px solid #5ee25e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_translation_translation_service__ = __webpack_require__("../../../../../src/app/core/services/translation/translation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translationSvc) {
        // con
        this.translationSvc = translationSvc;
        this.pushRightClass = 'push-right';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // int
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        this.translationSvc.changeLanguage('en_GB');
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-header',
            template: __webpack_require__("../../../../../src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_translation_translation_service__["a" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_translation_translation_service__["a" /* TranslationService */]) === "function" && _a || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n  <div class=\"list-group\">\n    <a routerLink=\"/spia/dashboard\" class=\"list-group-item\" title=\"Dashboard\">\n      <i class=\"fa fa-dashboard\"></i>&nbsp;\n      <span>Dashboard</span>\n    </a>\n  </div>\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n    <i class=\"fa fa-fw fa-angle-double-left\"></i>&nbsp;\n    <span>Version V 1.0</span>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 215px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #cccccc;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #cccccc;\n    border: 0;\n    border-radius: 0;\n    color: #000;\n    text-decoration: none; }\n    .sidebar .list-group a.list-group-item .fa {\n      margin-right: 7px; }\n  .sidebar .list-group a:hover {\n    background: #5d5959;\n    color: white;\n    font-weight: bold; }\n  .sidebar .list-group a.router-link-active {\n    background: #5d5959;\n    color: #000; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n    .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: 0px;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #cccccc; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #bfbfbf; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #cccccc;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #bfbfbf; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #000;\n    padding: 10px;\n    display: block;\n    font-size: 14px; }\n  .nested-menu .expand ul.submenu li a:hover {\n    color: #fff;\n    text-decoration: none; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n\n@media print {\n  .sidebar {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n\n::-webkit-scrollbar {\n  width: 8px; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n\n.toggle-button {\n  position: fixed;\n  width: 215px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #fff;\n  background: #5d5959;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #504d4d;\n    color: #fff; }\n\n.collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.collapsedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // hi
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-sidebar',
            template: __webpack_require__("../../../../../src/app/core/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_translation_translation_service__ = __webpack_require__("../../../../../src/app/core/services/translation/translation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_security_token_service__ = __webpack_require__("../../../../../src/app/core/services/security/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_security_user_service__ = __webpack_require__("../../../../../src/app/core/services/security/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_security_security_service__ = __webpack_require__("../../../../../src/app/core/services/security/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_http_service__ = __webpack_require__("../../../../../src/app/core/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/core/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interceptors_auth_interceptor__ = __webpack_require__("../../../../../src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__interceptors_http_error_interceptor__ = __webpack_require__("../../../../../src/app/core/interceptors/http-error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_local_storage_local_storage_service__ = __webpack_require__("../../../../../src/app/core/services/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_notification_notification_service__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_security_security_reducer__ = __webpack_require__("../../../../../src/app/core/services/security/security.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_notification_notification_reducer__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_security_security_effects__ = __webpack_require__("../../../../../src/app/core/services/security/security.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__interceptors_interceptor_effects__ = __webpack_require__("../../../../../src/app/core/interceptors/interceptor.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_notification_notification_effects__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular_oauth2_oidc__);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import ngx-translate and the http loader





















// required for AOT compilation
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var components = [];
var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
    __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
    __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot({
        positionClass: 'toast-bottom-center',
        closeButton: true,
        progressBar: true,
        enableHtml: true
    }),
    __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
        loader: {
            provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateLoader */],
            useFactory: HttpLoaderFactory,
            deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
        }
    }),
    __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["a" /* StoreModule */].forRoot({}),
    __WEBPACK_IMPORTED_MODULE_22__ngrx_effects__["a" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_23__services_security_security_effects__["a" /* SecurityEffects */]]),
    __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["a" /* StoreModule */].forFeature(__WEBPACK_IMPORTED_MODULE_20__services_security_security_reducer__["a" /* securityFeatureName */], __WEBPACK_IMPORTED_MODULE_20__services_security_security_reducer__["b" /* reducer */]),
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["a" /* StoreModule */].forFeature(__WEBPACK_IMPORTED_MODULE_21__services_notification_notification_reducer__["a" /* notificationsFeatureName */], __WEBPACK_IMPORTED_MODULE_21__services_notification_notification_reducer__["b" /* notificationReducer */]),
    __WEBPACK_IMPORTED_MODULE_22__ngrx_effects__["a" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_23__services_security_security_effects__["a" /* SecurityEffects */], __WEBPACK_IMPORTED_MODULE_24__interceptors_interceptor_effects__["a" /* InterceptorEffects */], __WEBPACK_IMPORTED_MODULE_25__services_notification_notification_effects__["a" /* NotificationEffects */]]),
];
var providers = [
    __WEBPACK_IMPORTED_MODULE_10__services_security_token_service__["a" /* TokenService */],
    __WEBPACK_IMPORTED_MODULE_11__services_security_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_12__services_security_security_service__["a" /* SecurityService */],
    __WEBPACK_IMPORTED_MODULE_9__services_translation_translation_service__["a" /* TranslationService */],
    __WEBPACK_IMPORTED_MODULE_17__services_local_storage_local_storage_service__["a" /* LocalStorageService */],
    __WEBPACK_IMPORTED_MODULE_18__services_notification_notification_service__["a" /* NotificationService */],
    __WEBPACK_IMPORTED_MODULE_13__services_http_http_service__["a" /* HttpService */],
    __WEBPACK_IMPORTED_MODULE_26_angular_oauth2_oidc__["OAuthService"],
    __WEBPACK_IMPORTED_MODULE_26_angular_oauth2_oidc__["UrlHelperService"],
    { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_14__interceptors_token_interceptor__["a" /* TokenInterceptor */], multi: true },
    { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_15__interceptors_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
    { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_16__interceptors_http_error_interceptor__["a" /* HttpErrorInterceptor */], multi: true }
];
var exported = components.concat([
    __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */]
]);
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: providers
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: modules,
            declarations: components,
            exports: exported
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AppState } from '../../app.reducer';


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).catch(function (errorResponse) {
            if (errorResponse instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */] && errorResponse.status === 401) {
                // this.store.dispatch(new AuthFailed());
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorResponse);
        });
    };
    AuthInterceptor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/http-error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AppState } from '../../app.reducer';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor() {
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).catch(function (errorResponse) {
            if (errorResponse instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */]) {
                // this.store.dispatch(new HttpError(errorResponse));
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorResponse);
        });
    };
    HttpErrorInterceptor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());

//# sourceMappingURL=http-error.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/interceptor.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interceptorActions; });
/* unused harmony export AuthFailed */
/* unused harmony export HttpError */
var interceptorActions = {
    AUTH_FAILED: '[Interceptor] Authentication Failed',
    HTTP_ERROR: '[Interceptor] Http Error'
};
var AuthFailed = /** @class */ (function () {
    function AuthFailed() {
        this.type = interceptorActions.AUTH_FAILED;
    }
    return AuthFailed;
}());

var HttpError = /** @class */ (function () {
    function HttpError(payload) {
        this.payload = payload;
        this.type = interceptorActions.HTTP_ERROR;
    }
    return HttpError;
}());

//# sourceMappingURL=interceptor.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/interceptor.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptor_actions__ = __webpack_require__("../../../../../src/app/core/interceptors/interceptor.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_notification_actions__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_notification_reducer__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_security_security_service__ = __webpack_require__("../../../../../src/app/core/services/security/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InterceptorEffects = /** @class */ (function () {
    function InterceptorEffects(actions$, securityService) {
        var _this = this;
        this.actions$ = actions$;
        this.securityService = securityService;
        this.authInterceptorError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__interceptor_actions__["a" /* interceptorActions */].AUTH_FAILED)
            .do(function () { return _this.securityService.redirectToHomePage(); });
        this.httpInterceptorError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__interceptor_actions__["a" /* interceptorActions */].HTTP_ERROR)
            .map(function (action) { return action.payload; })
            .map(function (error) { return new __WEBPACK_IMPORTED_MODULE_3__services_notification_notification_actions__["e" /* SendNotification */]({
            message: error.message,
            title: error.status + " - " + error.statusText,
            notificationType: __WEBPACK_IMPORTED_MODULE_4__services_notification_notification_reducer__["d" /* NotificationType */].ERROR
        }); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], InterceptorEffects.prototype, "authInterceptorError$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], InterceptorEffects.prototype, "httpInterceptorError$", void 0);
    InterceptorEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_security_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_security_security_service__["a" /* SecurityService */]) === "function" && _b || Object])
    ], InterceptorEffects);
    return InterceptorEffects;
    var _a, _b;
}());

//# sourceMappingURL=interceptor.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_security_security_reducer__ = __webpack_require__("../../../../../src/app/core/services/security/security.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(store) {
        this.store = store;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].race(this.store.select(__WEBPACK_IMPORTED_MODULE_3__services_security_security_reducer__["c" /* tokenSelector */])
            .filter(function (token) { return !!token; })
            .switchMap(function (token) { return next.handle(request.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        })); }), next.handle(request));
    };
    TokenInterceptor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], TokenInterceptor);
    return TokenInterceptor;
    var _a;
}());

//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService.prototype.createHttpParams = function (parameters) {
        return Object.keys(parameters)
            .filter(function (key) { return !!parameters[key]; })
            .reduce(function (p, key) { return p.set(key, parameters[key].toString()); }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]());
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/local-storage/local-storage.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultConfig; });
var defaultConfig = {
    prefix: 'spia.',
    storage: localStorage,
    expire: 3600
};
//# sourceMappingURL=local-storage.config.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/local-storage/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_config__ = __webpack_require__("../../../../../src/app/core/services/local-storage/local-storage.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (key) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var item = JSON.parse(__WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].storage.getItem("" + __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].prefix + key));
            if (item && !_this.isExpired(item)) {
                observer.next(item.value);
            }
        });
    };
    LocalStorageService.prototype.set = function (key, value, expiresIn) {
        if (expiresIn === void 0) { expiresIn = __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].expire; }
        var item = {
            expires: Date.now() + (expiresIn * 1000),
            value: value
        };
        __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].storage.setItem("" + __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].prefix + key, JSON.stringify(item));
    };
    LocalStorageService.prototype.remove = function (key) {
        if (key === void 0) { key = ''; }
        Object.keys(localStorage)
            .filter(function (item) { return item.indexOf("" + __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].prefix + key) === 0; })
            .forEach(function (item) { return __WEBPACK_IMPORTED_MODULE_2__local_storage_config__["a" /* defaultConfig */].storage.removeItem(item); });
    };
    LocalStorageService.prototype.isExpired = function (item) {
        return !item || new Date(item.expires).getTime() <= Date.now();
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/notification/notification.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_reducer__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return notificationActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SendNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SendNotificationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HideNotificationSuccess; });

var notificationActions = {
    SEND_NOTIFICATION: "[" + __WEBPACK_IMPORTED_MODULE_0__notification_reducer__["a" /* notificationsFeatureName */] + "] Send",
    SEND_NOTIFICATION_SUCCESS: "[" + __WEBPACK_IMPORTED_MODULE_0__notification_reducer__["a" /* notificationsFeatureName */] + "] Send success",
    HIDE_NOTIFICATION: "[" + __WEBPACK_IMPORTED_MODULE_0__notification_reducer__["a" /* notificationsFeatureName */] + "] Hide",
    HIDE_NOTIFICATION_SUCCESS: "[" + __WEBPACK_IMPORTED_MODULE_0__notification_reducer__["a" /* notificationsFeatureName */] + "] Hide success"
};
var SendNotification = /** @class */ (function () {
    function SendNotification(notification) {
        this.notification = notification;
        this.type = notificationActions.SEND_NOTIFICATION;
    }
    return SendNotification;
}());

var SendNotificationSuccess = /** @class */ (function () {
    function SendNotificationSuccess(notification) {
        this.notification = notification;
        this.type = notificationActions.SEND_NOTIFICATION_SUCCESS;
    }
    return SendNotificationSuccess;
}());

var HideNotification = /** @class */ (function () {
    function HideNotification(notification) {
        this.notification = notification;
        this.type = notificationActions.HIDE_NOTIFICATION;
    }
    return HideNotification;
}());

var HideNotificationSuccess = /** @class */ (function () {
    function HideNotificationSuccess(notifications) {
        this.notifications = notifications;
        this.type = notificationActions.HIDE_NOTIFICATION_SUCCESS;
    }
    return HideNotificationSuccess;
}());

//# sourceMappingURL=notification.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/notification/notification.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notificationConfig; });
var notificationConfig = {
    maxLength: 100,
    toastr: {
        preventDuplicates: true
    }
};
//# sourceMappingURL=notification.config.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/notification/notification.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_service__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_actions__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_reducer__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NotificationEffects = /** @class */ (function () {
    function NotificationEffects(actions$, notificationService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.store = store;
        this.sendNotification$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__notification_actions__["b" /* notificationActions */].SEND_NOTIFICATION)
            .map(function (action) { return action.notification; })
            .map(function (notification) { return _this.notificationService[notification.notificationType](notification); })
            .filter(function (notification) { return !!notification; })
            .map(function (notification) { return new __WEBPACK_IMPORTED_MODULE_4__notification_actions__["c" /* SendNotificationSuccess */](notification); });
        this.hideNotification$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__notification_actions__["b" /* notificationActions */].HIDE_NOTIFICATION)
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_5__notification_reducer__["c" /* notificationsSelector */]))
            .map(function (_a) {
            var action = _a[0], notifications = _a[1];
            return notifications.filter(function (notification) { return notification !== action.notification; });
        })
            .map(function (notifications) { return new __WEBPACK_IMPORTED_MODULE_4__notification_actions__["d" /* HideNotificationSuccess */](notifications); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotificationEffects.prototype, "sendNotification$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], NotificationEffects.prototype, "hideNotification$", void 0);
    NotificationEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
    ], NotificationEffects);
    return NotificationEffects;
    var _a, _b, _c;
}());

//# sourceMappingURL=notification.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/notification/notification.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_actions__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notificationsFeatureName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NotificationType; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = notificationReducer;
/* unused harmony export getNotifications */
/* unused harmony export notificationsStateSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return notificationsSelector; });


var notificationsFeatureName = 'notifications';
var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "sendSuccess";
    NotificationType["INFO"] = "sendInfo";
    NotificationType["WARNING"] = "sendWarning";
    NotificationType["ERROR"] = "sendError";
})(NotificationType || (NotificationType = {}));
var initialState = {
    notifications: []
};
function notificationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (__WEBPACK_IMPORTED_MODULE_1__notification_actions__["b" /* notificationActions */].SEND_NOTIFICATION_SUCCESS): {
            return {
                notifications: state.notifications.concat([action.notification])
            };
        }
        case (__WEBPACK_IMPORTED_MODULE_1__notification_actions__["b" /* notificationActions */].HIDE_NOTIFICATION_SUCCESS): {
            return {
                notifications: action.notifications.slice()
            };
        }
        default: {
            return state;
        }
    }
}
var getNotifications = function (state) { return state.notifications; };
var notificationsStateSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])(notificationsFeatureName);
var notificationsSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(notificationsStateSelector, getNotifications);
//# sourceMappingURL=notification.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/notification/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_actions__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_config__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationService = /** @class */ (function () {
    function NotificationService(store, toastr) {
        this.store = store;
        this.toastr = toastr;
        Object.assign(toastr.toastrConfig, __WEBPACK_IMPORTED_MODULE_4__notification_config__["a" /* notificationConfig */].toastr);
    }
    NotificationService.prototype.sendSuccess = function (notification) {
        var toast = this.toastr.success(this.limitToMaxLength(notification.message), notification.title);
        return toast && this.onHiddenHandler(toast, notification);
    };
    NotificationService.prototype.sendError = function (notification) {
        var toast = this.toastr.error(this.limitToMaxLength(notification.message), notification.title);
        return toast && this.onHiddenHandler(toast, notification);
    };
    NotificationService.prototype.sendInfo = function (notification) {
        var toast = this.toastr.info(this.limitToMaxLength(notification.message), notification.title);
        return toast && this.onHiddenHandler(toast, notification);
    };
    NotificationService.prototype.sendWarning = function (notification) {
        var toast = this.toastr.warning(this.limitToMaxLength(notification.message), notification.title);
        return toast && this.onHiddenHandler(toast, notification);
    };
    NotificationService.prototype.limitToMaxLength = function (message) {
        return (message.length < __WEBPACK_IMPORTED_MODULE_4__notification_config__["a" /* notificationConfig */].maxLength) ? message : message.substring(0, __WEBPACK_IMPORTED_MODULE_4__notification_config__["a" /* notificationConfig */].maxLength).concat('...');
    };
    NotificationService.prototype.onHiddenHandler = function (toast, notification) {
        var _this = this;
        toast.onHidden.subscribe(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__notification_actions__["a" /* HideNotification */](notification));
        });
        return notification;
    };
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object])
    ], NotificationService);
    return NotificationService;
    var _a, _b;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/oauth.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return oauthConfig; });

var oauthConfig = {
    clientId: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].oauth.clientId,
    issuer: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].oauth.url,
    loginUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].oauth.url + "/as/authorization.oauth2",
    logoutUrl: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].oauth.url + "/idp/startSLO.ping?TargetResource=" + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host),
    redirectUri: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "/finish.html",
    customQueryParams: {
        display: 'page'
    }
};
//# sourceMappingURL=oauth.config.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/security.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__security_reducer__ = __webpack_require__("../../../../../src/app/core/services/security/security.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return securityActions; });
/* unused harmony export TryLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TryLoginFailed; });
/* unused harmony export Login */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TokenReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginSuccess; });
/* unused harmony export Logout */

var securityActions = {
    TRY_LOGIN: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Try Login",
    TRY_LOGIN_FAILED: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Try login failed",
    LOGIN: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Login",
    TOKEN_RECEIVED: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Token Received",
    LOGIN_SUCCESS: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Login Success",
    LOGOUT: "[" + __WEBPACK_IMPORTED_MODULE_0__security_reducer__["a" /* securityFeatureName */] + "] Logout"
};
var TryLogin = /** @class */ (function () {
    function TryLogin() {
        this.type = securityActions.TRY_LOGIN;
    }
    return TryLogin;
}());

var TryLoginFailed = /** @class */ (function () {
    function TryLoginFailed() {
        this.type = securityActions.TRY_LOGIN_FAILED;
    }
    return TryLoginFailed;
}());

var Login = /** @class */ (function () {
    function Login() {
        this.type = securityActions.LOGIN;
    }
    return Login;
}());

var TokenReceived = /** @class */ (function () {
    function TokenReceived() {
        this.type = securityActions.TOKEN_RECEIVED;
    }
    return TokenReceived;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = securityActions.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = securityActions.LOGOUT;
    }
    return Logout;
}());

//# sourceMappingURL=security.actions.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/security.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_service__ = __webpack_require__("../../../../../src/app/core/services/security/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/core/services/security/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_actions__ = __webpack_require__("../../../../../src/app/core/services/security/security.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification_actions__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_notification_reducer__ = __webpack_require__("../../../../../src/app/core/services/notification/notification.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__token_service__ = __webpack_require__("../../../../../src/app/core/services/security/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_if__ = __webpack_require__("../../../../rxjs/add/observable/if.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_if___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_if__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SecurityEffects = /** @class */ (function () {
    function SecurityEffects(actions$, securityService, userService, translate, tokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.securityService = securityService;
        this.userService = userService;
        this.translate = translate;
        this.tokenService = tokenService;
        this.tryLogin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__security_actions__["a" /* securityActions */].TRY_LOGIN)
            .do(function () { return _this.securityService.tryLogin(); })
            .map(function () { return ({
            currentUser: _this.userService.getCurrentUser(),
            token: _this.tokenService.getToken()
        }); })
            .switchMap(function (_a) {
            var currentUser = _a.currentUser, token = _a.token;
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].if(function () { return !!currentUser; }, __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__security_actions__["c" /* LoginSuccess */]({ currentUser: currentUser, token: token })), __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__security_actions__["d" /* TryLoginFailed */]()));
        });
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__security_actions__["a" /* securityActions */].LOGIN)
            .switchMap(function () { return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of(_this.securityService.login()); });
        this.tokenReceived$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__security_actions__["a" /* securityActions */].TOKEN_RECEIVED)
            .map(function () { return ({
            currentUser: _this.userService.getCurrentUser(),
            token: _this.tokenService.getToken()
        }); })
            .mergeMap(function (_a) {
            var currentUser = _a.currentUser, token = _a.token;
            return [new __WEBPACK_IMPORTED_MODULE_5__notification_notification_actions__["e" /* SendNotification */]({
                    message: _this.translate.instant('SECURITY.USER_LOGGED_IN_MESSAGE', { user: currentUser }),
                    title: _this.translate.instant('SECURITY.USER_LOGGED_IN_TITLE'),
                    notificationType: __WEBPACK_IMPORTED_MODULE_6__notification_notification_reducer__["d" /* NotificationType */].INFO
                }),
                new __WEBPACK_IMPORTED_MODULE_4__security_actions__["c" /* LoginSuccess */]({ currentUser: currentUser, token: token })
            ];
        });
        this.logout$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__security_actions__["a" /* securityActions */].LOGOUT)
            .do(function () { return _this.securityService.logout(); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SecurityEffects.prototype, "tryLogin$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SecurityEffects.prototype, "login$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SecurityEffects.prototype, "tokenReceived$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SecurityEffects.prototype, "logout$", void 0);
    SecurityEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__token_service__["a" /* TokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__token_service__["a" /* TokenService */]) === "function" && _e || Object])
    ], SecurityEffects);
    return SecurityEffects;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=security.effects.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/security.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__security_actions__ = __webpack_require__("../../../../../src/app/core/services/security/security.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return securityFeatureName; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getCurrentUser */
/* unused harmony export getToken */
/* unused harmony export currentUserSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tokenSelector; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var securityFeatureName = 'security';
var initialState = {
    currentUser: null,
    token: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__security_actions__["a" /* securityActions */].LOGIN_SUCCESS:
            return __assign({}, state, { currentUser: action.payload.currentUser, token: action.payload.token });
        case __WEBPACK_IMPORTED_MODULE_0__security_actions__["a" /* securityActions */].TRY_LOGIN_FAILED:
            return __assign({}, state, { currentUser: null });
        default:
            return state;
    }
}
var getCurrentUser = function (state) { return state.currentUser; };
var getToken = function (state) { return state.token; };
var securityStateSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* createFeatureSelector */])(securityFeatureName);
var currentUserSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(securityStateSelector, getCurrentUser);
var tokenSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* createSelector */])(securityStateSelector, getToken);
//# sourceMappingURL=security.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_service__ = __webpack_require__("../../../../../src/app/core/services/security/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_actions__ = __webpack_require__("../../../../../src/app/core/services/security/security.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__oauth_config__ = __webpack_require__("../../../../../src/app/core/services/security/oauth.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SecurityService = /** @class */ (function () {
    function SecurityService(oAuthService, store, router) {
        this.oAuthService = oAuthService;
        this.store = store;
        this.router = router;
        this.tokenReceived();
        this.configureOAuthService();
    }
    SecurityService.prototype.login = function () {
        this.oAuthService.initImplicitFlow();
    };
    SecurityService.prototype.tryLogin = function () {
        this.oAuthService.tryLogin();
    };
    SecurityService.prototype.logout = function () {
        this.oAuthService.logOut(true);
        location.assign(this.oAuthService.logoutUrl);
    };
    SecurityService.prototype.redirectToHomePage = function () {
        this.router.navigate(['/']);
    };
    SecurityService.prototype.configureOAuthService = function () {
        Object.assign(this.oAuthService, __WEBPACK_IMPORTED_MODULE_5__oauth_config__["a" /* oauthConfig */]);
        this.oAuthService.setStorage(localStorage);
        this.oAuthService.tokenValidationHandler = new __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["NullValidationHandler"]();
    };
    SecurityService.prototype.tokenReceived = function () {
        var _this = this;
        this.oAuthService.events
            .filter(function (event) { return event.type === __WEBPACK_IMPORTED_MODULE_3__token_service__["b" /* tokenEvents */].TOKEN_RECEIVED; })
            .subscribe(function () { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__security_actions__["b" /* TokenReceived */]()); });
    };
    SecurityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], SecurityService);
    return SecurityService;
    var _a, _b, _c;
}());

//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tokenEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var tokenEvents = {
    TOKEN_EXPIRES: 'token_expires',
    TOKEN_RECEIVED: 'token_received'
};
var TokenService = /** @class */ (function () {
    function TokenService(oAuthService) {
        this.oAuthService = oAuthService;
        this.refreshToken();
    }
    TokenService.prototype.getToken = function () {
        return this.oAuthService.getAccessToken();
    };
    TokenService.prototype.refreshToken = function () {
        var _this = this;
        this.oAuthService.events
            .filter(function (event) { return event.type === tokenEvents.TOKEN_EXPIRES; })
            .subscribe(function () { return _this.oAuthService.silentRefresh(); });
    };
    TokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object])
    ], TokenService);
    return TokenService;
    var _a;
}());

//# sourceMappingURL=token.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/security/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__ = __webpack_require__("../../../../angular-oauth2-oidc/angular-oauth2-oidc.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(oAuthService) {
        this.oAuthService = oAuthService;
    }
    UserService.prototype.isAuthenticated = function () {
        return this.oAuthService.hasValidAccessToken();
    };
    UserService.prototype.getCurrentUser = function () {
        return this.oAuthService.getIdentityClaims();
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_oauth2_oidc__["OAuthService"]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/translation/translation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_local_storage_service__ = __webpack_require__("../../../../../src/app/core/services/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mapTo__ = __webpack_require__("../../../../rxjs/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_race__ = __webpack_require__("../../../../rxjs/add/operator/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_race___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_race__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TranslationService = /** @class */ (function () {
    function TranslationService(translate, http, storage) {
        this.translate = translate;
        this.http = http;
        this.storage = storage;
        this.langs = ['en_US', 'en_GB'];
        this.defaultLang = 'en_US';
        this.suffix = '.json';
        this.translate.addLangs(this.langs);
        this.translate.setDefaultLang(this.defaultLang);
        this.translate.use(this.defaultLang);
        // const browserLang = this.translate.getBrowserLang() + '_US';
        // this.translate.use(browserLang.match(/en|fr/) ? browserLang : this.defaultLang);
    }
    TranslationService.prototype.registerFor = function (modulePath) {
        this.getTranslations(this.translate.currentLang, modulePath);
    };
    TranslationService.prototype.changeLanguage = function (changedLang) {
        this.translate.use(changedLang);
    };
    TranslationService.prototype.getTranslations = function (lang, modulePath) {
        var _this = this;
        var prefix = modulePath ? modulePath.split('/').pop() + "-" + lang : lang;
        var url = modulePath + "/i18n/" + prefix + this.suffix;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].race(this.storage.get(url), this.http.get(url)
            .do(function (translations) { return _this.storage.set(url, translations); }));
    };
    TranslationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
    ], TranslationService);
    return TranslationService;
    var _a, _b, _c;
}());

//# sourceMappingURL=translation.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/modal/modal-component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <ng-content *ngIf=\"!projectedTemplate; else projectedContainer\"></ng-content>\r\n    <ng-template #projectedContainer>\r\n      <ng-container *ngTemplateOutlet=\"projectedTemplate; context: {$implicit: (data)}\"></ng-container>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-secondary\" (click)=\"dismiss()\">{{cancelButtonLabel}}</button>\r\n    <button class=\"btn btn-primary\" (click)=\"close(data)\">{{actionButtonLabel}}</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary modal-launcher\" (click)=\"open(content)\">{{launchButtonLabel}}</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/modal/modal-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .modal-content .modal-header {\n  border-bottom: 1px solid #ced4da; }\n\n::ng-deep .modal-content .modal-footer {\n  border-top: 1px solid #ced4da; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/modal/modal-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.confirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content)
            .result.then(function (closeResult) { return _this.confirm.emit(closeResult); }, function () { return _this.cancel.emit(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "actionButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "cancelButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "launchButtonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], ModalComponent.prototype, "confirm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
    ], ModalComponent.prototype, "cancel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)
    ], ModalComponent.prototype, "modalTemplate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('projectedTemplate'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _d || Object)
    ], ModalComponent.prototype, "projectedTemplate", void 0);
    ModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-modal',
            template: __webpack_require__("../../../../../src/app/shared/components/modal/modal-component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/modal/modal-component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _e || Object])
    ], ModalComponent);
    return ModalComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=modal-component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_header_header_component__ = __webpack_require__("../../../../../src/app/core/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/core/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_local_storage_local_storage_service__ = __webpack_require__("../../../../../src/app/core/services/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/shared/components/modal/modal-component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var modules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forChild()
];
var components = [
    __WEBPACK_IMPORTED_MODULE_3__core_components_header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__core_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_modal_modal_component__["a" /* ModalComponent */]
];
var exported = components.concat([
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */]
]);
var providers = [
    __WEBPACK_IMPORTED_MODULE_7__core_services_local_storage_local_storage_service__["a" /* LocalStorageService */]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: modules,
            declarations: components,
            exports: exported,
            providers: providers,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__components_modal_modal_component__["a" /* ModalComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    host: 'http://localhost:8080',
    api: 'http://localhost:8080/assets',
    oauth: {
        url: 'https://federate-qa.volvo.com',
        clientId: 'pos-uiservice-rest'
    },
    production: false,
    environmentName: 'dev'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




// tslint:disable-next-line
__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map