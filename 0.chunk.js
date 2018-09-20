webpackJsonp([0],{

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_component__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoD3ChartsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_component__["a" /* DemoD3ChartsComponent */] }
];
var DemoD3ChartsRoutingModule = /** @class */ (function () {
    function DemoD3ChartsRoutingModule() {
    }
    DemoD3ChartsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], DemoD3ChartsRoutingModule);
    return DemoD3ChartsRoutingModule;
}());

//# sourceMappingURL=demo-d3-charts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Sampe D3 Chart for reference.-->\n<div>\n  <h4>{{ 'JOBASSESSMENT.CHARTTITLE' | translate }}</h4>\n\n\n  <spia-modal [(title)]=\"title\" [(actionButtonLabel)]=\"actionButtonLabel\"\n                 [(cancelButtonLabel)]=\"cancelButtonLabel\" [(launchButtonLabel)]=\"buttonLabel\"\n                 [(data)]=\"data\" [(launchButtonLabel)]=\"buttonLabel\"\n                 (confirm)=\"confirm($event)\" (cancel)=\"confirm($event)\">\n      <spia-dialog></spia-dialog>\n  </spia-modal>\n</div>\n<svg width=\"200\" height=\"200\"></svg>\n"

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_service__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoD3ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoD3ChartsComponent = /** @class */ (function () {
    function DemoD3ChartsComponent(element, ngZone, d3Service, _svc) {
        this.ngZone = ngZone;
        this._svc = _svc;
        /*Model */
        this.title = 'Sample Dialog';
        this.buttonLabel = 'Launch PopUp';
        this.cancelButtonLabel = 'Cancel';
        this.actionButtonLabel = 'Save';
        this.data = { 'name': 'Sample Dialog' };
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    /*Model */
    DemoD3ChartsComponent.prototype.confirm = function (e) {
        alert('closed' + JSON.stringify(e));
    };
    /*Model End */
    DemoD3ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._svc.getChartData().subscribe(function (res) {
            _this.drawChart(res);
        });
    };
    DemoD3ChartsComponent.prototype.drawChart = function (chartData) {
        var self = this;
        var d3 = this.d3;
        var svg;
        var colors = [];
        var padding = 25;
        var width = 500;
        var height = 150;
        var xScale;
        var yScale;
        var xAxis;
        var yAxis;
        var data = chartData;
        if (this.parentNativeElement !== null) {
            svg = d3.select(this.parentNativeElement)
                .append('svg') // create an <svg> element
                .attr('width', width) // set its dimensions
                .attr('height', height);
            colors = ['red', 'yellow', 'green', 'blue'];
            xScale = d3.scaleBand()
                .domain(data.map(function (d) {
                return d.name;
            }))
                .range([0, 200]);
            yScale = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) {
                    return d.yVal;
                })])
                .range([100, 0]);
            xAxis = d3.axisBottom(xScale) // d3.js v.4
                .ticks(5)
                .scale(xScale);
            yAxis = d3.axisLeft(xScale) // d3.js v.4
                .scale(yScale)
                .ticks(7);
            svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(' + (padding) + ',' + padding + ')')
                .call(yAxis);
            svg.append('g') // create a <g> element
                .attr('class', 'axis') // specify classes
                .attr('transform', 'translate(' + padding + ',' + (height - padding) + ')')
                .call(xAxis); // let the axis do its thing
            var rects = svg.selectAll('rect')
                .data(data);
            rects.size();
            var newRects = rects.enter();
            newRects.append('rect')
                .attr('x', function (d, i) {
                return xScale(d.name);
            })
                .attr('y', function (d) {
                return yScale(d.yVal);
            })
                .attr('transform', 'translate(' + (padding - 5 + 25) + ',' + (padding - 5) + ')')
                .attr('height', function (d) {
                return height - yScale(d.yVal) - (2 * padding) + 5;
            })
                .attr('width', 10)
                .attr('fill', function (d, i) {
                return colors[i];
            });
        }
    };
    DemoD3ChartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-demo-d3-charts',
            template: __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_service__["a" /* DemoD3ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_service__["a" /* DemoD3ChartsService */]) === "function" && _d || Object])
    ], DemoD3ChartsComponent);
    return DemoD3ChartsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=demo-d3-charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_routing_module__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_d3_charts_component__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_d3_charts_service__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/demo-d3-charts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoD3ChartsModule", function() { return DemoD3ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoD3ChartsModule = /** @class */ (function () {
    function DemoD3ChartsModule() {
    }
    DemoD3ChartsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__demo_d3_charts_routing_module__["a" /* DemoD3ChartsRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__demo_d3_charts_service__["a" /* DemoD3ChartsService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__demo_d3_charts_component__["a" /* DemoD3ChartsComponent */], __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], DemoD3ChartsModule);
    return DemoD3ChartsModule;
}());

//# sourceMappingURL=demo-d3-charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/demo-d3-charts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoD3ChartsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoD3ChartsService = /** @class */ (function () {
    function DemoD3ChartsService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api + "/chart-data/data.json";
    }
    DemoD3ChartsService.prototype.getChartData = function () {
        return this._httpClient.get(this.url);
    };
    DemoD3ChartsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DemoD3ChartsService);
    return DemoD3ChartsService;
    var _a;
}());

//# sourceMappingURL=demo-d3-charts.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'spia-dialog',
            template: __webpack_require__("../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/demo-d3-charts/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());

//# sourceMappingURL=dialog.component.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map