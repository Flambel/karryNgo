(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-users-list-users-module"], {
    /***/
    "./src/app/layout/list-users/add-users.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/layout/list-users/add-users.component.ts ***!
      \**********************************************************/

    /*! exports provided: AddEmpComponent */

    /***/
    function srcAppLayoutListUsersAddUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEmpComponent", function () {
        return AddEmpComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../router.animations */
      "./src/app/router.animations.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../_services/alert.service */
      "./src/app/_services/alert.service.ts");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../_services/user.service */
      "./src/app/_services/user.service.ts");
      /* harmony import */


      var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/modules/page-header/page-header.component */
      "./src/app/shared/modules/page-header/page-header.component.ts");
      /* harmony import */


      var _directives_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_directives/alert.component */
      "./src/app/_directives/alert.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function AddEmpComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEmpComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required and must be a valid email address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEmpComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required and should be equal to 9 digits. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEmpComponent_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pays_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pays_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pays_r7.name);
        }
      }

      function AddEmpComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEmpComponent_button_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmpComponent_button_48_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.addForm.invalid);
        }
      }

      function AddEmpComponent_button_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmpComponent_button_49_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.addForm.invalid);
        }
      }

      var AddEmpComponent = /*#__PURE__*/function () {
        function AddEmpComponent(formBuilder, router, alertService, userService) {
          _classCallCheck(this, AddEmpComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.alertService = alertService;
          this.userService = userService;
          this.empformlabel = 'Add User';
          this.empformbtn = 'Save';
          this.btnvisibility = true;
          this.countries = [{
            'id': 'cameroon',
            'name': 'Cameroon'
          }, {
            'id': 'south africa',
            'name': 'South Africa'
          }, {
            'id': 'great britain',
            'name': 'UK'
          }, {
            'id': 'usa',
            'name': 'USA'
          }, {
            'id': 'france',
            'name': 'France'
          }]; // override the route reuse strategy

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }

        _createClass(AddEmpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.addForm = this.formBuilder.group({
              _id: [''],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              gender: ['female', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              country: ['france', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(9)]]
            });
            var empid = localStorage.getItem('editEmpId');

            if (empid) {
              this.userService.getById(empid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (dataget) {
                _this.addForm.patchValue(dataget.data);
              });
              this.btnvisibility = false;
              this.empformlabel = 'Edit User Infos';
              this.empformbtn = 'Update';
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log('Create fire'); //this.empService.createUser(this.addForm.value)  
            // .subscribe(data => {  
            //this.router.navigate(['/portal/list-emp']);  
            //  },  
            // error => {  
            //   alert(error);  
            // });  
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.router.navigate(['/portal/list-users']);
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this2 = this;

            console.log('Update fire');
            this.userService.update(this.addForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe( //on success 
            function (data) {
              _this2.alertService.success(data.message, true);

              _this2.router.navigate(['/portal/list-users']);
            }, //on error
            function (error) {
              console.log(error);

              _this2.alertService.error(error);
            }, //on complete
            function () {//this.router.navigate(['/portal/list-users']); 
            });
          }
        }]);

        return AddEmpComponent;
      }();

      AddEmpComponent.ɵfac = function AddEmpComponent_Factory(t) {
        return new (t || AddEmpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      AddEmpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddEmpComponent,
        selectors: [["app-add-emp"]],
        decls: 52,
        vars: 12,
        consts: [[3, "heading", "icon"], [1, "row"], [1, "col-lg-12"], [1, "card", "mb-3"], [1, "card-header"], [1, "text-center"], [1, "col-md-10"], ["novalidate", "", 1, "form", 3, "formGroup"], ["name", "_id", "type", "hidden", "formControlName", "_id"], [1, "form-group"], ["for", "USERNAME"], ["formControlName", "username", "placeholder", "User Name", "name", "USERNAME", "id", "USERNAME", 1, "form-control"], ["class", "alert  alert-danger", 4, "ngIf"], ["for", "EMAIL"], ["formControlName", "email", "placeholder", "Email", "name", "EMAIL", "id", "EMAIL", 1, "form-control"], ["for", "TELEPHONE"], ["formControlName", "phone", "placeholder", "Telephone Number", "name", "TELEPHONE", "id", "TELEPHONE", 1, "form-control"], ["for", "PAYS"], ["formControlName", "country", "name", "PAYS", "id", "PAYS", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "radio"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "male", 1, "custom-control-input"], [1, "custom-control-label"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "female", 1, "custom-control-input"], ["class", "btn btn-success mr-4", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-danger"], [1, "btn", "btn-success", "mr-4", 3, "disabled", "click"]],
        template: function AddEmpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddEmpComponent_div_16_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddEmpComponent_div_21_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddEmpComponent_div_26_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Country:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddEmpComponent_option_32_Template, 2, 2, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddEmpComponent_div_33_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddEmpComponent_button_48_Template, 2, 1, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddEmpComponent_button_49_Template, 2, 1, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmpComponent_Template_button_click_50_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Edit")("icon", "fa-users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.empformlabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("username").touched && ctx.addForm.get("username").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("email").hasError("email") && ctx.addForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("phone").hasError("maxlength") && ctx.addForm.get("phone").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addForm.get("country").hasError("required") && ctx.addForm.get("country").touched || ctx.addForm.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.btnvisibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.btnvisibility);
          }
        },
        directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"], _directives_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LXVzZXJzL2FkZC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEmpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-emp',
            templateUrl: './add-users.component.html',
            styleUrls: ['./add-users.component.scss'],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/list-users/change-role-users.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/layout/list-users/change-role-users.component.ts ***!
      \******************************************************************/

    /*! exports provided: ChangeRoleUserComponent */

    /***/
    function srcAppLayoutListUsersChangeRoleUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeRoleUserComponent", function () {
        return ChangeRoleUserComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../router.animations */
      "./src/app/router.animations.ts");
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../_services/role.service */
      "./src/app/_services/role.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../_services/alert.service */
      "./src/app/_services/alert.service.ts");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../_services/user.service */
      "./src/app/_services/user.service.ts");
      /* harmony import */


      var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/modules/page-header/page-header.component */
      "./src/app/shared/modules/page-header/page-header.component.ts");
      /* harmony import */


      var _directives_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_directives/alert.component */
      "./src/app/_directives/alert.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function ChangeRoleUserComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userData.data.username);
        }
      }

      function ChangeRoleUserComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.userData.data.title_role, " (", ctx_r1.userData.data.slug_role, ")");
        }
      }

      function ChangeRoleUserComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var valueRole_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", valueRole_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", valueRole_r5.title, " (", valueRole_r5.slug, ")");
        }
      }

      function ChangeRoleUserComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChangeRoleUserComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangeRoleUserComponent_div_23_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.role_id.errors.required);
        }
      }

      function ChangeRoleUserComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeRoleUserComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.addForm.invalid);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ChangeRoleUserComponent = /*#__PURE__*/function () {
        function ChangeRoleUserComponent(SetServiceRole, formBuilder, router, alertService, userService) {
          _classCallCheck(this, ChangeRoleUserComponent);

          this.SetServiceRole = SetServiceRole;
          this.formBuilder = formBuilder;
          this.router = router;
          this.alertService = alertService;
          this.userService = userService;
          this.btnvisibility = true;
          this.submitted = false; // override the route reuse strategy

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }

        _createClass(ChangeRoleUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.SetServiceRole.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (roles) {
              _this3.role_data = roles;
            });
            this.addForm = this.formBuilder.group({
              role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              _id: ['']
            });
            var empid = localStorage.getItem('editEmpId');

            if (empid) {
              this.userService.getById(empid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (dataget) {
                _this3.addForm.patchValue({
                  _id: dataget.data._id
                });

                _this3.userData = dataget;
              });
              this.btnvisibility = false;
              this.empformlabel = 'Edit User Role';
              this.empformbtn = 'Update';
            }
          } // convenience getter for easy access to form fields

        }, {
          key: "onCancel",
          value: function onCancel() {
            this.router.navigate(['/portal/list-users']);
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this4 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.addForm.invalid) {
              return;
            }

            var formulaire = {
              user_id: localStorage.getItem('editEmpId'),
              role_id: this.f.role_id.value
            };
            console.log(' user_id' + formulaire.user_id);
            console.log(' role_id' + formulaire.role_id);
            console.log(this.addForm.value);
            this.SetServiceRole.editRole(formulaire).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe( //on success 
            function (data) {
              _this4.alertService.success(data.message, true);

              _this4.router.navigate(['/portal/list-users']);
            }, //on error
            function (error) {
              console.log(error);

              _this4.alertService.error(error);
            }, //on complete
            function () {//this.router.navigate(['/portal/list-users']); 
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.addForm.controls;
          }
        }]);

        return ChangeRoleUserComponent;
      }();

      ChangeRoleUserComponent.ɵfac = function ChangeRoleUserComponent_Factory(t) {
        return new (t || ChangeRoleUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]));
      };

      ChangeRoleUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangeRoleUserComponent,
        selectors: [["app-add-emp"]],
        decls: 29,
        vars: 13,
        consts: [[3, "heading", "icon"], [1, "row"], [1, "col-lg-12"], [1, "card", "mb-3"], [1, "card-header"], [1, "text-center"], [1, "col-md-10"], ["novalidate", "", 1, "form", 3, "formGroup"], ["name", "_id", "type", "hidden", "formControlName", "_id"], [1, "form-group"], ["for", "USERNAME"], ["style", "font-size: blue;font-weight: bold", 4, "ngIf"], ["style", "font-size: green;font-weight: bold", 4, "ngIf"], ["for", "role_id"], ["formControlName", "role_id", "name", "role_id", "id", "role_id", 1, "form-control", 3, "ngClass"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "btn btn-success mr-4", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [2, "font-size", "blue", "font-weight", "bold"], [2, "font-size", "green", "font-weight", "bold"], [1, "invalid-feedback"], [4, "ngIf"], [1, "btn", "btn-success", "mr-4", 3, "disabled", "click"]],
        template: function ChangeRoleUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current User Role: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChangeRoleUserComponent_span_15_Template, 2, 1, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChangeRoleUserComponent_p_16_Template, 2, 2, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChangeRoleUserComponent_option_22_Template, 2, 3, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangeRoleUserComponent_div_23_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChangeRoleUserComponent_button_26_Template, 2, 1, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeRoleUserComponent_Template_button_click_27_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Role Edit")("icon", "fa-users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.empformlabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.role_id.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.role_data.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.role_id.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.btnvisibility);
          }
        },
        directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _directives_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LXVzZXJzL2NoYW5nZS1yb2xlLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeRoleUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-emp',
            templateUrl: './change-role-users.component.html',
            styleUrls: ['./change-role-users.component.scss'],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
          }]
        }], function () {
          return [{
            type: _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/list-users/list-users-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/layout/list-users/list-users-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ListUserRoutingModule */

    /***/
    function srcAppLayoutListUsersListUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserRoutingModule", function () {
        return ListUserRoutingModule;
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


      var _list_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-users.component */
      "./src/app/layout/list-users/list-users.component.ts");
      /* harmony import */


      var _add_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-users.component */
      "./src/app/layout/list-users/add-users.component.ts");
      /* harmony import */


      var _change_role_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./change-role-users.component */
      "./src/app/layout/list-users/change-role-users.component.ts");

      var routes = [{
        path: '',
        component: _list_users_component__WEBPACK_IMPORTED_MODULE_2__["ListUserComponent"],
        children: [{
          path: 'add-edit',
          component: _add_users_component__WEBPACK_IMPORTED_MODULE_3__["AddEmpComponent"]
        }, {
          path: 'role-edit',
          component: _change_role_users_component__WEBPACK_IMPORTED_MODULE_4__["ChangeRoleUserComponent"]
        }]
      }];

      var ListUserRoutingModule = function ListUserRoutingModule() {
        _classCallCheck(this, ListUserRoutingModule);
      };

      ListUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ListUserRoutingModule
      });
      ListUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ListUserRoutingModule_Factory(t) {
          return new (t || ListUserRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListUserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserRoutingModule, [{
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
    "./src/app/layout/list-users/list-users.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/layout/list-users/list-users.component.ts ***!
      \***********************************************************/

    /*! exports provided: ListUserComponent */

    /***/
    function srcAppLayoutListUsersListUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
        return ListUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      "./src/app/router.animations.ts");
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../_services/role.service */
      "./src/app/_services/role.service.ts");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../_services/user.service */
      "./src/app/_services/user.service.ts");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../_services/alert.service */
      "./src/app/_services/alert.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/modules/page-header/page-header.component */
      "./src/app/shared/modules/page-header/page-header.component.ts");
      /* harmony import */


      var _directives_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_directives/alert.component */
      "./src/app/_directives/alert.component.ts");

      function ListUserComponent_div_2_tr_29_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListUserComponent_div_2_tr_29_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.changeRole(person_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.currentUser.user.title_role != "administrator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", person_r2.title_role, "");
        }
      }

      function ListUserComponent_div_2_tr_29_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListUserComponent_div_2_tr_29_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.editEmp(person_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListUserComponent_div_2_tr_29_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListUserComponent_div_2_tr_29_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.deleteUser(person_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListUserComponent_div_2_tr_29_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListUserComponent_div_2_tr_29_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.suspendUser(person_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Suspend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListUserComponent_div_2_tr_29_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListUserComponent_div_2_tr_29_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.unsuspendUser(person_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unsuspend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListUserComponent_div_2_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListUserComponent_div_2_tr_29_button_16_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListUserComponent_div_2_tr_29_button_17_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListUserComponent_div_2_tr_29_button_18_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListUserComponent_div_2_tr_29_button_19_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListUserComponent_div_2_tr_29_button_20_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var person_r2 = ctx.$implicit;
          var rank_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rank_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", person_r2.role_id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.suspended);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.email != ctx_r1.currentUser.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.email != ctx_r1.currentUser.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.email != ctx_r1.currentUser.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.email != ctx_r1.currentUser.user.email && person_r2.suspended == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.email != ctx_r1.currentUser.user.email && person_r2.suspended == true);
        }
      }

      function ListUserComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListUserComponent_div_2_tr_29_Template, 21, 12, "tr", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Users")("icon", "fa-users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Users Lists : ", ctx_r0.persons == null ? null : ctx_r0.persons.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.persons);
        }
      }

      var ListUserComponent = /*#__PURE__*/function () {
        function ListUserComponent(SetServiceRole, userService, alertService, route, router) {
          _classCallCheck(this, ListUserComponent);

          this.SetServiceRole = SetServiceRole;
          this.userService = userService;
          this.alertService = alertService;
          this.route = route;
          this.router = router;
          this.persons = [];
          this.role_data = []; // override the route reuse strategy

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

        _createClass(ListUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadAllUsers();
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this5 = this;

            this.userService["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe( //on success 
            function (data) {
              _this5.alertService.success(data.message, true);
            }, //on error
            function (error) {
              _this5.alertService.error(error);
            }, //on complete
            function () {
              _this5.loadAllUsers();
            });
          } //Cette fonction permet de suspendre un compte utilisateur

        }, {
          key: "suspendUser",
          value: function suspendUser(id) {
            var _this6 = this;

            this.userService.suspension(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe( //on success 
            function (data) {
              _this6.alertService.success(data.message, true);
            }, //on error
            function (error) {
              _this6.alertService.error(error);
            }, //on complete
            function () {
              _this6.loadAllUsers();
            });
          } //Cette fonction permet de lever la suspension d'un compte utilisateur

        }, {
          key: "unsuspendUser",
          value: function unsuspendUser(id) {
            var _this7 = this;

            this.userService.unSuspension(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe( //on success 
            function (data) {
              _this7.alertService.success(data.message, true);
            }, //on error
            function (error) {
              _this7.alertService.error(error);
            }, //on complete
            function () {
              _this7.loadAllUsers();
            });
          }
        }, {
          key: "editEmp",
          value: function editEmp(personel) {
            // console.log(JSON.stringify(personel.toString()));
            localStorage.removeItem('editEmpId');
            localStorage.setItem('editEmpId', personel.toString());
            this.router.navigate(['/portal/list-users/add-edit']);
          }
        }, {
          key: "changeRole",
          value: function changeRole(personel) {
            localStorage.removeItem('editEmpId');
            localStorage.setItem('editEmpId', personel.toString());
            this.router.navigate(['/portal/list-users/role-edit']);
          }
        }, {
          key: "loadAllUsers",
          value: function loadAllUsers() {
            var _this8 = this;

            this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (persons) {
              _this8.persons = persons.data;
              console.log(persons.data);
            });
            this.SetServiceRole.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (roles) {
              _this8.role_data = roles.data;
            });
          }
        }]);

        return ListUserComponent;
      }();

      ListUserComponent.ɵfac = function ListUserComponent_Factory(t) {
        return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      ListUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListUserComponent,
        selectors: [["app-list-users"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"], [3, "heading", "icon"], [1, "row"], [1, "col-lg-12"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body", "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["scope", "row"], [2, "color", "blue", "font-weight", "bold"], ["style", "margin-right: 20px;", "class", "btn btn-info", "style", "margin-bottom: 2px;", 3, "disabled", "click", 4, "ngIf"], ["style", "margin-right: 20px;", "class", "btn btn-info", "style", "margin-bottom: 2px;", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", "style", "margin-bottom: 2px;", 3, "click", 4, "ngIf"], ["class", "btn btn-success", "style", "margin-bottom: 2px;", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-info", 2, "margin-bottom", "2px", 3, "disabled", "click"], [1, "btn", "btn-info", 2, "margin-bottom", "2px", 3, "click"], [1, "btn", "btn-danger", 2, "margin-bottom", "2px", 3, "click"], [1, "btn", "btn-success", 2, "margin-bottom", "2px", 3, "click"], [1, "btn", "btn-warning", 3, "click"]],
        template: function ListUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListUserComponent_div_2_Template, 30, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.route.children.length === 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _directives_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-users',
            templateUrl: './list-users.component.html',
            styleUrls: ['./list-users.component.scss'],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
          }]
        }], function () {
          return [{
            type: _services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/list-users/list-users.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/layout/list-users/list-users.module.ts ***!
      \********************************************************/

    /*! exports provided: ListUserModule */

    /***/
    function srcAppLayoutListUsersListUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserModule", function () {
        return ListUserModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _list_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-users-routing.module */
      "./src/app/layout/list-users/list-users-routing.module.ts");
      /* harmony import */


      var _list_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-users.component */
      "./src/app/layout/list-users/list-users.component.ts");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../shared */
      "./src/app/shared/index.ts");
      /* harmony import */


      var _directives_alert_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../_directives/alert.module */
      "./src/app/_directives/alert.module.ts");
      /* harmony import */


      var _add_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-users.component */
      "./src/app/layout/list-users/add-users.component.ts");
      /* harmony import */


      var _change_role_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./change-role-users.component */
      "./src/app/layout/list-users/change-role-users.component.ts");

      var ListUserModule = function ListUserModule() {
        _classCallCheck(this, ListUserModule);
      };

      ListUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ListUserModule
      });
      ListUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ListUserModule_Factory(t) {
          return new (t || ListUserModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListUserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _directives_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListUserModule, {
          declarations: [_list_users_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"], _add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddEmpComponent"], _change_role_users_component__WEBPACK_IMPORTED_MODULE_8__["ChangeRoleUserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListUserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _directives_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListUserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _directives_alert_module__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]],
            declarations: [_list_users_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"], _add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddEmpComponent"], _change_role_users_component__WEBPACK_IMPORTED_MODULE_8__["ChangeRoleUserComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=list-users-list-users-module-es5.js.map