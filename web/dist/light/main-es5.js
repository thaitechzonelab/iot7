(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'authentication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | authentication-authentication-module */
          "authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ./authentication/authentication.module */
          "./src/app/authentication/authentication.module.ts")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      "./src/app/layout/page-loader/page-loader.component.ts");
      /* harmony import */


      var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/right-sidebar/right-sidebar.component */
      "./src/app/layout/right-sidebar/right-sidebar.component.ts");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "./src/app/layout/header/header.component.ts");
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      "./src/app/layout/sidebar/sidebar.component.ts");

      function AppComponent_app_header_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      }

      function AppComponent_app_sidebar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        }
      }

      var AppComponent = function AppComponent(_router, location, spinner) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this._router = _router;
        this.spinner = spinner;

        this._router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this2.spinner.show();

            location.onPopState(function () {
              window.location.reload();
            });
            _this2.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
          }

          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this2.spinner.hide();
          }

          window.scrollTo(0, 0);
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_sidebar_2_Template, 1, 0, "app-sidebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._router.url.includes("/authentication"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._router.url.includes("/authentication"));
          }
        },
        directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__["PageLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["RightSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
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
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: MQTT_SERVICE_OPTIONS, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MQTT_SERVICE_OPTIONS", function () {
        return MQTT_SERVICE_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "./src/app/layout/header/header.component.ts");
      /* harmony import */


      var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/page-loader/page-loader.component */
      "./src/app/layout/page-loader/page-loader.component.ts");
      /* harmony import */


      var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/sidebar/sidebar.component */
      "./src/app/layout/sidebar/sidebar.component.ts");
      /* harmony import */


      var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layout/right-sidebar/right-sidebar.component */
      "./src/app/layout/right-sidebar/right-sidebar.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/services/dynamic-script-loader.service */
      "./src/app/shared/services/dynamic-script-loader.service.ts");
      /* harmony import */


      var _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/services/rightsidebar.service */
      "./src/app/shared/services/rightsidebar.service.ts");
      /* harmony import */


      var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/services/config.service */
      "./src/app/shared/services/config.service.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-mask */
      "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _biacsics_ng_canvas_gauges__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @biacsics/ng-canvas-gauges */
      "./node_modules/@biacsics/ng-canvas-gauges/__ivy_ngcc__/fesm2015/biacsics-ng-canvas-gauges.js");
      /* harmony import */


      var ngx_mqtt__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ngx-mqtt */
      "./node_modules/ngx-mqtt/__ivy_ngcc__/fesm2015/ngx-mqtt.js");

      var MQTT_SERVICE_OPTIONS = {
        hostname: '178.128.221.52',
        port: 9001,
        path: '/mqtt'
      };
      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelPropagation: false
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"]
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, _shared_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicScriptLoaderService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"], _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__["RightSidebarService"]],
        imports: [[_agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyA_CHogTt3CkWzf67XgxR67yL7WrtwbAA8'
        }), ngx_mqtt__WEBPACK_IMPORTED_MODULE_36__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS), _biacsics_ng_canvas_gauges__WEBPACK_IMPORTED_MODULE_35__["GaugesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_33__["NgxSpinnerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_21__["NgxMaskModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
          apiKey: 'YOUR API KEY'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"]],
          imports: [_agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"], ngx_mqtt__WEBPACK_IMPORTED_MODULE_36__["MqttModule"], _biacsics_ng_canvas_gauges__WEBPACK_IMPORTED_MODULE_35__["GaugesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_33__["NgxSpinnerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_21__["NgxMaskModule"], _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"]],
            imports: [_agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyA_CHogTt3CkWzf67XgxR67yL7WrtwbAA8'
            }), ngx_mqtt__WEBPACK_IMPORTED_MODULE_36__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS), _biacsics_ng_canvas_gauges__WEBPACK_IMPORTED_MODULE_35__["GaugesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_33__["NgxSpinnerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_21__["NgxMaskModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
              apiKey: 'YOUR API KEY'
            })],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"]
            }, {
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, _shared_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicScriptLoaderService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"], _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__["RightSidebarService"]],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/header/header.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/rightsidebar.service */
      "./src/app/shared/services/rightsidebar.service.ts");
      /* harmony import */


      var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/config.service */
      "./src/app/shared/services/config.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

      function HeaderComponent_a_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "access_time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", notification_r2.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r2.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r2.time, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r2.message);
        }
      }

      var document = window.document;

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(document, renderer, elementRef, dataService, configService) {
          _classCallCheck(this, HeaderComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.dataService = dataService;
          this.configService = configService;
          this.config = {};
          this.notifications = [{
            userImg: 'assets/images/user/user1.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user2.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user3.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }, {
            userImg: 'assets/images/user/user4.jpg',
            userName: 'Ashton Cox',
            time: '5 hours ago',
            message: 'Lets break for lunch...'
          }, {
            userImg: 'assets/images/user/user5.jpg',
            userName: 'Sarah Smith',
            time: '14 mins ago',
            message: 'Please check your mail'
          }, {
            userImg: 'assets/images/user/user6.jpg',
            userName: 'Airi Satou',
            time: '22 mins ago',
            message: 'Work Completed !!!'
          }, {
            userImg: 'assets/images/user/user7.jpg',
            userName: 'John Doe',
            time: '3 hours ago',
            message: 'kindly help me for code.'
          }];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.config = this.configService.configData;
            this.callSidemenuCollapse();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set theme on startup
            if (localStorage.getItem('theme')) {
              this.renderer.removeClass(this.document.body, this.config.layout.variant);
              this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
            } else {
              this.renderer.addClass(this.document.body, this.config.layout.variant);
            }

            if (localStorage.getItem('menuOption')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
            } else {
              this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
            }

            if (localStorage.getItem('choose_logoheader')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
            } else {
              this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
            }

            if (localStorage.getItem('sidebar_status')) {
              if (localStorage.getItem('sidebar_status') === "close") {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              } else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
              }
            } else {
              if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
              }
            }
          }
        }, {
          key: "callFullscreen",
          value: function callFullscreen() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          }
        }, {
          key: "mobileMenuSidebarOpen",
          value: function mobileMenuSidebarOpen(event, className) {
            var hasClass = event.target.classList.contains(className);

            if (hasClass) {
              this.renderer.removeClass(this.document.body, className);
            } else {
              this.renderer.addClass(this.document.body, className);
            }
          }
        }, {
          key: "callSidemenuCollapse",
          value: function callSidemenuCollapse() {
            var hasClass = this.document.body.classList.contains('side-closed');

            if (hasClass) {
              this.renderer.removeClass(this.document.body, 'side-closed');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            } else {
              this.renderer.addClass(this.document.body, 'side-closed');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.dataService.changeMsg(this.dataService.currentStatus._isScalar = !this.dataService.currentStatus._isScalar);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 66,
        vars: 1,
        consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "data-toggle", "collapse", "data-target", "#navbar-collapse", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], ["routerLink", "dashboard/main", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], ["id", "navbar-collapse", 1, "collapse", "navbar-collapse"], [1, "pull-left", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], [1, "dropdown"], ["mat-icon-button", "", "data-toggle", "dropdown", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], [1, "dropdown-menu", "pullDown"], [1, "header"], [1, "body"], [1, "menu", 2, "position", "relative", "max-width", "600px", "max-height", "200px", 3, "perfectScrollbar"], ["href", "#", "onClick", "return false;", 4, "ngFor", "ngForOf"], [1, "footer"], ["href", "#", "onClick", "return false;"], [1, "dropdown", "user_profile"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", 1, "pt-0"], ["src", "assets/images/user.jpg", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [1, "user_dw_menu"], ["aria-hidden", "false", 1, "mr-2"], ["routerLink", "/authentication/signin", "onClick", "return false;"], [1, "pull-right"], ["mat-icon-button", "", 1, "nav-notification-icons", "js-right-sidebar", 3, "click"], ["id", "settingBtn"], [1, "table-img", "msg-user"], ["alt", "", 3, "src"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc"], [1, "material-icons"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) {
              return ctx.mobileMenuSidebarOpen($event, "overlay-open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "IoTs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
              return ctx.callSidemenuCollapse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() {
              return ctx.callFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "NOTIFICATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HeaderComponent_a_32_Template, 12, 4, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "View All Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Feedback ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Help ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_63_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notifications);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.sass']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]
          }, {
            type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/page-loader/page-loader.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
      \*************************************************************/

    /*! exports provided: PageLoaderComponent */

    /***/
    function srcAppLayoutPageLoaderPageLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function () {
        return PageLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

      var PageLoaderComponent = /*#__PURE__*/function () {
        function PageLoaderComponent() {
          _classCallCheck(this, PageLoaderComponent);
        }

        _createClass(PageLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLoaderComponent;
      }();

      PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
        return new (t || PageLoaderComponent)();
      };

      PageLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLoaderComponent,
        selectors: [["app-page-loader"]],
        decls: 1,
        vars: 1,
        consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-pulse", 3, "fullScreen"]],
        template: function PageLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-loader',
            templateUrl: './page-loader.component.html',
            styleUrls: ['./page-loader.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/right-sidebar/right-sidebar.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RightSidebarComponent */

    /***/
    function srcAppLayoutRightSidebarRightSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function () {
        return RightSidebarComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/rightsidebar.service */
      "./src/app/shared/services/rightsidebar.service.ts");
      /* harmony import */


      var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/config.service */
      "./src/app/shared/services/config.service.ts");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

      var _c0 = function _c0(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "actived": a0
        };
      };

      var RightSidebarComponent = /*#__PURE__*/function () {
        function RightSidebarComponent(document, renderer, elementRef, dataService, configService) {
          _classCallCheck(this, RightSidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.dataService = dataService;
          this.configService = configService;
          this.selectedBgColor = 'white';
          this.showpanel = false;
          this.isDarkSidebar = false;
          this.isDarTheme = false;
          this.config = {};
        }

        _createClass(RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.config = this.configService.configData;
            this.dataService.currentStatus.subscribe(function (data) {
              _this3.isOpenSidebar = data;
            });
            this.setRightSidebarWindowHeight();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // set header color on startup
            if (localStorage.getItem('choose_skin')) {
              this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
              this.selectedBgColor = localStorage.getItem('choose_skin_active');
            } else {
              this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
              this.selectedBgColor = this.config.layout.theme_color;
            }

            if (localStorage.getItem('menuOption')) {
              if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
              } else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
              } else {
                this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
              }
            } else {
              this.isDarkSidebar = this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }

            if (localStorage.getItem('theme')) {
              if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
              } else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
              } else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
              }
            } else {
              this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
          }
        }, {
          key: "selectTheme",
          value: function selectTheme(e) {
            this.selectedBgColor = e;
            var prevTheme = this.elementRef.nativeElement.querySelector('.right-sidebar .demo-choose-skin li.actived').getAttribute('data-theme');
            this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
            localStorage.setItem('choose_skin_active', this.selectedBgColor);
          }
        }, {
          key: "lightSidebarBtnClick",
          value: function lightSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            var menuOption = 'menu_light';
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkSidebarBtnClick",
          value: function darkSidebarBtnClick() {
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            var menuOption = 'menu_dark';
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "lightThemeBtnClick",
          value: function lightThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_dark');
            this.renderer.removeClass(this.document.body, 'logo-black');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
              this.renderer.addClass(this.document.body, 'theme-white');
            }

            this.renderer.addClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_light');
            this.renderer.addClass(this.document.body, 'logo-white');
            var theme = 'light';
            var menuOption = 'menu_light';
            this.selectedBgColor = 'white';
            this.isDarkSidebar = false;
            localStorage.setItem('choose_logoheader', 'logo-white');
            localStorage.setItem('choose_skin', 'theme-white');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "darkThemeBtnClick",
          value: function darkThemeBtnClick() {
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
            this.renderer.removeClass(this.document.body, 'menu_light');
            this.renderer.removeClass(this.document.body, 'logo-white');

            if (localStorage.getItem('choose_skin')) {
              this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
              this.renderer.addClass(this.document.body, 'theme-black');
            }

            this.renderer.addClass(this.document.body, 'dark');
            this.renderer.addClass(this.document.body, 'submenu-closed');
            this.renderer.addClass(this.document.body, 'menu_dark');
            this.renderer.addClass(this.document.body, 'logo-black');
            var theme = 'dark';
            var menuOption = 'menu_dark';
            this.selectedBgColor = 'black';
            this.isDarkSidebar = true;
            localStorage.setItem('choose_logoheader', 'logo-black');
            localStorage.setItem('choose_skin', 'theme-black');
            localStorage.setItem('theme', theme);
            localStorage.setItem('menuOption', menuOption);
          }
        }, {
          key: "setRightSidebarWindowHeight",
          value: function setRightSidebarWindowHeight() {
            var height = window.innerHeight - 137;
            this.maxHeight = height + '';
            this.maxWidth = '500px';
          }
        }, {
          key: "onClickedOutside",
          value: function onClickedOutside(event) {
            var button = event.target;

            if (button.id !== 'settingBtn') {
              if (this.dataService.currentStatus._isScalar === true) {
                this.toggleRightSidebar();
              }
            }
          }
        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.dataService.changeMsg(this.dataService.currentStatus._isScalar = !this.dataService.currentStatus._isScalar);
          }
        }]);

        return RightSidebarComponent;
      }();

      RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]));
      };

      RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        decls: 130,
        vars: 32,
        consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-nav-right"], ["role", "presentation"], ["href", "#skins", "data-toggle", "tab", 1, "active"], ["href", "#settings", "data-toggle", "tab"], [1, "tab-content"], ["role", "tabpanel", "id", "skins", 1, "tab-pane", "in", "active", "in", "active", "stretchLeft"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"], ["role", "tabpanel", "id", "settings", 1, "tab-pane", "stretchRight"], [1, "demo-settings", 3, "ngStyle", "perfectScrollbar"], [1, "setting-list"], ["checked", ""]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) {
              return ctx.onClickedOutside($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_div_click_1_listener() {
              return ctx.toggleRightSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SKINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "GENERAL SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Save History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Show Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Auto Submit Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Show Status To All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SIDEBAR MENU COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-button-toggle-group", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-button-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_53_listener() {
              return ctx.lightSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-button-toggle", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_55_listener() {
              return ctx.darkSidebarBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "THEME COLORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-button-toggle-group", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-button-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_61_listener() {
              return ctx.lightThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-button-toggle", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_63_listener() {
              return ctx.darkThemeBtnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "SKINS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_69_listener() {
              return ctx.selectTheme("white");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_71_listener() {
              return ctx.selectTheme("black");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_73_listener() {
              return ctx.selectTheme("purple");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_75_listener() {
              return ctx.selectTheme("blue");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_77_listener() {
              return ctx.selectTheme("cyan");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_79_listener() {
              return ctx.selectTheme("green");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_81_listener() {
              return ctx.selectTheme("orange");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Disk Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "26% remaining");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Server Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Highly Loaded");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "GENERAL SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "ul", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-slide-toggle", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Report Panel Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Email Redirect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "SYSTEM SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ul", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-slide-toggle", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Auto Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "ACCOUNT SETTINGS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ul", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Offline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-slide-toggle", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Location Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "open" : "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.isDarTheme ? "dark" : "light");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.selectedBgColor === "white"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.selectedBgColor === "black"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "purple"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "blue"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "cyan"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "green"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "orange"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RightSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.sass']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _shared_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"]
          }, {
            type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layout/sidebar/sidebar-items.ts":
    /*!*************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
      \*************************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppLayoutSidebarSidebarItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: '',
        title: 'Home',
        icon: 'fas fa-home',
        "class": 'menu-toggle',
        groupTitle: false,
        submenu: [{
          path: '/dashboard/main',
          title: 'Dashboard 1',
          icon: '',
          "class": 'ml-menu',
          groupTitle: false,
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    "./src/app/layout/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppLayoutSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _sidebar_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar-items */
      "./src/app/layout/sidebar/sidebar-items.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function SidebarComponent_li_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarItem_r1.title);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_13_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.callMenuToggle($event, sidebarItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, sidebarItem_r1["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, sidebarItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", sidebarItem_r1.title, " ");
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubsubItem_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, sidebarSubsubItem_r14["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, sidebarSubsubItem_r14.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sidebarSubsubItem_r14.title, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function SidebarComponent_li_13_ul_3_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_3_li_1_Template, 3, 7, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r12.showSubMenu === sidebarSubItem_r11.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarSubItem_r11.submenu);
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var sidebarSubItem_r11 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r16.callSubMenuToggle(sidebarSubItem_r11.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_li_1_ul_3_Template, 2, 4, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("activeSub", ctx_r10.showSubMenu === sidebarSubItem_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sidebarSubItem_r11.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
        }
      }

      function SidebarComponent_li_13_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 4, 11, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
        }
      }

      function SidebarComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 4, 10, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
        }
      }

      var _c2 = function _c2(a1, a2) {
        return {
          "position": "relative",
          "max-height": a1,
          "max-width": a2
        };
      };

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(document, renderer, elementRef) {
          _classCallCheck(this, SidebarComponent);

          this.document = document;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.showMenu = '';
          this.showSubMenu = '';
          this.headerHeight = 60;
        }

        _createClass(SidebarComponent, [{
          key: "windowResizecall",
          value: function windowResizecall(event) {
            this.setMenuHeight();
            this.checkStatuForResize(false);
          }
        }, {
          key: "onGlobalClick",
          value: function onGlobalClick(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.renderer.removeClass(this.document.body, 'overlay-open');
            }
          }
        }, {
          key: "callMenuToggle",
          value: function callMenuToggle(event, element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }

            var hasClass = event.target.classList.contains('toggled');

            if (hasClass) {
              this.renderer.removeClass(event.target, 'toggled');
            } else {
              this.renderer.addClass(event.target, 'toggled');
            }
          }
        }, {
          key: "callSubMenuToggle",
          value: function callSubMenuToggle(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (sidebarItem) {
              return sidebarItem;
            });
            this.initLeftSidebar();
            this.bodyTag = this.document.body;
          }
        }, {
          key: "initLeftSidebar",
          value: function initLeftSidebar() {
            var _this = this; // Set menu height


            _this.setMenuHeight();

            _this.checkStatuForResize(true); // Set Waves
            // Waves.attach('.menu .list a', ['waves-block']);
            // Waves.init();

          }
        }, {
          key: "setMenuHeight",
          value: function setMenuHeight() {
            this.innerHeight = window.innerHeight;
            var height = this.innerHeight - this.headerHeight;
            this.listMaxHeight = height + '';
            this.listMaxWidth = '500px';
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this.bodyTag.classList.contains('overlay-open');
          }
        }, {
          key: "checkStatuForResize",
          value: function checkStatuForResize(firstTime) {
            if (window.innerWidth < 1170) {
              this.renderer.addClass(this.document.body, 'ls-closed');
            } else {
              this.renderer.removeClass(this.document.body, 'ls-closed');
            }
          }
        }, {
          key: "mouseHover",
          value: function mouseHover(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('submenu-closed')) {
              this.renderer.addClass(this.document.body, 'side-closed-hover');
              this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
          }
        }, {
          key: "mouseOut",
          value: function mouseOut(e) {
            var body = this.elementRef.nativeElement.closest('body');

            if (body.classList.contains('side-closed-hover')) {
              this.renderer.removeClass(this.document.body, 'side-closed-hover');
              this.renderer.addClass(this.document.body, 'submenu-closed');
            }
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.windowResizecall($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onGlobalClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        decls: 14,
        vars: 5,
        consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["src", "assets/images/usrbig.jpg", "alt", "User Image", 1, "img-circle", "user-img-circle"], [1, "profile-usertitle"], [1, "sidebar-userpic-name", "font-weight-bold"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], [3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [1, "ml-menu"], [3, "activeSub", "routerLinkActive", 4, "ngFor", "ngForOf"], ["class", "collapse", 3, "ngClass", 4, "ngIf"], [1, "collapse", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) {
              return ctx.mouseHover($event);
            })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) {
              return ctx.mouseOut($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0E2D\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C\u0E1B\u0E32\u0E25\u0E4C\u0E21 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.sass']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          windowResizecall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
          }],
          onGlobalClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:mousedown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/config.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/config.service.ts ***!
      \***************************************************/

    /*! exports provided: ConfigService */

    /***/
    function srcAppSharedServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConfigService = /*#__PURE__*/function () {
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.setConfigData();
        }

        _createClass(ConfigService, [{
          key: "setConfigData",
          value: function setConfigData() {
            this.configData = {
              layout: {
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                  collapsed: false,
                  backgroundColor: 'light'
                }
              }
            };
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || ConfigService)();
      };

      ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigService,
        factory: ConfigService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/dynamic-script-loader.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/dynamic-script-loader.service.ts ***!
      \******************************************************************/

    /*! exports provided: ScriptStore, DynamicScriptLoaderService */

    /***/
    function srcAppSharedServicesDynamicScriptLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScriptStore", function () {
        return ScriptStore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function () {
        return DynamicScriptLoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ScriptStore = [{
        name: 'lightgallery',
        src: 'assets/js/bundles/lightgallery/dist/js/lightgallery-all.min.js'
      }];

      var DynamicScriptLoaderService = /*#__PURE__*/function () {
        function DynamicScriptLoaderService() {
          var _this4 = this;

          _classCallCheck(this, DynamicScriptLoaderService);

          this.scripts = {};
          ScriptStore.forEach(function (script) {
            _this4.scripts[script.name] = {
              loaded: false,
              src: script.src
            };
          });
        }

        _createClass(DynamicScriptLoaderService, [{
          key: "load",
          value: function load() {
            var _this5 = this;

            var promises = [];

            for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
              scripts[_key] = arguments[_key];
            }

            scripts.forEach(function (script) {
              return promises.push(_this5.loadScript(script));
            });
            return Promise.all(promises);
          }
        }, {
          key: "loadScript",
          value: function loadScript(name) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              if (!_this6.scripts[name].loaded) {
                // load script
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = _this6.scripts[name].src;

                if (script.readyState) {
                  // IE
                  script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      _this6.scripts[name].loaded = true;
                      resolve({
                        script: name,
                        loaded: true,
                        status: 'Loaded'
                      });
                    }
                  };
                } else {
                  // Others
                  script.onload = function () {
                    _this6.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  };
                }

                script.onerror = function (error) {
                  return resolve({
                    script: name,
                    loaded: false,
                    status: 'Loaded'
                  });
                };

                document.getElementsByTagName('head')[0].appendChild(script);
              } else {
                resolve({
                  script: name,
                  loaded: true,
                  status: 'Already Loaded'
                });
              }
            });
          }
        }]);

        return DynamicScriptLoaderService;
      }();

      DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) {
        return new (t || DynamicScriptLoaderService)();
      };

      DynamicScriptLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicScriptLoaderService,
        factory: DynamicScriptLoaderService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicScriptLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/rightsidebar.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/services/rightsidebar.service.ts ***!
      \*********************************************************/

    /*! exports provided: RightSidebarService */

    /***/
    function srcAppSharedServicesRightsidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarService", function () {
        return RightSidebarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var RightSidebarService = /*#__PURE__*/function () {
        function RightSidebarService() {
          _classCallCheck(this, RightSidebarService);

          this.statusService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.currentStatus = this.statusService.asObservable();
        }

        _createClass(RightSidebarService, [{
          key: "changeMsg",
          value: function changeMsg(msg) {
            this.statusService.next(msg);
          }
        }]);

        return RightSidebarService;
      }();

      RightSidebarService.ɵfac = function RightSidebarService_Factory(t) {
        return new (t || RightSidebarService)();
      };

      RightSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RightSidebarService,
        factory: RightSidebarService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
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
        production: false
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
      /*! /Users/rachata/Downloads/cliniva/source/cliniva-starter/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map