(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
    /***/
    "./src/app/authentication/authentication-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/authentication-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthenticationRoutingModule */

    /***/
    function srcAppAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
        return AuthenticationRoutingModule;
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


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signin/signin.component */
      "./src/app/authentication/signin/signin.component.ts");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup/signup.component */
      "./src/app/authentication/signup/signup.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }];

      var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
        _classCallCheck(this, AuthenticationRoutingModule);
      };

      AuthenticationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthenticationRoutingModule
      });
      AuthenticationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthenticationRoutingModule_Factory(t) {
          return new (t || AuthenticationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationRoutingModule, [{
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
    "./src/app/authentication/authentication.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication-routing.module */
      "./src/app/authentication/authentication-routing.module.ts");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signin/signin.component */
      "./src/app/authentication/signin/signin.component.ts");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup/signup.component */
      "./src/app/authentication/signup/signup.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthenticationModule
      });
      AuthenticationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthenticationModule_Factory(t) {
          return new (t || AuthenticationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationModule, {
          declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/signin/signin.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signin/signin.component.ts ***!
      \***********************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function srcAppAuthenticationSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(formBuilder, route, router) {
          _classCallCheck(this, SigninComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.submitted = false;
          this.hide = true;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: [''],
              password: ['']
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.router.navigate(['/dashboard/main']);
            }
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.??fac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SigninComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 47,
        vars: 1,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "pb-5"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username"], ["matSuffix", ""], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], ["routerLink", "/authentication/forgot-password", 1, "txt1"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-30", "p-b-20"], [1, "txt3"], ["routerLink", "/authentication/signup"], [1, "login100-form-social", "flex-c-m"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg1", "m-r-5"], [1, "fab", "fa-facebook-f"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg2", "m-r-5"], [1, "fab", "fa-twitter"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-01.png')"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " sign up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/signup/signup.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function srcAppAuthenticationSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function SignupComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Confirm Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(formBuilder, route, router) {
          _classCallCheck(this, SignupComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.submitted = false;
          this.hide = true;
          this.chide = true;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.router.navigate(['/dashboard/main']);
            }
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.??fac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 52,
        vars: 9,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-30"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], ["routerLink", "/authentication/signin"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-30", "p-b-20"], [1, "txt2"], [1, "login100-form-social", "flex-c-m"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg1", "m-r-5"], [1, "fab", "fa-facebook-f"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg2", "m-r-5"], [1, "fab", "fa-twitter"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-02.png')"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, SignupComponent_mat_error_12_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, SignupComponent_mat_error_19_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_24_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SignupComponent_mat_error_26_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_31_listener() {
              return ctx.chide = !ctx.chide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, SignupComponent_mat_error_33_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Already Registered? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " or sign up using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("username").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("email").hasError("required") || ctx.loginForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.chide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.chide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("cpassword").hasError("required"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=authentication-authentication-module-es5.js.map