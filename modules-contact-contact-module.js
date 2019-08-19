(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/contact/page/contact/contact.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/contact/page/contact/contact.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"content\">\n  <h1>\n    Contact Angular Folder Structure\n  </h1>\n\n  <p>\n    The best way to contact this project is by\n    <a href=\"https://github.com/mathisGarberg/angular-folder-structure/issues\">\n      opening an issue\n    </a> on the repository.\n  </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/contact/contact-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/contact/contact-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutes", function() { return ContactRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/modules/contact/page/contact/contact.component.ts");


var routes = [
    {
        path: '',
        component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    }
];
var ContactRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/contact/contact.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/modules/contact/contact-routing.module.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/modules/contact/page/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
            imports: [
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactRoutes"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/modules/contact/page/contact/contact.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/contact/page/contact/contact.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250YWN0L3BhZ2UvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbnRhY3QvcGFnZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/contact/page/contact/contact.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/contact/page/contact/contact.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/contact/page/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/modules/contact/page/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-contact-contact-module.js.map