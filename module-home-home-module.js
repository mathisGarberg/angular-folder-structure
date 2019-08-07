(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/module/home/modal/my-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/home/modal/my-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n<h4 class=\"modal-title\">My Modal</h4>\n<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(this.id)\">\n    <span aria-hidden=\"true\">&times;</span>\n</button>\n</div>\n<div class=\"modal-body\">\n<p>Hello World!</p>\n</div>\n<div class=\"modal-footer\">\n<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close(this.id)\">Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/module/home/page/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/home/page/home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <button class=\"btn btn-primary\" (click)=\"openMyModal()\">Open Modal</button>\n    <h1>Projects</h1>\n\n    <ngx-masonry [useImagesLoaded]=\"true\" [options]=\"{ transitionDuration: '0.8s' }\">\n      <ngxMasonryItem class=\"masonry-item\" *ngFor=\"let project of projects$ | async\">\n        <app-project-item [project]=\"project\"></app-project-item>\n      </ngxMasonryItem>\n    </ngx-masonry>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/module/home/page/project-details/project-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/home/page/project-details/project-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"custom-card front\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{ (project$ | async)?.title }}</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image [src]=\"(project$ | async)?.thumbnail\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button class=\"active\" mat-button>READ MORE</button>\n    <button class=\"active\" mat-button>{{ (project$ | async)?.id }}</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/module/home/page/project-item/project-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/home/page/project-item/project-item.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card-container'>\n  <div class='flippable-card' [ngClass]=\"{'flipped':flipped}\">\n    <mat-card class=\"custom-card front\" *ngIf=\"!flipped\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{ project.title }}</mat-card-title>\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image [src]=\"project.thumbnail\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button class=\"active\" mat-button (click)='flipped = !flipped'>READ MORE</button>\n        <button class=\"active\" mat-button [routerLink]=\"['/dashboard/projects/', project.id]\">{{ project.id }}</button>\n      </mat-card-actions>\n    </mat-card>\n    <mat-card class=\"custom-card back\" *ngIf=\"flipped\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{ project.title }}</mat-card-title>\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button class=\"active\" mat-button (click)='flipped = !flipped'>READ MORE</button>\n        <button class=\"active\" mat-button>SHARE</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/data/schema/project.ts":
/*!****************************************!*\
  !*** ./src/app/data/schema/project.ts ***!
  \****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/data/service/json-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/data/service/json-api.service.ts ***!
  \**************************************************/
/*! exports provided: JsonApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonApiService", function() { return JsonApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/data.json */ "./src/app/data/service/json/data.json");
var _json_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/data.json */ "./src/app/data/service/json/data.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JsonApiService = /** @class */ (function () {
    function JsonApiService() {
    }
    JsonApiService.prototype.get = function (url) {
        switch (url) {
            case '/projects':
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_json_data_json__WEBPACK_IMPORTED_MODULE_2__.projects);
            default:
                var id = url.substring(url.lastIndexOf('/') + 1);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_json_data_json__WEBPACK_IMPORTED_MODULE_2__.projects[id]);
        }
    };
    JsonApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], JsonApiService);
    return JsonApiService;
}());



/***/ }),

/***/ "./src/app/data/service/json/data.json":
/*!*********************************************!*\
  !*** ./src/app/data/service/json/data.json ***!
  \*********************************************/
/*! exports provided: projects, default */
/***/ (function(module) {

module.exports = {"projects":[{"id":1,"thumbnail":"https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","title":"Online e-merchant management system - attaching integration with the iOS"},{"id":2,"thumbnail":"https://images.unsplash.com/photo-1521109762031-b71a005c25b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80","title":"Notes on pipeline upgrade"},{"id":3,"thumbnail":"https://images.unsplash.com/photo-1531504060587-e6811129c0f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80","title":"Assessment report for merchant account"},{"id":1,"thumbnail":"https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80","title":"Online e-merchant management system - attaching integration with the iOS"},{"id":2,"thumbnail":"https://images.unsplash.com/photo-1518124880777-cf8c82231ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1404&q=80","title":"Notes on pipeline upgrade"},{"id":3,"thumbnail":"https://images.unsplash.com/photo-1531504060587-e6811129c0f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80","title":"Assessment report for merchant account"}]};

/***/ }),

