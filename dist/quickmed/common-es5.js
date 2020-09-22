(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/_classes/serviceClass.ts":
    /*!******************************************!*\
      !*** ./src/app/_classes/serviceClass.ts ***!
      \******************************************/

    /*! exports provided: ServiceClass */

    /***/
    function srcApp_classesServiceClassTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceClass", function () {
        return ServiceClass;
      });

      var ServiceClass = /*#__PURE__*/function () {
        function ServiceClass(SetServiceCat1) {
          _classCallCheck(this, ServiceClass);

          this.SetServiceCat1 = SetServiceCat1;
          this.services_category_home = [];
        }

        _createClass(ServiceClass, [{
          key: "loadAllCategories",
          value: function loadAllCategories() {
            var _this = this;

            this.SetServiceCat1.getAll().subscribe(function (res) {
              _this.services_category = res['data'];
              console.log(res);

              for (var i = 0; i < 3; i++) {
                _this.services_category_home[i] = res['data'][i];
              }

              console.log(_this.services_category);
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "loadAllSubcategories",
          value: function loadAllSubcategories(category_id) {
            var _this2 = this;

            this.SetServiceCat1.getSubCategBiCategId(category_id).subscribe(function (res) {
              _this2.services_subcategory = res['data'];
              console.log(_this2.services_subcategory);
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }]);

        return ServiceClass;
      }();
      /***/

    },

    /***/
    "./src/app/_directives/alert.component.ts":
    /*!************************************************!*\
      !*** ./src/app/_directives/alert.component.ts ***!
      \************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcApp_directivesAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/alert.service */
      "./src/app/_services/alert.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "alert": a0,
          "alert-success alert-dismissible fade show": a1,
          "alert-danger alert-dismissible fade show": a2
        };
      };

      function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.message, ctx_r0.message.type === "success", ctx_r0.message.type === "error"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.text);
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(alertService) {
          _classCallCheck(this, AlertComponent);

          this.alertService = alertService;
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.subscription = this.alertService.getMessage().subscribe(function (message) {
              _this3.message = message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"]],
        decls: 1,
        vars: 1,
        consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["type", "button", "data-dismiss", "alert", 1, "close"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'alert',
            templateUrl: 'alert.component.html'
          }]
        }], function () {
          return [{
            type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_directives/alert.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/_directives/alert.module.ts ***!
      \*********************************************/

    /*! exports provided: AlertModule */

    /***/
    function srcApp_directivesAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return AlertModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.component */
      "./src/app/_directives/alert.component.ts");

      var AlertModule = function AlertModule() {
        _classCallCheck(this, AlertModule);
      };

      AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AlertModule
      });
      AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AlertModule_Factory(t) {
          return new (t || AlertModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, {
          declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/_models/helpNotes.ts":
    /*!**************************************!*\
      !*** ./src/app/_models/helpNotes.ts ***!
      \**************************************/

    /*! exports provided: HelpNotes */

    /***/
    function srcApp_modelsHelpNotesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpNotes", function () {
        return HelpNotes;
      });

      var HelpNotes = function HelpNotes() {
        _classCallCheck(this, HelpNotes);
      };
      /***/

    },

    /***/
    "./src/app/_models/register.ts":
    /*!*************************************!*\
      !*** ./src/app/_models/register.ts ***!
      \*************************************/

    /*! exports provided: Register */

    /***/
    function srcApp_modelsRegisterTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Register", function () {
        return Register;
      });

      var Register = /*#__PURE__*/function () {
        function Register(data) {
          _classCallCheck(this, Register);

          this.firstname = data.firstname;
          this.surname = data.surname;
          this.username = data.username;
          this.email = data.email;
          this.password = data.password;
          this.title = data.title;
          this.gender = data.gender;
          this.id_number = data.id_number;
          this.ethnic_group = data.ethnic_group;
        }

        _createClass(Register, [{
          key: "setData",
          value: function setData(data) {
            if (data.firstname) this.firstname = data.firstname;
            if (data.surname) this.surname = data.surname;
            if (data.username) this.username = data.username;
            if (data.email) this.email = data.email;
            if (data.password) this.password = data.password;
            if (data.title) this.title = data.title;
            if (data.gender) this.gender = data.gender;
            if (data.id_number) this.id_number = data.id_number;
            if (data.ethnic_group) this.ethnic_group = data.ethnic_group;
            if (data.picture) this.picture = data.picture;
          }
        }]);

        return Register;
      }();
      /***/

    },

    /***/
    "./src/app/_services/alert.service.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/alert.service.ts ***!
      \********************************************/

    /*! exports provided: AlertService */

    /***/
    function srcApp_servicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(router) {
          var _this4 = this;

          _classCallCheck(this, AlertService);

          this.router = router;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.keepAfterNavigationChange = false; // clear alert message on route change

          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              if (_this4.keepAfterNavigationChange) {
                // only keep for a single location change
                _this4.keepAfterNavigationChange = false;
              } else {
                // clear alert
                _this4.subject.next();
              }
            }
          });
        }

        _createClass(AlertService, [{
          key: "success",
          value: function success(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'success',
              text: message
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterNavigationChange = keepAfterNavigationChange;
            this.subject.next({
              type: 'error',
              text: message
            });
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return this.subject.asObservable();
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/ask-service.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/_services/ask-service.service.ts ***!
      \**************************************************/

    /*! exports provided: AskServiceService */

    /***/
    function srcApp_servicesAskServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AskServiceService", function () {
        return AskServiceService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/notification.service */
      "./src/app/_services/notification.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AskServiceService = /*#__PURE__*/function () {
        function AskServiceService(http, notificationService, router) {
          _classCallCheck(this, AskServiceService);

          this.http = http;
          this.notificationService = notificationService;
          this.router = router;
        }

        _createClass(AskServiceService, [{
          key: "saveService",
          value: function saveService(data, notification) {
            var _this5 = this;

            // console.log(data)
            console.log(notification);
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/service/new"), data).subscribe(function (res) {
              console.log(res);
              notification.serviceAskForHelp_id = res['data']._id;
              console.log(notification);

              _this5.notificationService.saveNotification(notification);

              alert('data saved successfully.');
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "getUserServices",
          value: function getUserServices(user_id) {
            console.log(user_id);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/service/getUserService/") + user_id);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/service/getAll"));
          }
        }, {
          key: "getServiceById",
          value: function getServiceById(service_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/service/get/") + service_id);
          }
        }]);

        return AskServiceService;
      }();

      AskServiceService.ɵfac = function AskServiceService_Factory(t) {
        return new (t || AskServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      AskServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AskServiceService,
        factory: AskServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/helpnote.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/_services/helpnote.service.ts ***!
      \***********************************************/

    /*! exports provided: HelpnoteService */

    /***/
    function srcApp_servicesHelpnoteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpnoteService", function () {
        return HelpnoteService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _models_helpNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_models/helpNotes */
      "./src/app/_models/helpNotes.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var HelpnoteService = /*#__PURE__*/function () {
        function HelpnoteService(http) {
          _classCallCheck(this, HelpnoteService);

          this.http = http;
        } // getAll(userId: string) {
        //     return this.http.get<HelpNotes[]>(`${environment.apiUrl}/HelpNotes/getAll` + userId);
        //     console.log(HelpNotes);
        // }
        //Pour récupérer tous les messages envoyés


        _createClass(HelpnoteService, [{
          key: "getAll",
          value: function getAll(userId) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/HelpNotes/getAll"), {
              userId: userId
            });
          } //Pour récupérer tous les messages reçus

        }, {
          key: "getAllReceived",
          value: function getAllReceived(userId) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/HelpNotes/getAllReceived"), {
              userId: userId
            });
          }
        }, {
          key: "supNote",
          value: function supNote(helpnote_id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/HelpNotes/supprimer/") + helpnote_id);
            console.log(_models_helpNotes__WEBPACK_IMPORTED_MODULE_1__["HelpNotes"]);
          }
        }, {
          key: "saveHelpNotes",
          value: function saveHelpNotes(receiver, subject, message, senderId, username) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/HelpNotes/enregistrer"), {
              receiver: receiver,
              subject: subject,
              message: message,
              senderId: senderId,
              username: username
            });
          } //permet d'enregistrer un helpNote d'un service Ask For Help

        }, {
          key: "saveHelpNote",
          value: function saveHelpNote(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/helpnotes/save"), formValue);
          } //enregistre la reponse d'un offreur sur le service qu'il propose

        }, {
          key: "saveAnswer",
          value: function saveAnswer(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/helpnotes/saveAnswer"), formValue);
          }
        }, {
          key: "getAllHelpNotes",
          value: function getAllHelpNotes(serviceaskforhelp_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/helpnotes/get/allhelpnotes/") + serviceaskforhelp_id);
          } //permet de GET tous les AnswerHelps d'un HelpNote

        }, {
          key: "getAllAnswerHelp",
          value: function getAllAnswerHelp(helpnotes_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/helpnotes/get/allanshelp/") + helpnotes_id);
          }
        }, {
          key: "saveChat",
          value: function saveChat(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/HelpNotes/enregistrer"), formValue);
          } // Save the message sent by a user via livechat

        }, {
          key: "saveMessage",
          value: function saveMessage(name, email, message) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/livechat/save"), {
              name: name,
              email: email,
              message: message
            });
          } // getAllChats permet à l'administrateur de get tous les messages envoyeés par les internautes via le livechat

        }, {
          key: "getAllChats",
          value: function getAllChats() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/livechat/getAll"));
          }
        }]);

        return HelpnoteService;
      }();

      HelpnoteService.ɵfac = function HelpnoteService_Factory(t) {
        return new (t || HelpnoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      HelpnoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HelpnoteService,
        factory: HelpnoteService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpnoteService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/notification.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/_services/notification.service.ts ***!
      \***************************************************/

    /*! exports provided: NotificationService */

    /***/
    function srcApp_servicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(http, router) {
          _classCallCheck(this, NotificationService);

          this.http = http;
          this.router = router;
        }

        _createClass(NotificationService, [{
          key: "saveNotification",
          value: function saveNotification(notification) {
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/notification/new"), notification).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log('Error occured:', err);
              console.log(err.message, 'Error occured');
            });
          }
        }, {
          key: "getNotificationsByUserId",
          value: function getNotificationsByUserId(user_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/notification/get/") + user_id);
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/role.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/role.service.ts ***!
      \*******************************************/

    /*! exports provided: RoleService */

    /***/
    function srcApp_servicesRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var RoleService = /*#__PURE__*/function () {
        function RoleService(http) {
          _classCallCheck(this, RoleService);

          this.http = http;
        }

        _createClass(RoleService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/get"));
          }
        }, {
          key: "getById",
          value: function getById(val) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/view/") + val);
          }
        }, {
          key: "save",
          value: function save(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/save"), formValue);
          }
        }, {
          key: "update",
          value: function update(formValue) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/editrole/") + formValue._id, formValue);
          }
        }, {
          key: "editRole",
          value: function editRole(formValue) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/editrole/user/") + formValue.user_id, formValue);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles/delete/") + id);
          }
        }]);

        return RoleService;
      }();

      RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/services-categories.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/_services/services-categories.service.ts ***!
      \**********************************************************/

    /*! exports provided: ServiceCatService */

    /***/
    function srcApp_servicesServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceCatService", function () {
        return ServiceCatService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var ServiceCatService = /*#__PURE__*/function () {
        function ServiceCatService(http) {
          _classCallCheck(this, ServiceCatService);

          this.http = http;
        }

        _createClass(ServiceCatService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/category/getAll"));
          }
        }, {
          key: "getSubCategBiCategId",
          value: function getSubCategBiCategId(category_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/subcategory/get/") + category_id);
          }
        }, {
          key: "getCategoryName",
          value: function getCategoryName(category_id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/subcategory/getCategoryName/") + category_id);
          }
        }, {
          key: "getAllSubCateg",
          value: function getAllSubCateg() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/subcategory/getAll"));
          }
        }, {
          key: "getAllServicesDBM",
          value: function getAllServicesDBM() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/services/get"));
          }
        }, {
          key: "getById",
          value: function getById(val) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/category/view/") + val);
          }
        }, {
          key: "getByIdServicesDBM",
          value: function getByIdServicesDBM(val) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/services/view/") + val);
          }
        }, {
          key: "getByIdSubCat",
          value: function getByIdSubCat(val) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/souscategory/view/") + val);
          }
        }, {
          key: "save",
          value: function save(categoryName, logo) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/category/services/save"), {
              categoryName: categoryName,
              logo: logo
            });
          }
        }, {
          key: "saveServicesDBM",
          value: function saveServicesDBM(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/services/save"), formValue);
          }
        }, {
          key: "saveSubCat",
          value: function saveSubCat(formValue) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/souscategory/save"), formValue);
          }
        }, {
          key: "getSubCatbyCatID",
          value: function getSubCatbyCatID(value) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/souscategory/get/souscategory/ofAcategory"), {
              categoryServiceId: value
            });
          }
        }, {
          key: "update",
          value: function update(formValue) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/category/services/update/") + formValue._id, formValue);
          }
        }, {
          key: "updateServicesDBM",
          value: function updateServicesDBM(formValue) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/services/update/") + formValue._id, formValue);
          }
        }, {
          key: "updateSubCat",
          value: function updateSubCat(formValue) {
            return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/souscategory/update/") + formValue._id, formValue);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/category/services/delete/") + id);
          }
        }, {
          key: "deleteServicesDBM",
          value: function deleteServicesDBM(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/services/delete/") + id);
          }
        }, {
          key: "deleteSubCat",
          value: function deleteSubCat(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/souscategory/delete/") + id);
          }
        }]);

        return ServiceCatService;
      }();

      ServiceCatService.ɵfac = function ServiceCatService_Factory(t) {
        return new (t || ServiceCatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ServiceCatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ServiceCatService,
        factory: ServiceCatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/router.animations.ts":
    /*!**************************************!*\
      !*** ./src/app/router.animations.ts ***!
      \**************************************/

    /*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */

    /***/
    function srcAppRouterAnimationsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routerTransition", function () {
        return routerTransition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "noTransition", function () {
        return noTransition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideToRight", function () {
        return slideToRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideToLeft", function () {
        return slideToLeft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideToBottom", function () {
        return slideToBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideToTop", function () {
        return slideToTop;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");

      function routerTransition() {
        return noTransition();
      }

      function noTransition() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
      }

      function slideToRight() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(100%)'
        }))])]);
      }

      function slideToLeft() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateX(-100%)'
        }))])]);
      }

      function slideToBottom() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(100%)'
        }))])]);
      }

      function slideToTop() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(0%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translateY(-100%)'
        }))])]);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map