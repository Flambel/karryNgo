(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"], {
    /***/
    "./src/app/layout/blank-page/blank-page-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: BlankPageRoutingModule */

    /***/
    function srcAppLayoutBlankPageBlankPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function () {
        return BlankPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blank-page.component */
      "./src/app/layout/blank-page/blank-page.component.ts");

      var routes = [{
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_2__["BlankPageComponent"]
      }];

      var BlankPageRoutingModule = function BlankPageRoutingModule() {
        _classCallCheck(this, BlankPageRoutingModule);
      };

      BlankPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BlankPageRoutingModule
      });
      BlankPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BlankPageRoutingModule_Factory(t) {
          return new (t || BlankPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/blank-page/blank-page.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
      \***********************************************************/

    /*! exports provided: BlankPageComponent */

    /***/
    function srcAppLayoutBlankPageBlankPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function () {
        return BlankPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var BlankPageComponent = /*#__PURE__*/function () {
        function BlankPageComponent() {
          _classCallCheck(this, BlankPageComponent);
        }

        _createClass(BlankPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankPageComponent;
      }();

      BlankPageComponent.ɵfac = function BlankPageComponent_Factory(t) {
        return new (t || BlankPageComponent)();
      };

      BlankPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankPageComponent,
        selectors: [["app-blank-page"]],
        decls: 0,
        vars: 0,
        template: function BlankPageComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay1wYWdlL2JsYW5rLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank-page',
            templateUrl: './blank-page.component.html',
            styleUrls: ['./blank-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/blank-page/blank-page.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
      \********************************************************/

    /*! exports provided: BlankPageModule */

    /***/
    function srcAppLayoutBlankPageBlankPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageModule", function () {
        return BlankPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blank-page-routing.module */
      "./src/app/layout/blank-page/blank-page-routing.module.ts");
      /* harmony import */


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blank-page.component */
      "./src/app/layout/blank-page/blank-page.component.ts");

      var BlankPageModule = function BlankPageModule() {
        _classCallCheck(this, BlankPageModule);
      };

      BlankPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BlankPageModule
      });
      BlankPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BlankPageModule_Factory(t) {
          return new (t || BlankPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankPageModule, {
          declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"]],
            declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=blank-page-blank-page-module-es5.js.map