/***/ "./src/app/data/service/project.service.ts":
/*!*************************************************!*\
  !*** ./src/app/data/service/project.service.ts ***!
  \*************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-api.service */ "./src/app/data/service/json-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    ProjectService.prototype.getAll = function () {
        return this.jsonApiService.get('/projects');
    };
    ProjectService.prototype.getSingle = function (id) {
        return this.jsonApiService.get('/projects/' + id);
    };
    ProjectService.ctorParameters = function () { return [
        { type: _json_api_service__WEBPACK_IMPORTED_MODULE_1__["JsonApiService"] }
    ]; };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_json_api_service__WEBPACK_IMPORTED_MODULE_1__["JsonApiService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/module/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/module/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_my_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/my-modal.component */ "./src/app/module/home/modal/my-modal.component.ts");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/home.component */ "./src/app/module/home/page/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.routing */ "./src/app/module/home/home.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _page_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/project-item/project-item.component */ "./src/app/module/home/page/project-item/project-item.component.ts");
/* harmony import */ var _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/project-details/project-details.component */ "./src/app/module/home/page/project-details/project-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _page_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _modal_my_modal_component__WEBPACK_IMPORTED_MODULE_1__["MyModalComponent"],
                _page_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__["ProjectItemComponent"],
                _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _home_routing__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
            ],
            exports: [],
            providers: [],
            entryComponents: [_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_1__["MyModalComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/module/home/home.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/module/home/home.routing.ts ***!
  \*********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-resolver.service */ "./src/app/module/home/project-resolver.service.ts");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home.component */ "./src/app/module/home/page/home.component.ts");
/* harmony import */ var _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/project-details/project-details.component */ "./src/app/module/home/page/project-details/project-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: _page_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'projects/:id',
                component: _page_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailsComponent"],
                resolve: {
                    project: _project_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ProjectResolver"]
                }
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/module/home/modal/my-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/module/home/modal/my-modal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9ob21lL21vZGFsL215LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module/home/modal/my-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/home/modal/my-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalComponent", function() { return MyModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyModalComponent = /** @class */ (function () {
    function MyModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    MyModalComponent.prototype.ngOnInit = function () {
        console.log(this.id);
    };
    MyModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MyModalComponent.prototype, "id", void 0);
    MyModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-modal',
            template: __webpack_require__(/*! raw-loader!./my-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/home/modal/my-modal.component.html"),
            styles: [__webpack_require__(/*! ./my-modal.component.scss */ "./src/app/module/home/modal/my-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], MyModalComponent);
    return MyModalComponent;
}());



/***/ }),

