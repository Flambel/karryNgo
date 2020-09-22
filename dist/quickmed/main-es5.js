(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/_components/button/button.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/_components/button/button.component.ts ***!
      \********************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function srcApp_componentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5) {
        return {
          "background": a0,
          "color": a1,
          "font-size": a2,
          "padding": a3,
          "border-radius": a4,
          "float": a5
        };
      };

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.data);
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          data: "data"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 3,
        vars: 9,
        consts: [["href", "javascript:void(0);", 1, "text-center", "site-button", 3, "ngStyle", "click"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_a_click_0_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c0, ctx.data.bgcol, ctx.data.col, ctx.data.fSise, ctx.data.padding, ctx.data.bRadius, ctx.data["float"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-button',
            templateUrl: './button.component.html',
            styleUrls: ['./button.component.scss']
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/category-services/category-services.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/_components/category-services/category-services.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CategoryServicesComponent */

    /***/
    function srcApp_componentsCategoryServicesCategoryServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryServicesComponent", function () {
        return CategoryServicesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function CategoryServicesComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      function CategoryServicesComponent_div_2_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", val_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CategoryServicesComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryServicesComponent_div_2_div_1_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryServicesComponent_div_2_div_1_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var val_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.clickOnThis.emit(val_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", val_r3.logo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r3.categoryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", val_r3.description, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.txtBtn);
        }
      }

      function CategoryServicesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryServicesComponent_div_2_div_1_Template, 11, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.services_categ);
        }
      }

      var CategoryServicesComponent = /*#__PURE__*/function () {
        function CategoryServicesComponent() {
          _classCallCheck(this, CategoryServicesComponent);

          this.clickOnThis = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CategoryServicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.services_categ);
          }
        }]);

        return CategoryServicesComponent;
      }();

      CategoryServicesComponent.ɵfac = function CategoryServicesComponent_Factory(t) {
        return new (t || CategoryServicesComponent)();
      };

      CategoryServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryServicesComponent,
        selectors: [["app-category-services"]],
        inputs: {
          services_categ: "services_categ",
          title: "title",
          txtBtn: "txtBtn"
        },
        outputs: {
          clickOnThis: "clickOnThis"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "container"], ["class", "section-head  text-black", "style", "margin-top: 45px; margin-bottom: 30px; color: green", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "section-head", "text-black", 2, "margin-top", "45px", "margin-bottom", "30px", "color", "green"], [1, "row"], ["class", "col-md-3 col-sm-6 p-2", "style", "padding: 10px;", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6", "p-2", 2, "padding", "10px"], [1, "card", 2, "border", "1px solid rgb(223, 223, 223)", "border-radius", "10px"], ["class", "image-upload px-md-5 pt-3", 4, "ngIf"], [1, "card-body"], [1, "card-title", 2, "text-align", "center"], [1, "card-text"], [2, "text-align", "center"], [1, "btn", "btn-primary", 3, "click"], [1, "image-upload", "px-md-5", "pt-3"], ["alt", "Card image cap", 1, "card-img-top", "aa", 3, "src"]],
        template: function CategoryServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryServicesComponent_div_1_Template, 4, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryServicesComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.services_categ);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2NhdGVnb3J5LXNlcnZpY2VzL2NhdGVnb3J5LXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryServicesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-category-services',
            templateUrl: './category-services.component.html',
            styleUrls: ['./category-services.component.scss']
          }]
        }], function () {
          return [];
        }, {
          services_categ: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          txtBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickOnThis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/components.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/_components/components.module.ts ***!
      \**************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcApp_componentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form/form.component */
      "./src/app/_components/form/form.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./button/button.component */
      "./src/app/_components/button/button.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/_components/modal/modal.component.ts");
      /* harmony import */


      var _category_services_category_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-services/category-services.component */
      "./src/app/_components/category-services/category-services.component.ts");
      /* harmony import */


      var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service-list/service-list.component */
      "./src/app/_components/service-list/service-list.component.ts");
      /* harmony import */


      var _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./view-service/view-service.component */
      "./src/app/_components/view-service/view-service.component.ts");
      /* harmony import */


      var _view_bids_view_bids_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./view-bids/view-bids.component */
      "./src/app/_components/view-bids/view-bids.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-pagination */
      "./node_modules/ngx-pagination/dist/ngx-pagination.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/_components/header/header.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/_components/footer/footer.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _category_services_category_services_component__WEBPACK_IMPORTED_MODULE_6__["CategoryServicesComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_7__["ServiceListComponent"], _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_8__["ViewServiceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _view_bids_view_bids_component__WEBPACK_IMPORTED_MODULE_9__["ViewBidsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]],
          exports: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _category_services_category_services_component__WEBPACK_IMPORTED_MODULE_6__["CategoryServicesComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_7__["ServiceListComponent"], _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_8__["ViewServiceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _category_services_category_services_component__WEBPACK_IMPORTED_MODULE_6__["CategoryServicesComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_7__["ServiceListComponent"], _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_8__["ViewServiceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _view_bids_view_bids_component__WEBPACK_IMPORTED_MODULE_9__["ViewBidsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]],
            exports: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _category_services_category_services_component__WEBPACK_IMPORTED_MODULE_6__["CategoryServicesComponent"], _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_7__["ServiceListComponent"], _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_8__["ViewServiceComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/_components/footer/footer.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/_components/footer/footer.component.ts ***!
      \********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcApp_componentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 107,
        vars: 2,
        consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-lg-4", "footer_col"], [1, "footer_about"], [1, "logo_container", "footer_logo"], [1, "logo"], [1, "row", 2, "padding", "0px 0px"], [2, "margin-left", "auto", "margin-right", "auto", 3, "routerLink"], ["src", "assets/home_images//karryNgologo.png", "width", "171", "height", "49", "alt", ""], [2, "font-size", "12px"], [1, "fa", "fa-home", "fa-2x", "text-white", 2, "color", "rgb(253, 204, 9)!important"], [2, "color", "white"], [1, "fa", "fa-mobile", "fa-3x", "text-white", 2, "color", "rgb(253, 204, 9)!important"], [1, "fa", "fa-envelope", "fa-2x", "text-white", 2, "color", "rgb(253, 204, 9)!important"], [1, "col-lg-3", "footer_col"], [1, "footer_links"], [1, "footer_title"], ["href", "#"], [1, "col-lg-2", "footer_col"], [1, "footer_newsletter"], [1, "footer_social"], ["target", "_blank", "href", "https://www.facebook.com"], [1, "fa", "fa-facebook"], ["target", "_blank", "href", "https://www.linkedin.com"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["target", "_blank", "href", "https://www.youtube.com"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["target", "_blank", "href", "https://www.twitter.com"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], [1, "footer-bottom", "overlay-wraper"], [1, "overlay-main"], [1, "container", "p-t30"], [2, "border-bottom", "3px gray solid"], [1, "col-md-9", "copyrights-text", 2, "color", "#ffa800", "text-align", "left"], ["id", "end_footer"], [1, "counter", 2, "font-size", "10px"], [2, "font-size", "10px"], [1, "", 2, "font-size", "10px"], [1, "col-md-3", "copyrights-text", 2, "text-align", "right", "color", "white", "font-size", "10px"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 97A, 2nd Avenue, Fontainebleau Randburg, South-Africa; 2194");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " +27 730 115 992");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " contact@karryngo.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "ABOUT US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "HOW IT WORKS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SECURITY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SITEMAP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "QUOTES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "SITEMAP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PRIVACY POLICY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "TERMS & CONDITIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "COPYRIGHT POLICY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CODE OF CONDUCT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "FEES AND CHARGES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ol", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "30,720,277");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " REGISTERED USERS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "| ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " 21,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " SHIPPERS/CARRIERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "| ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Copyright \xA9 2020 karryNgo All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Designed & Developed by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "SDK Games Africa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".fa-facebook[_ngcontent-%COMP%], .fa-twitter[_ngcontent-%COMP%], .fa-instagram[_ngcontent-%COMP%], .fa-linkedin[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: white;\n  margin: 5px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #c2cbd7;\n  transition: all 200ms ease;\n  margin-left: 10px;\n  margin-right: 10px;\n  list-style-type: none;\n  display: inline;\n  color: white;\n}\n\n.fa1[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 14px;\n  left: 0px;\n}\n\n.fa1[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.converter_background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.footer[_ngcontent-%COMP%] {\n  color: #242121 !important;\n  width: 100%;\n  overflow: hidden;\n  padding-top: 20px;\n  background: #242121;\n}\n\n.footer_logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  left: 0px;\n}\n\n.footer_about_text[_ngcontent-%COMP%] {\n  color: #c2cbd7;\n  line-height: 2.14;\n  padding-top: 86px;\n}\n\n.footer_about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n.footer_title[_ngcontent-%COMP%] {\n  font-family: \"gill\", sans-serif;\n  font-size: 24px;\n  color: #FFFFFF;\n}\n\n.footer_links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  margin-top: 53px;\n}\n\n.footer_links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n\n.footer_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #c2cbd7;\n  transition: all 200ms ease;\n  margin-left: 10px;\n  margin-right: 10px;\n  list-style-type: none;\n  display: inline;\n  color: white;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.footer_links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffa800;\n}\n\n.footer_newsletter_form[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin-top: 54px;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47px;\n  background: transparent;\n  border: solid 2px rgba(224, 227, 228, 0.17);\n  padding-left: 26px;\n  outline: none;\n  color: #ffa800;\n  transition: all 200ms ease;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]:focus {\n  border: solid 2px rgba(224, 227, 228, 0.34);\n}\n\n.footer_newsletter_button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 127px;\n  height: 47px;\n  background: #ffa800;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 11px !important;\n  font-style: italic;\n  color: #c2cbd7 !important;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]:-moz-placeholder {\n  font-size: 11px !important;\n  font-style: italic;\n  color: #c2cbd7 !important;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 11px !important;\n  font-style: italic;\n  color: #c2cbd7 !important;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 11px !important;\n  font-style: italic;\n  color: #c2cbd7 !important;\n}\n\n.footer_newsletter_input[_ngcontent-%COMP%]::input-placeholder {\n  font-size: 11px !important;\n  font-style: italic;\n  color: #c2cbd7 !important;\n}\n\n.footer_social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ffa800;\n  font-size: 20px;\n  padding: 3px;\n  transition: all 200ms ease;\n}\n\n.footer_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.header_social[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  margin-left: 29px;\n}\n\n.header_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: solid 1px #d6d6d6;\n  box-shadow: 0 0 1px 0px #d6d6d6 inset, 0 0 1px 0px #d6d6d6;\n  transition: all 200ms ease;\n  margin-right: 7px;\n}\n\n.header_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.header_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.header_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 11px;\n  color: #d6d6d6;\n  transition: all 200ms ease;\n}\n\n.header_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffa800;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 110px;\n  background: #0d1016;\n}\n\n.copyright_content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n}\n\n.footer_nav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  text-align: right;\n}\n\n.footer_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 23px;\n}\n\n.footer_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.footer_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"gill\", sans-serif;\n  font-size: 13px;\n  color: #697686;\n  transition: all 200ms ease;\n}\n\n.footer_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffa800;\n}\n\n.cr[_ngcontent-%COMP%] {\n  font-family: \"gill\", sans-serif;\n  font-size: 13px;\n  color: #697686;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7OztFQUlJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBSUE7RUFFQyxlQUFBO0VBQ0EsY0FBQTtFQUtBLDBCQUFBO0VBQ0csaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUVDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNHLDhCQUFBO0FBQUo7O0FBR0E7RUFFSSx5QkFBQTtFQUNILFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFHQTtFQUVDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFERDs7QUFHQTtFQUVDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREQ7O0FBR0E7RUFFQyxnQkFBQTtBQUREOztBQUdBO0VBRUMsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUREOztBQUdBO0VBRUMsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREQ7O0FBR0E7RUFFQyxrQkFBQTtBQUREOztBQUdBO0VBRUMsZUFBQTtFQUNBLGNBQUE7RUFLQSwwQkFBQTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBR0E7RUFFSSxxQkFBQTtBQURKOztBQUdBO0VBRUMsY0FBQTtBQUREOztBQUdBO0VBRUMsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERDs7QUFHQTtFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFLQSwwQkFBQTtBQUREOztBQUdBO0VBRUMsMkNBQUE7QUFERDs7QUFHQTtFQUVDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREQ7O0FBR0E7RUFFQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFERDs7QUFHQTtFQUVDLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUREOztBQUdBO0VBRUMsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREQ7O0FBR0E7RUFFQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFERDs7QUFHQTtFQUVDLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUREOztBQUdBO0VBRUMscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFLQSwwQkFBQTtBQUREOztBQUdBO0VBRUMsWUFBQTtBQUREOztBQUlBO0VBTUMsMEJBQUE7RUFDQSxpQkFBQTtBQUZEOztBQUlBO0VBRUMscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwREFBQTtFQUtBLDBCQUFBO0VBQ0EsaUJBQUE7QUFGRDs7QUFJQTtFQUVDLGVBQUE7QUFGRDs7QUFJQTtFQUVDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkQ7O0FBSUE7RUFFQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBS0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUtBLDBCQUFBO0FBRkQ7O0FBSUE7RUFFQyxjQUFBO0FBRkQ7O0FBS0E7RUFFQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhEOztBQUtBO0VBRUMsV0FBQTtFQUNBLFlBQUE7QUFIRDs7QUFLQTtFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFIRDs7QUFLQTtFQUVDLHFCQUFBO0VBQ0Esa0JBQUE7QUFIRDs7QUFLQTtFQUVDLGVBQUE7QUFIRDs7QUFLQTtFQUVDLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFLQSwwQkFBQTtBQUhEOztBQUtBO0VBRUMsY0FBQTtBQUhEOztBQUtBO0VBRUMsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhEIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNoYXJlZCBjc3MgZm9yIHRoZSBsb2dpbiBhbmQgc2lnbnVwIHBhZ2VcclxuLmZhLWZhY2Vib29rLCBcclxuLmZhLXR3aXR0ZXIsIFxyXG4uZmEtaW5zdGFncmFtLCBcclxuLmZhLWxpbmtlZGluIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4XHJcbn1cclxuXHJcbi50ZXJtc3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxub2wgbGlcclxue1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogI2MyY2JkNztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHRcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmExIC50ZXJtc3tcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4uZmExIC5mYXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY29udmVydGVyX2JhY2tncm91bmRcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5mb290ZXJcclxue1xyXG4gICAgY29sb3I6ICMyNDIxMjEgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICMyNDIxMjE7XHJcbn1cclxuLmZvb3Rlcl9sb2dvXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMThweDtcclxuXHRsZWZ0OiAwcHg7XHJcbn1cclxuLmZvb3Rlcl9hYm91dF90ZXh0XHJcbntcclxuXHRjb2xvcjogI2MyY2JkNztcclxuXHRsaW5lLWhlaWdodDogMi4xNDtcclxuXHRwYWRkaW5nLXRvcDogODZweDtcclxufVxyXG4uZm9vdGVyX2Fib3V0IHA6bGFzdC1vZi10eXBlXHJcbntcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXJfdGl0bGVcclxue1xyXG5cdGZvbnQtZmFtaWx5OiAnZ2lsbCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5mb290ZXJfbGlua3MgdWxcclxue1xyXG5cdGNvbHVtbnM6IDI7XHJcblx0LXdlYmtpdC1jb2x1bW5zOiAyO1xyXG5cdC1tb3otY29sdW1uczogMjtcclxuXHRtYXJnaW4tdG9wOiA1M3B4O1xyXG59XHJcbi5mb290ZXJfbGlua3MgdWwgbGlcclxue1xyXG5cdG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uZm9vdGVyX2xpbmtzIGEgaVxyXG57XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiAjYzJjYmQ3O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcdFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmxpe1xyXG4gICAgXHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmZvb3Rlcl9saW5rcyB1bCBsaSBhOmhvdmVyXHJcbntcclxuXHRjb2xvcjogI2ZmYTgwMDtcclxufVxyXG4uZm9vdGVyX25ld3NsZXR0ZXJfZm9ybVxyXG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi10b3A6IDU0cHg7XHJcbn1cclxuLmZvb3Rlcl9uZXdzbGV0dGVyX2lucHV0XHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDQ3cHg7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggcmdiYSgyMjQsIDIyNywgMjI4LCAwLjE3KTtcclxuXHRwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjb2xvcjogI2ZmYTgwMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG59XHJcbi5mb290ZXJfbmV3c2xldHRlcl9pbnB1dDpmb2N1c1xyXG57XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggcmdiYSgyMjQsIDIyNywgMjI4LCAwLjM0KTtcclxufVxyXG4uZm9vdGVyX25ld3NsZXR0ZXJfYnV0dG9uXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHdpZHRoOiAxMjdweDtcclxuXHRoZWlnaHQ6IDQ3cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmYTgwMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9vdGVyX25ld3NsZXR0ZXJfaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRjb2xvcjogI2MyY2JkNyAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXJfbmV3c2xldHRlcl9pbnB1dDotbW96LXBsYWNlaG9sZGVyXHJcbntcclxuXHRmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Y29sb3I6ICNjMmNiZDcgIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyX25ld3NsZXR0ZXJfaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJcclxue1xyXG5cdGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRjb2xvcjogI2MyY2JkNyAhaW1wb3J0YW50O1xyXG59IFxyXG4uZm9vdGVyX25ld3NsZXR0ZXJfaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyXHJcbnsgXHJcblx0Zm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjYzJjYmQ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3Rlcl9uZXdzbGV0dGVyX2lucHV0OjppbnB1dC1wbGFjZWhvbGRlclxyXG57XHJcblx0Zm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjYzJjYmQ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3Rlcl9zb2NpYWwgYSBpXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Y29sb3I6ICNmZmE4MDA7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDNweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG59XHJcbi5mb290ZXJfc29jaWFsIHVsIGxpOmhvdmVyIGEgaVxyXG57XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyX3NvY2lhbFxyXG57XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuXHRtYXJnaW4tbGVmdDogMjlweDtcclxufVxyXG4uaGVhZGVyX3NvY2lhbCB1bCBsaVxyXG57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMjRweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2Q2ZDZkNjtcclxuXHRib3gtc2hhZG93OiAwIDAgMXB4IDBweCAjZDZkNmQ2IGluc2V0LCAwIDAgMXB4IDBweCAjZDZkNmQ2O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuLmhlYWRlcl9zb2NpYWwgdWwgbGk6bGFzdC1jaGlsZFxyXG57XHJcblx0bWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5oZWFkZXJfc29jaWFsIHVsIGxpIGFcclxue1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlcl9zb2NpYWwgdWwgbGkgYSBpXHJcbntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdGNvbG9yOiAjZDZkNmQ2O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuLmhlYWRlcl9zb2NpYWwgdWwgbGk6aG92ZXIgYSBpXHJcbntcclxuXHRjb2xvcjogI2ZmYTgwMDtcclxufVxyXG5cclxuLmNvcHlyaWdodFxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXRvcDogMTEwcHg7XHJcblx0YmFja2dyb3VuZDogIzBkMTAxNjtcclxufVxyXG4uY29weXJpZ2h0X2NvbnRlbnRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNzBweDtcclxufVxyXG4uZm9vdGVyX25hdlxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5mb290ZXJfbmF2IHVsIGxpXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG59XHJcbi5mb290ZXJfbmF2IHVsIGxpOmxhc3QtY2hpbGRcclxue1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uZm9vdGVyX25hdiB1bCBsaSBhXHJcbntcclxuXHRmb250LWZhbWlseTogJ2dpbGwnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRjb2xvcjogIzY5NzY4NjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcblx0LW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG59XHJcbi5mb290ZXJfbmF2IHVsIGxpIGE6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjZmZhODAwO1xyXG59XHJcbi5jclxyXG57XHJcblx0Zm9udC1mYW1pbHk6ICdnaWxsJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0Y29sb3I6ICM2OTc2ODY7XHJcblxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_components/form/form.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/_components/form/form.component.ts ***!
      \****************************************************/

    /*! exports provided: FormComponent */

    /***/
    function srcApp_componentsFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
        return FormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function FormComponent_div_4_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dataForm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dataForm_r1.controlName, " is not valid");
        }
      }

      function FormComponent_div_4_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_4_div_5_div_1_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dataForm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f[dataForm_r1.controlName].errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function FormComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormComponent_div_4_div_5_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dataForm_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", dataForm_r1.dim);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", dataForm_r1.controlName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataForm_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", dataForm_r1.type)("id", dataForm_r1.controlName)("formControlName", dataForm_r1.controlName)("placeholder", dataForm_r1.label)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.f[dataForm_r1.controlName].errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f[dataForm_r1.controlName].errors);
        }
      }

      var FormComponent = /*#__PURE__*/function () {
        function FormComponent() {
          _classCallCheck(this, FormComponent);

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.navigateTo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.submitted = false;
          this.value = "eeeeeeeeeeee";
          this.aa = [];
        }

        _createClass(FormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var control = {};

            for (var i = 0; i < this.data.length; i++) {
              control[this.data[i].controlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data[i].value);
            }

            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](control);
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm() {
            this.submitted = true;

            if (this.userForm.invalid) {
              return;
            }

            this.onClick.emit(this.userForm.value);
          }
        }, {
          key: "f",
          get: function get() {
            return this.userForm.controls;
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)();
      };

      FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["app-form"]],
        inputs: {
          data: "data",
          source: "source"
        },
        outputs: {
          onClick: "onClick",
          navigateTo: "navigateTo"
        },
        decls: 12,
        vars: 5,
        consts: [[1, "row", "p-1"], [1, "col-md-12"], [1, "mx-auto", 3, "formGroup", "ngSubmit"], [1, "form-group", "row", "mx-2"], ["class", "mb-4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "form-group", "row", "px-auto"], ["type", "submit", 1, "btn", "btn-primary", "my-2", "mx-auto"], ["href", "javascript:void(0);", 3, "click"], [1, "mb-4", 3, "ngClass"], [3, "for"], [1, "form-control", 3, "type", "id", "formControlName", "placeholder", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormComponent_div_4_Template, 6, 11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_a_click_10_listener() {
              return ctx.navigateTo.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.source.btnText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.source.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.source.link, " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.scss']
          }]
        }], function () {
          return [];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          navigateTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/header/header.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/_components/header/header.component.ts ***!
      \********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcApp_componentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      function HeaderComponent_form_23_div_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentUser.username);
        }
      }

      var _c0 = function _c0() {
        return ["/access/profile"];
      };

      var _c1 = function _c1() {
        return ["/access/ask-help"];
      };

      var _c2 = function _c2() {
        return ["/access/services-accepted-or-awarded/my-accepted-services"];
      };

      var _c3 = function _c3() {
        return ["/access/services-accepted-or-awarded/my-awarded-services"];
      };

      var _c4 = function _c4() {
        return ["/access/services-completed-by-a-user/my-completed-services"];
      };

      var _c5 = function _c5() {
        return ["/access/my-help-requests"];
      };

      function HeaderComponent_form_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_form_23_div_1_a_4_Template, 2, 1, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Accepted Aervices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Awarded Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Completed Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Helps Requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.currentUser.picture ? ctx_r1.currentUser.picture : "assets/profile-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("fragment", "userprofile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("fragment", "deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["/access/notifications"];
      };

      function HeaderComponent_form_23_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c6));
        }
      }

      var _c7 = function _c7() {
        return ["/login"];
      };

      function HeaderComponent_form_23_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c7));
        }
      }

      var _c8 = function _c8() {
        return ["/register"];
      };

      function HeaderComponent_form_23_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c8));
        }
      }

      function HeaderComponent_form_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_form_23_div_1_Template, 26, 16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_form_23_li_3_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_form_23_li_4_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_form_23_li_5_Template, 3, 2, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Are you sure you want to log out ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_form_23_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "descard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser);
        }
      }

      var _c9 = function _c9() {
        return ["/home"];
      };

      var _c10 = function _c10() {
        return ["active"];
      };

      var _c11 = function _c11() {
        return ["/access/service-categories"];
      };

      var _c12 = function _c12() {
        return ["/access/bank-of-services"];
      };

      var _c13 = function _c13() {
        return ["/read-more-about-us"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authen) {
          _classCallCheck(this, HeaderComponent);

          this.authen = authen;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log("aaa : ", this.currentUser);
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.authen.logout();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 24,
        vars: 19,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "px-5", 2, "padding-top", "15px", "padding-bottom", "15px", "border-bottom", "4px white solid"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/home_images/karryNgologo.png", "alt", "", 1, "img-fluid", "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "text-black", 2, "color", "black"], [1, "fa", "fa-reorder"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "text-align", "center", "width", "100%"], ["id", "liNav", 1, "navbar-nav", 2, "margin-left", "auto", "margin-right", "auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], ["class", "form-inline", 4, "ngIf"], [1, "form-inline"], ["class", "dropdown", 4, "ngIf"], ["id", "liAuth"], ["class", "mr-4", 4, "ngIf"], [4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "mySmallModalLabel", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-sm"], [1, "modal-dialog", "modal-sm"], [1, "modal-content", "p-3"], [1, "row", "pb-4"], [1, "col-md-12"], [1, "row"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 2, "float", "left", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "float", "right"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn"], ["alt", "", 1, "img-fluid", 2, "height", "40px", "width", "40px", "border-radius", "50%", 3, "src"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "javascript:void(0)", 4, "ngIf"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink", "fragment"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "routerLink"], ["href", "javascript:void(0)", "data-toggle", "modal", "data-target", ".bd-example-modal-sm", 1, "dropdown-item", 2, "color", "#fac62a"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "mr-4"], ["href", "javascript:void(0)", 3, "routerLink"], ["src", "assets/header/notification.png", "alt", ""], ["href", "javascript:void(0)", 2, "color", "#fac62a", 3, "routerLink"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TRIPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "REQUESTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "HOW DOES IT WORK ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_form_23_Template, 19, 4, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c9))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c11))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c12))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c13))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #242121;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n#liNav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n#liAuth[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline;\n  font-size: 17px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDRyx5QkFBQTtBQWhCSDs7QUFrQkE7RUFDRyxxQkFBQTtFQUNBLFlBQUE7QUFmSDs7QUFpQkE7RUFDRyxrQkFBQTtBQWRIOztBQWdCQTtFQUVHLDhCQUFBO0FBZEg7O0FBZ0JBO0VBQ0ksZUFBQTtBQWJKOztBQWdCQTtFQUNHLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFiSDs7QUFnQkE7RUFDRyxlQUFBO0FBYkgiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggZ3JheTtcclxuLy8gfVxyXG4vLyAgbGl7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbi8vICB9XHJcbi8vICAuYWN0aXZle1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YjQxNjtcclxuICAgIFxyXG4vLyAgfVxyXG5cclxuLm5hdmJhcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjEyMTtcclxufVxyXG5he1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jbGlOYXYgbGl7XHJcbiAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAvLyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiNsaUF1dGggbGksIGltZ3tcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG4gICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_components/modal/modal.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/_components/modal/modal.component.ts ***!
      \******************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function srcApp_componentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function ModalComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_11_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var val_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.goToAsk.emit(val_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ask a service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r1.souscategoryName, " ");
        }
      }

      var ModalComponent = function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goToAsk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = this.subcats_data;
        console.log(this.title);
      };

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)();
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          subcats_data: "subcats_data"
        },
        outputs: {
          passEntry: "passEntry",
          goToAsk: "goToAsk"
        },
        decls: 15,
        vars: 2,
        consts: [["data-size", "modal-lg", "id", "exampleModalLong", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", "data-size", "modal-lg", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], ["class", "col-md-4", "style", "padding: 10px", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "col-md-4", 2, "padding", "10px"], [2, "background", "rgb(227, 231, 233)", "padding", "25px"], ["data-dismiss", "modal", "type", "button", 1, "bg-blue", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalComponent_div_11_Template, 7, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subcats_data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html'
          }]
        }], function () {
          return [];
        }, {
          subcats_data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          goToAsk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/service-list/service-list.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/_components/service-list/service-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: ServiceListComponent */

    /***/
    function srcApp_componentsServiceListServiceListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function () {
        return ServiceListComponent;
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


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-pagination */
      "./node_modules/ngx-pagination/dist/ngx-pagination.js");

      function ServiceListComponent_div_2_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
        }

        if (rf & 2) {
          var service_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", service_r1.picture[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ServiceListComponent_div_2_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var service_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", service_r1.address_service.city, ", ", service_r1.address_service.address, " ");
        }
      }

      function ServiceListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceListComponent_div_2_img_3_Template, 1, 1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ServiceListComponent_div_2_div_24_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceListComponent_div_2_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var service_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.selectService.emit({
              "service_name": service_r1.service_name,
              "service_id": service_r1._id
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var service_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r1.picture);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.service_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r1.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r1.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r1.number_bids, " Bids ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, service_r1.preferred_date_service), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getTime(service_r1.preferred_date_service), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r1.address_service);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r1.price, " ZAR");
        }
      }

      var _c0 = function _c0(a1) {
        return {
          itemsPerPage: 10,
          currentPage: a1
        };
      };

      var ServiceListComponent = /*#__PURE__*/function () {
        function ServiceListComponent(datePipe) {
          _classCallCheck(this, ServiceListComponent);

          this.datePipe = datePipe;
          this.selectService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // @Output() getCategoryName: EventEmitter<any> = new EventEmitter();

          this.p = 1;
        }

        _createClass(ServiceListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getTime",
          value: function getTime(intl) {
            return this.datePipe.transform(intl, 'hh:mm a');
          }
        }]);

        return ServiceListComponent;
      }();

      ServiceListComponent.ɵfac = function ServiceListComponent_Factory(t) {
        return new (t || ServiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]));
      };

      ServiceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServiceListComponent,
        selectors: [["app-service-list"]],
        inputs: {
          services: "services"
        },
        outputs: {
          selectService: "selectService"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "row", 2, "background-color", "white"], [1, "col-md-12"], ["class", "col-md-12 p-2", "style", " border: 1px solid rgb(231, 230, 230);", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3"], [2, "float", "right", 3, "pageChange"], [1, "col-md-12", "p-2", 2, "border", "1px solid rgb(231, 230, 230)"], [1, "row"], [1, "col-sm-1"], ["style", "width: 100%;", "alt", "", 3, "src", 4, "ngIf"], [1, "col-sm-9"], [1, "row", 2, "font-size", "11px"], [1, "col-sm-4"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "fa", "fa-calendar"], [1, "fa", "fa-clock-o"], ["class", "col-sm-4", 4, "ngIf"], [1, "col-sm-2"], [1, "fa", "fa-money"], [1, "row", "d-flex", "flex-column"], ["type", "button", 1, "btn", "btn-primary", "p-1", 2, "font-size", "11px", "float", "bottom", 3, "click"], ["alt", "", 2, "width", "100%", 3, "src"], [1, "fa", "fa-map-marker"]],
        template: function ServiceListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServiceListComponent_div_2_Template, 32, 11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ServiceListComponent_Template_pagination_controls_pageChange_5_listener($event) {
              return ctx.p = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.services, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3NlcnZpY2UtbGlzdC9zZXJ2aWNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-service-list',
            templateUrl: './service-list.component.html',
            styleUrls: ['./service-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
          }];
        }, {
          services: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/view-bids/view-bids.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/_components/view-bids/view-bids.component.ts ***!
      \**************************************************************/

    /*! exports provided: ViewBidsComponent */

    /***/
    function srcApp_componentsViewBidsViewBidsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewBidsComponent", function () {
        return ViewBidsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ViewBidsComponent = /*#__PURE__*/function () {
        function ViewBidsComponent() {
          _classCallCheck(this, ViewBidsComponent);
        }

        _createClass(ViewBidsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ViewBidsComponent;
      }();

      ViewBidsComponent.ɵfac = function ViewBidsComponent_Factory(t) {
        return new (t || ViewBidsComponent)();
      };

      ViewBidsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewBidsComponent,
        selectors: [["app-view-bids"]],
        decls: 2,
        vars: 0,
        template: function ViewBidsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-bids works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3ZpZXctYmlkcy92aWV3LWJpZHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewBidsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-bids',
            templateUrl: './view-bids.component.html',
            styleUrls: ['./view-bids.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_components/view-service/view-service.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/_components/view-service/view-service.component.ts ***!
      \********************************************************************/

    /*! exports provided: ViewServiceComponent */

    /***/
    function srcApp_componentsViewServiceViewServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewServiceComponent", function () {
        return ViewServiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function ViewServiceComponent_img_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.service_details.picture[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ViewServiceComponent_div_20_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pic_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pic_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ViewServiceComponent_div_20_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewServiceComponent_div_20_div_4_div_2_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.service_details.picture);
        }
      }

      function ViewServiceComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewServiceComponent_div_20_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.showPicture();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewServiceComponent_div_20_div_4_Template, 3, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.pictureIsShowed ? "Hide pictures" : "See pictures", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pictureIsShowed);
        }
      }

      function ViewServiceComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.service_details.address_service.city, ", ", ctx_r2.service_details.address_service.address, " ");
        }
      }

      function ViewServiceComponent_div_33_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewServiceComponent_div_33_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.serviceButton.emit(ctx_r10.service_details);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.txtButton);
        }
      }

      function ViewServiceComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewServiceComponent_div_33_button_1_Template, 2, 1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.canEditBid);
        }
      }

      var ViewServiceComponent = /*#__PURE__*/function () {
        function ViewServiceComponent() {
          _classCallCheck(this, ViewServiceComponent);

          this.serviceButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.pictureIsShowed = false;
        }

        _createClass(ViewServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPicture",
          value: function showPicture() {
            this.pictureIsShowed = !this.pictureIsShowed;
          }
        }]);

        return ViewServiceComponent;
      }();

      ViewServiceComponent.ɵfac = function ViewServiceComponent_Factory(t) {
        return new (t || ViewServiceComponent)();
      };

      ViewServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewServiceComponent,
        selectors: [["app-view-service"]],
        inputs: {
          service_details: "service_details",
          txtButton: "txtButton",
          currentUser: "currentUser",
          canEditService: "canEditService",
          canEditBid: "canEditBid"
        },
        outputs: {
          serviceButton: "serviceButton"
        },
        decls: 34,
        vars: 15,
        consts: [[1, "row", 2, "background-color", "white"], [1, "col-md-12", "py-1", 2, "border-bottom", "1px solid rgb(231, 230, 230)"], [2, "text-align", "right", "float", "right"], [1, "col-md-12", "p-2", 2, "border-bottom", "1px solid rgb(231, 230, 230)"], [1, "row", "pt-3"], [1, "col-sm-2"], ["style", "width: 100%;", "alt", "", 3, "src", 4, "ngIf"], [1, "col-sm-10"], [2, "text-align", "justify"], ["class", "row", "style", "font-size: 10px;", 4, "ngIf"], [1, "row", 2, "font-size", "11px"], [1, "col-sm-4"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "fa", "fa-calendar"], ["class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-12", 4, "ngIf"], ["alt", "", 2, "width", "100%", 3, "src"], [1, "row", 2, "font-size", "10px"], ["href", "javascript:void(0);", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "row"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "fa", "fa-map-marker"], [1, "col-sm-12"], ["type", "button", "class", "btn btn-primary p-1", "style", "font-size: 11px; float: right;", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "p-1", 2, "font-size", "11px", "float", "right", 3, "click"]],
        template: function ViewServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Posted on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewServiceComponent_img_16_Template, 1, 1, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewServiceComponent_div_20_Template, 5, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ViewServiceComponent_div_32_Template, 3, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ViewServiceComponent_div_33_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service_details.service_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.service_details.price, " ZAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, ctx.service_details.preferred_date_service));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service_details.picture);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service_details.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service_details.picture);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service_details.status, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service_details.number_bids, " Bids ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, ctx.service_details.preferred_date_service), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service_details.address_service);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service_details.user_id != ctx.currentUser._id);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3ZpZXctc2VydmljZS92aWV3LXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewServiceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-service',
            templateUrl: './view-service.component.html',
            styleUrls: ['./view-service.component.scss']
          }]
        }], function () {
          return [];
        }, {
          service_details: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          txtButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          canEditService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          canEditBid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          serviceButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_services/authentication.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/_services/authentication.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user.service */
      "./src/app/_services/user.service.ts");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http, router, userService) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.router = router;
          this.userService = userService;
          this.url = 'http://localhost:8080';
        }

        _createClass(AuthenticationService, [{
          key: "register",
          value: function register(data) {
            var _this = this;

            this.http.post("".concat(this.url, "/api/user/new"), data).subscribe(function (res) {
              console.log(res['status']);

              if (res['status'] == "exists") {
                alert(res['message']);
                return;
              } else {
                alert('Account created. use the code we sent you by email to activate your account');

                _this.router.navigate(['/account-activation']);
              }
            }, function (err) {
              if (err.error.status == "exists") {
                alert(err.error.message);
                return;
              }

              console.log(err.error);
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "update",
          value: function update(data, user_id) {
            this.http.put("".concat(this.url, "/api/user/update/") + user_id, data).subscribe(function (res) {
              console.log(res);
              alert('profile successfully updated.' + 'Success');
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this2 = this;

            console.log(data);
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/login/check"), data).subscribe(function (res) {
              console.log(res);

              if (res['status'] != "success") {
                alert('Icorrect email or password');
              } else {
                console.log(res['user']._id);

                _this2.userService.getByLoginID(res['user']._id).subscribe(function (res) {
                  console.log(res);
                  console.log('data retreived successfully.', 'Success');
                  localStorage.setItem('currentUser', JSON.stringify(res['data']));
                  localStorage.setItem('isLoggedin', 'true');
                  console.log(localStorage.getItem('currentUser'));

                  _this2.router.navigate(["/home"]);
                }, function (err) {
                  console.log('Error occured:', err);
                  console.log(err.message, 'Error occured');
                });
              }
            }, function (err) {
              console.log('Error occured:', err);
              alert(err.error.message);
            });
          }
        }, {
          key: "changePass",
          value: function changePass(data) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/login/update"), data).subscribe(function (res) {
              console.log(res); // console.log(res['user']._id);
              // this.userService.getByUserID(res['user']._id)
              // .subscribe(
              //     res => {
              //         console.log(res);
              //         console.log('data retreived successfully.', 'Success');
              //         localStorage.setItem('currentUser', JSON.stringify(res['data']));
              //         localStorage.setItem('isLoggedin', 'true');
              //         console.log(localStorage.getItem('currentUser'));
              //         this.router.navigate(["/home"]);
              //     },
              //     err => {
              //         console.log('Error occured:' , err);
              //         console.log(err.message, 'Error occured');
              //     }
              // );
            }, function (err) {
              console.log('Error occured:', err);
              alert(err.error.message);
            });
          }
        }, {
          key: "activate",
          value: function activate(data) {
            var _this3 = this;

            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/login/activateAccount"), data).subscribe(function (res) {
              console.log(res);

              if (res['status'] == "activated") {
                alert(res['message']);
                var loginData = {
                  emailOrPhone: res['data'].email,
                  password: res['data'].password
                };

                _this3.login(loginData);
              } else {
                alert('User not found');
              } // console.log('Votre matière a été créer avec succès.', 'Success');

            }, function (err) {
              alert('User not found');
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "sendForgottenMail",
          value: function sendForgottenMail(email) {
            var _this4 = this;

            this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/login/sendForgottenMail/") + email).subscribe(function (res) {
              console.log(res);

              if (res['status'] == "success") {
                alert(res['message']);

                _this4.router.navigate(["/home"]);
              } else {
                alert(res['message']);
              }
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword(data) {
            var _this5 = this;

            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/login/recoverPassword"), data).subscribe(function (res) {
              console.log(res);

              if (res['status'] == "error") {
                alert("couldn't complete your request, please make sure the url is correct");
              }

              if (res['status'] == "reset") {
                alert(res['message']);

                _this5.router.navigate(["/login"]);
              }
            }, function (err) {
              alert("couldn't complete your request, please make sure the url is correct");
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isLoggedin');
            this.router.navigate(["/home"]);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/user.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, router) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.router = router;
        }

        _createClass(UserService, [{
          key: "getByUserID",
          value: function getByUserID(user_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/user/getById/") + user_id);
          }
        }, {
          key: "getByLoginID",
          value: function getByLoginID(login_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/user/getByLoginId/") + login_id);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/user/getAll"));
          } // update user skills

        }, {
          key: "updateSkills",
          value: function updateSkills(data, experience, user_id) {
            var _this6 = this;

            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/user/updateSkills/") + experience + "/" + user_id, data).subscribe(function (res) {
              console.log(res);
              alert(res['message']);

              _this6.router.navigate(['/access/profile']);
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "getById",
          value: function getById(val) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/getprofile/") + val);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/signup"), user);
          }
        }, {
          key: "registerForm",
          value: function registerForm(user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/signup"), user);
          }
        }, {
          key: "update",
          value: function update(user) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/editprofile/") + user._id, user);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/delete/") + id);
          }
        }, {
          key: "suspension",
          value: function suspension(id) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/suspension/"), {
              id: id
            });
          }
        }, {
          key: "unSuspension",
          value: function unSuspension(id) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/unSuspension/"), {
              id: id
            });
          }
        }, {
          key: "switchForm",
          value: function switchForm(user_id, experience, souscategories) {
            // return this.http.post(`${environment.apiUrl}/users/switchUser/`, {user_id: user_id, experience: experience, souscategories: souscategories});
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/switchUser"), {
              user_id: user_id,
              experience: experience,
              souscategories: souscategories
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                JSON.stringify(user); // localStorage.setItem('isLoggedin', 'true');
              }

              return user;
            }));
          }
        }, {
          key: "postFile",
          value: function postFile(fileToUpload) {
            var endpoint = 'your-destination-url';
            console.log(fileToUpload); // const formData: FormData = new FormData();
            // formData.append('fileKey', fileToUpload, fileToUpload.name);
            // return this.http
            //   .post(endpoint, formData, { headers: yourHeadersConfig })
            //   .map(() => { return true; })
            //   .catch((e) => this.handleError(e));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | landing-landing-module */
          [__webpack_require__.e("default~landing-landing-module~layout-layout-module"), __webpack_require__.e("common"), __webpack_require__.e("landing-landing-module")]).then(__webpack_require__.bind(null,
          /*! ./landing/landing.module */
          "./src/app/landing/landing.module.ts")).then(function (m) {
            return m.LandingModule;
          });
        }
      }, {
        path: 'access',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | access-access-module */
          [__webpack_require__.e("common"), __webpack_require__.e("access-access-module")]).then(__webpack_require__.bind(null,
          /*! ./access/access.module */
          "./src/app/access/access.module.ts")).then(function (m) {
            return m.AccessModule;
          });
        }
      }, {
        path: 'portal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-layout-module */
          [__webpack_require__.e("default~landing-landing-module~layout-layout-module"), __webpack_require__.e("layout-layout-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/layout.module */
          "./src/app/layout/layout.module.ts")).then(function (m) {
            return m.LayoutModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'quickmed';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_services/authentication.service */
      "./src/app/_services/authentication.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./_components/components.module */
      "./src/app/_components/components.module.ts"); // import { JwPaginationModule } from 'jw-angular-pagination';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:8080/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/flambel/Projects/karryNgo/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map