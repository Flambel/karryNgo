(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "./src/app/layout/chat/chat.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/layout/chat/chat.component.ts ***!
      \***********************************************/

    /*! exports provided: ChatComponent */

    /***/
    function srcAppLayoutChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent() {
          _classCallCheck(this, ChatComponent);
        }

        _createClass(ChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatComponent;
      }();

      ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        decls: 90,
        vars: 0,
        consts: [[1, "chat-panel", "card", "card-default"], [1, "card-header"], [1, "fa", "fa-comments", "fa-fw"], ["ngbDropdown", "", 1, "pull-right"], ["ngbDropdownToggle", "", 1, "btn", "btn-secondary", "btn-sm"], [1, "caret"], [1, "dropdown-menu", "dropdown-menu-right"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "fa", "fa-refresh", "fa-fw"], [1, "fa", "fa-check-circle", "fa-fw"], [1, "fa", "fa-times", "fa-fw"], [1, "divider", "dropdown-divider"], [1, "fa", "fa-clock-o", "fa-fw"], [1, "divider"], [1, "fa", "fa-sign-out", "fa-fw"], [1, "card-body"], [1, "chat"], [1, "left", "clearfix"], [1, "chat-img", "pull-left"], ["src", "http://placehold.it/50/55C1E7/fff", "alt", "User Avatar", 1, "img-circle"], [1, "chat-body", "clearfix"], [1, "header"], [1, "primary-font"], [1, "pull-right", "text-muted"], [1, "right", "clearfix"], [1, "chat-img", "pull-right"], ["src", "http://placehold.it/50/FA6F57/fff", "alt", "User Avatar", 1, "img-circle"], [1, "text-muted"], [1, "pull-right", "primary-font"], [1, "card-footer"], [1, "input-group"], ["id", "btn-input", "type", "text", "placeholder", "Type your message here...", 1, "form-control", "input-sm"], [1, "input-group-btn"], ["id", "btn-chat", 1, "btn", "btn-warning", "btn-sm"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Chat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Busy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Busy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Away ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Sign Out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jack Sparrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 12 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 13 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bhaumik Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Jack Sparrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "small", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 14 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 15 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Bhaumik Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".chat-panel[_ngcontent-%COMP%]   .chat-dropdown[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n.chat-panel[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat-panel[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.chat-panel[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.chat-panel[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999;\n}\n.chat-panel[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQVdJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFWUjtBQUhZO0VBQ0ksa0JBQUE7QUFLaEI7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUhaO0FBT1E7RUFDSSxZQUFBO0FBTFoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcGFuZWx7XHJcbiAgICAuY2hhdC1kcm9wZG93bntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gICAgLmNoYXR7XHJcbiAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/dashboard/components/index.ts":
    /*!******************************************************!*\
      !*** ./src/app/layout/dashboard/components/index.ts ***!
      \******************************************************/

    /*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */

    /***/
    function srcAppLayoutDashboardComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timeline/timeline.component */
      "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
        return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"];
      });
      /* harmony import */


      var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification/notification.component */
      "./src/app/layout/dashboard/components/notification/notification.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"];
      });
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chat/chat.component */
      "./src/app/layout/chat/chat.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"];
      });
      /***/

    },

    /***/
    "./src/app/layout/dashboard/components/notification/notification.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function srcAppLayoutDashboardComponentsNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent() {
          _classCallCheck(this, NotificationComponent);
        }

        _createClass(NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || NotificationComponent)();
      };

      NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationComponent,
        selectors: [["app-notification"]],
        decls: 58,
        vars: 0,
        consts: [[1, "card-body"], [1, "list-group"], ["href", "#", 1, "list-group-item", "clearfix", "d-block"], [1, "fa", "fa-comment", "fa-fw"], [1, "float-right", "text-muted", "small"], [1, "fa", "fa-twitter", "fa-fw"], [1, "fa", "fa-envelope", "fa-fw"], [1, "fa", "fa-tasks", "fa-fw"], [1, "fa", "fa-upload", "fa-fw"], [1, "fa", "fa-bolt", "fa-fw"], [1, "fa", "fa-warning", "fa-fw"], [1, "fa", "fa-shopping-cart", "fa-fw"], [1, "fa", "fa-money", "fa-fw"], ["href", "#", 1, "btn", "btn-default", "btn-block"]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Comment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 3 New Followers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Message Sent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "27 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " New Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "43 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Server Rebooted ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11:32 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Server Crashed! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "11:13 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Server Not Responding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10:57 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " New Order Placed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "9:49 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Payment Received ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "View All Alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TimelineComponent */

    /***/
    function srcAppLayoutDashboardComponentsTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
        return TimelineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var TimelineComponent = /*#__PURE__*/function () {
        function TimelineComponent() {
          _classCallCheck(this, TimelineComponent);
        }

        _createClass(TimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TimelineComponent;
      }();

      TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
        return new (t || TimelineComponent)();
      };

      TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimelineComponent,
        selectors: [["app-timeline"]],
        decls: 93,
        vars: 0,
        consts: [[1, "card-body"], [1, "timeline"], [1, "timeline-badge"], [1, "fa", "fa-check"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "text-muted"], [1, "fa", "fa-clock-o"], [1, "timeline-body"], [1, "timeline-inverted"], [1, "timeline-badge", "warning"], [1, "fa", "fa-credit-card"], [1, "timeline-badge", "danger"], [1, "fa", "fa-bomb"], [1, "timeline-badge", "info"], [1, "fa", "fa-save"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], [1, "fa", "fa-gear"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["href", "#"], [1, "divider"], [1, "timeline-badge", "success"], [1, "fa", "fa-graduation-cap"]],
        template: function TimelineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 11 hours ago via Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline-badge.primary[_ngcontent-%COMP%] {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success[_ngcontent-%COMP%] {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning[_ngcontent-%COMP%] {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger[_ngcontent-%COMP%] {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info[_ngcontent-%COMP%] {\n  background-color: #5bc0de !important;\n}\n\n.timeline-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n  ul.timeline[_ngcontent-%COMP%]:before {\n    left: 40px;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px);\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7O0VBRUksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFQUNOOztFQUVFO0lBQ0ksd0JBQUE7SUFFQSxnQ0FBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBQ047O0VBRUU7SUFDSSxZQUFBO0VBQ047O0VBRUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUFDTjs7RUFFRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3cHg7XHJcbiAgICByaWdodDogLTE0cHg7XHJcbiAgICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMTRweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjkwM2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9keSA+IHAsXHJcbi50aW1lbGluZS1ib2R5ID4gdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIHVsLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogLTE0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-timeline',
            templateUrl: './timeline.component.html',
            styleUrls: ['./timeline.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/dashboard/dashboard-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function srcAppLayoutDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      "./src/app/layout/dashboard/dashboard.component.ts");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
    "./src/app/layout/dashboard/dashboard.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppLayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../router.animations */
      "./src/app/router.animations.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _shared_modules_stat_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/modules/stat/stat.component */
      "./src/app/shared/modules/stat/stat.component.ts");
      /* harmony import */


      var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/timeline/timeline.component */
      "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
      /* harmony import */


      var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/notification/notification.component */
      "./src/app/layout/dashboard/components/notification/notification.component.ts");

      function DashboardComponent_8_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slider_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slider_r2.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slider_r2.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slider_r2.text);
        }
      }

      function DashboardComponent_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_8_ng_template_0_Template, 6, 3, "ng-template", 14);
        }
      }

      function DashboardComponent_ngb_alert_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DashboardComponent_ngb_alert_20_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var alert_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.closeAlert(alert_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r5.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r5.message);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
          this.alerts = [];
          this.sliders = [];
          this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          });
          this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
          }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
          });
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 35,
        vars: 19,
        consts: [[1, "text-muted"], [1, "row"], [1, "col-md-12"], [4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-6"], [3, "bgClass", "icon", "count", "label"], [3, "type", "close", 4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "card", "card-default"], [1, "card-header"], [1, "fa", "fa-clock-o", "fa-fw"], [1, "col-lg-4"], [1, "card", "card-default", "mb-3"], [1, "fa", "fa-bell", "fa-fw"], ["ngbSlide", ""], ["alt", "Random first slide", "width", "100%", 1, "img-fluid", "mx-auto", "d-block", 3, "src"], [1, "carousel-caption"], [3, "type", "close"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Statistics Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_8_Template, 1, 0, undefined, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-stat", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-stat", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-stat", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-stat", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_ngb_alert_20_Template, 2, 2, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Responsive Timeline ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Notifications card ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgClass", "primary")("icon", "fa-comments")("count", 26)("label", "New Comments!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgClass", "warning")("icon", "fa-tasks")("count", 12)("label", "New task!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgClass", "success")("icon", "fa-shopping-cart")("count", 124)("label", "New Orders!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bgClass", "danger")("icon", "fa-support")("count", 13)("label", "New Tickets!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_modules_stat_stat_component__WEBPACK_IMPORTED_MODULE_5__["StatComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/dashboard/dashboard.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
      \******************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function srcAppLayoutDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/layout/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.component */
      "./src/app/layout/dashboard/dashboard.component.ts");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components */
      "./src/app/layout/dashboard/components/index.ts");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared */
      "./src/app/shared/index.ts");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"]],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map