/***/ "./src/app/module/home/page/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/module/home/page/home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masonry-item {\n  width: 350px;\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b20uaC5hbmRlcnNvbi9Qcm9qZWN0cy9hcGlza2VsZXRvbnMvYW5ndWxhci1mb2xkZXItc3RydWN0dXJlMi9zcmMvYXBwL21vZHVsZS9ob21lL3BhZ2UvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlL2hvbWUvcGFnZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9ob21lL3BhZ2UvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiIsIi5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/module/home/page/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/module/home/page/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/service/project.service */ "./src/app/data/service/project.service.ts");
/* harmony import */ var _modal_my_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/my-modal.component */ "./src/app/module/home/modal/my-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, projectService) {
        this.modalService = modalService;
        this.projectService = projectService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadProjects();
    };
    HomeComponent.prototype.loadProjects = function () {
        this.projects$ = this.projectService.getAll();
    };
    HomeComponent.prototype.openMyModal = function () {
        var modalRef = this.modalService.open(_modal_my_modal_component__WEBPACK_IMPORTED_MODULE_3__["MyModalComponent"]);
        modalRef.componentInstance.id = 1;
        modalRef.result.then(function (result) {
            console.log(result);
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: _data_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/home/page/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/module/home/page/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _data_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/module/home/page/project-details/project-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/module/home/page/project-details/project-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9ob21lL3BhZ2UvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module/home/page/project-details/project-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/module/home/page/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route) {
        this.route = route;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.project$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.project; }));
    };
    ProjectDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! raw-loader!./project-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/home/page/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.scss */ "./src/app/module/home/page/project-details/project-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/module/home/page/project-item/project-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/module/home/page/project-item/project-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n===============\n   Flip Card\n===============\n*/\n.card-container {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n}\n.flippable-card {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n.flippable-card mat-card {\n  margin: 0;\n  display: block;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.flippable-card .back {\n  background: #23262d;\n  color: #FFF;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.flippable-card.flipped {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b20uaC5hbmRlcnNvbi9Qcm9qZWN0cy9hcGlza2VsZXRvbnMvYW5ndWxhci1mb2xkZXItc3RydWN0dXJlMi9zcmMvYXBwL21vZHVsZS9ob21lL3BhZ2UvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlL2hvbWUvcGFnZS9wcm9qZWN0LWl0ZW0vcHJvamVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBQUE7QUFLQTtFQUNJLDBCQUFBO1VBQUEsa0JBQUE7QUNDSjtBREVBO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7RUFBQSw4Q0FBQTtBQ0NKO0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0NKO0FERUE7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUvaG9tZS9wYWdlL3Byb2plY3QtaXRlbS9wcm9qZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuPT09PT09PT09PT09PT09XG4gICBGbGlwIENhcmRcbj09PT09PT09PT09PT09PVxuKi9cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xufVxuXG4uZmxpcHBhYmxlLWNhcmQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xufVxuXG4uZmxpcHBhYmxlLWNhcmQgbWF0LWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwcGFibGUtY2FyZCAuYmFjayB7XG4gICAgYmFja2dyb3VuZDogIzIzMjYyZDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXBwYWJsZS1jYXJkLmZsaXBwZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSIsIi8qXG49PT09PT09PT09PT09PT1cbiAgIEZsaXAgQ2FyZFxuPT09PT09PT09PT09PT09XG4qL1xuLmNhcmQtY29udGFpbmVyIHtcbiAgcGVyc3BlY3RpdmU6IDgwMHB4O1xufVxuXG4uZmxpcHBhYmxlLWNhcmQge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG5cbi5mbGlwcGFibGUtY2FyZCBtYXQtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZsaXBwYWJsZS1jYXJkIC5iYWNrIHtcbiAgYmFja2dyb3VuZDogIzIzMjYyZDtcbiAgY29sb3I6ICNGRkY7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcHBhYmxlLWNhcmQuZmxpcHBlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/module/home/page/project-item/project-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/module/home/page/project-item/project-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItemComponent", function() { return ProjectItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_schema_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/schema/project */ "./src/app/data/schema/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectItemComponent = /** @class */ (function () {
    function ProjectItemComponent() {
        this.flipped = false;
    }
    ProjectItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_schema_project__WEBPACK_IMPORTED_MODULE_1__["Project"])
    ], ProjectItemComponent.prototype, "project", void 0);
    ProjectItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-item',
            template: __webpack_require__(/*! raw-loader!./project-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/home/page/project-item/project-item.component.html"),
            styles: [__webpack_require__(/*! ./project-item.component.scss */ "./src/app/module/home/page/project-item/project-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectItemComponent);
    return ProjectItemComponent;
}());



/***/ }),

/***/ "./src/app/module/home/project-resolver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/home/project-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: ProjectResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectResolver", function() { return ProjectResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/service/project.service */ "./src/app/data/service/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectResolver = /** @class */ (function () {
    function ProjectResolver(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    ProjectResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.projectService.getSingle(route.params['id'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ProjectResolver.ctorParameters = function () { return [
        { type: _data_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ProjectResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectResolver);
    return ProjectResolver;
}());



/***/ })

}]);
//# sourceMappingURL=module-home-home-module.js.map