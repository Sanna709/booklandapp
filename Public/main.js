(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#signupbox {\r\n    margin-top: 30px;\r\n}\r\n\r\n#signupbox > div:first-child {        \r\n    padding-bottom: 10px;    \r\n}\r\n\r\n#form > div {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#form > div:last-child {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nbody,h1 {font-family: \"Raleway\", sans-serif}\r\n\r\nbody, html {height: 100%}\r\n\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    overflow-y: auto\r\n}\r\n\r\n.loader {\r\n    border: 8px solid #f3f3f3; /* Light grey */\r\n    border-top: 8px solid grey; /* Blue */\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-animate-opacity\">\r\n    <br>\r\n    <div id=\"signup\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 \">\r\n        <h1 class=\"\" style=\"text-align:center;color:black\">\r\n            <i class=\"fab fa-blogger-b\" style=\"color:black\"></i>ookland</h1>\r\n        <hr>\r\n        <h1 style=\"text-align:center;color:black\">Add New Listing\r\n            <i class=\"fas fa-book-open\" style=\"color:black\"></i>\r\n        </h1>\r\n        <hr>\r\n        <form ngNativeValidate name=\"form\" (ngSubmit)=\"upload(content)\" #heroForm=\"ngForm\" id=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Book Name</span>\r\n                <input [(ngModel)]=addData.BookName id=\"BookName\" type=\"text\" class=\"form-control\" required name=\"BookName\" placeholder=\"Enter Book Name\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Author Name</span>\r\n                <input [(ngModel)]=addData.AuthorName id=\"AuthorName\" type=\"text\" class=\"form-control\" required name=\"AuthorName\" placeholder=\"Enter Author Name\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Price</span>\r\n                <input [(ngModel)]=addData.Price id=\"Price\" type=\"text\" class=\"form-control\" required name=\"Price\" placeholder=\"Enter Price\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Condition</span>\r\n                <label style=\"background-color: whitesmoke; width:550px;height:32px;margin: auto;text-align: center;padding-top:5px\">\r\n                    <input [(ngModel)]=addData.condition type=\"radio\" required name=\"Condition\" value=\"New\"> New &nbsp; &nbsp;\r\n                    <input [(ngModel)]=addData.condition type=\"radio\" required name=\"Condition\" value=\"Almost New\"> Almost New &nbsp; &nbsp;\r\n                    <input [(ngModel)]=addData.condition type=\"radio\" required name=\"Condition\" value=\"Slight Damage\"> Slight Damage &nbsp; &nbsp;\r\n                    <input [(ngModel)]=addData.condition type=\"radio\" required name=\"Condition\" value=\"Worn\"> Worn &nbsp; &nbsp;\r\n                </label>\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Photo</span>\r\n                <input id=\"Photo\" type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\" required name=\"Photo\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Seller</span>\r\n                <input [value]=\"name\" id=\"Seller\" type=\"text\" class=\"form-control\" required name=\"Seller\" disabled>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-12 controls text-center\">\r\n                    <!-- <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                        <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h4 class=\"modal-title\">Modal title</h4>\r\n                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <p>One fine body&hellip;</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                        </div>\r\n                    </ng-template> -->\r\n                    <button [disabled]=\"!heroForm.form.valid\" class=\"btn btn-primary\">\r\n                        Add\r\n                        <i class=\"fas fa-plus-circle\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"Load\" class=\"loader\" style=\"margin: auto\"></div>\r\n            <hr>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.ts ***!
  \******************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListingComponent = /** @class */ (function () {
    function AddListingComponent(_add, route) {
        this._add = _add;
        this.route = route;
        this.name = sessionStorage.getItem("key");
        this.selectedFile = null;
        this.fd = new FormData();
        this.Load = false;
        this.addData = { "Seller": sessionStorage.getItem("key"), "userTableId": sessionStorage.getItem("key2") };
    }
    AddListingComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("key") != null) {
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    AddListingComponent.prototype.upload = function (content) {
        var _this = this;
        // this.modalService.open(content, { centered: true });
        this.Load = true;
        this.fd.append("Image", this.selectedFile);
        this._add.Upload(this.fd)
            .subscribe(function (res) {
            // console.log(res["secure_url"])
            _this.path = res["secure_url"];
            _this.add();
        });
    };
    AddListingComponent.prototype.add = function () {
        var _this = this;
        this.addData["Photo"] = this.path;
        // console.log(this.addData)
        this._add.Add(this.addData)
            .subscribe(function (res) {
            _this.Load = false;
            alert("New Listing Added Successfully!!");
            _this.route.navigate(['listing']);
        }, function (err) {
            _this.Load = false;
            alert("You have already added the same listing Before!!");
            _this.route.navigate(['listing']);
        });
    };
    AddListingComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(/*! ./add-listing.component.html */ "./src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__(/*! ./add-listing.component.css */ "./src/app/add-listing/add-listing.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddListingComponent);
    return AddListingComponent;
}());



/***/ }),

/***/ "./src/app/all-listing/all-listing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/all-listing/all-listing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    overflow-y: auto\r\n    /* opacity:0.5 ; */\r\n}\r\n.slidecontainer {\r\n    width: 100%;\r\n}\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 10px;\r\n    border-radius: 5px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 23px;\r\n    height: 24px;\r\n    border: 0;\r\n    background: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    cursor: pointer;\r\n}\r\n.slider::-moz-range-thumb {\r\n    width: 23px;\r\n    height: 24px;\r\n    border: 0;\r\n    background: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/all-listing/all-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/all-listing/all-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-text-white\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col\"></div>\n      <h1 class=\"\" style=\"text-align:center;\">\n        <i class=\"fab fa-blogger-b\"></i>ookland</h1>\n      <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\" style=\"background-color: rgb(0,0,0,0.5);margin-bottom: 20px\">\n\n      <div class=\"col\" style=\"margin-top:40px;margin-left:40px\">\n        <h1>\n          <i class=\"fas fa-filter\"></i> Filters :\n        </h1>\n      </div>\n\n      <div class=\"col\" style=\"margin-top: 40px;\">Book Name : \n        <input type=\"text\" [(ngModel)]=Book.name name=\"name\" (ngModelChange)=\"BookChange()\" class=\"form-control\" style=\"color: black;margin-top: 10px\" placeholder=\"Search.....\">\n      </div>\n\n      <div class=\"col\" style=\"margin-top: 40px;\">Author Name : \n          <input type=\"text\" [(ngModel)]=Author.name name=\"name\" (ngModelChange)=\"AuthorChange()\" class=\"form-control\" style=\"color: black;margin-top: 10px\" placeholder=\"Search.....\">\n        </div>\n\n      <div class=\"col\" style=\"margin-top:20px\">Price :\n        <div class=\"slidecontainer\" style=\"margin-top:20px\">\n          <input [(ngModel)]=MaxPrice.range (ngModelChange)=\"PriceChange()\" type=\"range\" name=\"range\" min=\"0\" max=\"2000\" value=\"1000\" class=\"slider\" id=\"myRange\">\n        </div>\n        <button type=\"button\" style=\"margin-top:25px;margin-right: 10px;margin-left: 10px;\" class=\"btn btn-dark \" disabled>Max Price :</button>\n        <button type=\"button\" style=\"margin-top:25px\" class=\"btn btn-dark \" disabled>{{MaxPrice[\"range\"]}}</button>\n      </div>\n\n      <div class=\"col\" style=\"margin-top:20px;margin-bottom: 20px\">Condition :\n        <br>\n        <input [(ngModel)]=Condition.condition0  (ngModelChange)=\"Change()\" type=\"checkbox\" name=\"condition0\" value=\"All\" checked> All\n        <br>\n        <input [(ngModel)]=Condition.condition1 (ngModelChange)=\"Change()\" type=\"checkbox\" name=\"condition1\" value=\"New\"> New\n        <br>\n        <input [(ngModel)]=Condition.condition2 (ngModelChange)=\"Change()\" type=\"checkbox\" name=\"condition2\" value=\"Almost New\"> Almost New\n        <br>\n        <input [(ngModel)]=Condition.condition3 (ngModelChange)=\"Change()\" type=\"checkbox\" name=\"condition3\" value=\" Slight Damage\"> Slight Damage\n        <br>\n        <input [(ngModel)]=Condition.condition4 (ngModelChange)=\"Change()\" type=\"checkbox\" name=\"condition4\" value=\" Worn\"> Worn\n      </div>\n    </div>\n\n    <div class=\"row\" id=\"booklist\">\n      <div class=\"card mx-2 p-4\" style=\"background-color: rgb(0,0,0,0.5);margin-bottom: 20px\" *ngFor=\"let data of listdata\">\n        <img class=\"card-img-top\" src={{data.Photo}} alt=\"Card image cap\" style=\"width: 200px;height:150px\">\n        <div class=\"card-body\">\n          <h5 style=\"text-align: center\" class=\"card-title\">\n            <b>{{data.BookName}}</b>\n          </h5>\n          <p style=\"text-align: center\" class=\"card-text\">By : {{data.AuthorName}}</p>\n          <p style=\"text-align: center\" class=\"card-text\">Rs.{{data.Price}}</p>\n          <p style=\"text-align: center\" class=\"card-text\">\n            <button class=\"btn btn-primary\" [id]=\"data.BookId\" (click)=\"onclick($event)\" style=\"width:130px;align-content:center;margin-right:5px\">View Details</button>\n            <button class=\"btn btn-bodorless\" (click)=\"addtowishlist($event)\" [name]=\"data.BookId\" style=\"background-color: rgb(255,255,255,0.5)\">\n              <i  class=\"fas fa-bookmark fa-2x\"></i>\n            </button>\n          </p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/all-listing/all-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/all-listing/all-listing.component.ts ***!
  \******************************************************/
/*! exports provided: AllListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllListingComponent", function() { return AllListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { WSAEDQUOT } from 'constants';
var AllListingComponent = /** @class */ (function () {
    function AllListingComponent(_listing, _wishlist, route) {
        this._listing = _listing;
        this._wishlist = _wishlist;
        this.route = route;
        this.Book = { "name": "" };
        this.Author = { "name": "" };
        this.MaxPrice = { "range": "1000" };
        this.Condition = { condition0: true, condition1: false, condition2: false, condition3: false, condition4: false };
        this.arr = [];
        this.wishlistData = { "myid": sessionStorage.getItem("key2") };
    }
    AllListingComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("key") != null) {
            this.Change();
            this.alllisting();
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    AllListingComponent.prototype.onclick = function (event) {
        this.iddata = event.currentTarget.id;
        this.route.navigate(['/detaillisting/' + this.iddata]);
    };
    AllListingComponent.prototype.PriceChange = function () {
        this.alllisting();
    };
    AllListingComponent.prototype.Change = function () {
        if (this.Condition["condition0"] == true) {
            this.arr.push("New", "Almost New", "Slight Damage", "Worn");
        }
        else {
            this.arr = [];
            if (this.Condition["condition1"] == true) {
                this.arr.push("New");
            }
            if (this.Condition["condition2"] == true) {
                this.arr.push("Almost New");
            }
            if (this.Condition["condition3"] == true) {
                this.arr.push("Slight Damage");
            }
            if (this.Condition["condition4"] == true) {
                this.arr.push("Worn");
            }
        }
        this.alllisting();
    };
    AllListingComponent.prototype.BookChange = function () {
        this.alllisting();
    };
    AllListingComponent.prototype.AuthorChange = function () {
        this.alllisting();
    };
    AllListingComponent.prototype.alllisting = function () {
        var _this = this;
        this._listing.AllListing({ max: this.MaxPrice["range"], con: this.arr, book: this.Book["name"], author: this.Author["name"] })
            .subscribe(function (res) {
            _this.listdata = res;
            // console.log(this.listdata)
        }, function (err) { return alert("Data Not Found!!"); });
    };
    AllListingComponent.prototype.addtowishlist = function (event) {
        this.wishlistData["bookid"] = event.currentTarget.name;
        // console.log(this.wishlistData);
        this._wishlist.AddWishlist(this.wishlistData)
            .subscribe(function (res) {
            alert("Added to Wishlist");
        }, function (err) { return alert("Already Present in the WishList"); });
    };
    AllListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-listing',
            template: __webpack_require__(/*! ./all-listing.component.html */ "./src/app/all-listing/all-listing.component.html"),
            styles: [__webpack_require__(/*! ./all-listing.component.css */ "./src/app/all-listing/all-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"], _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllListingComponent);
    return AllListingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container-fluid\">\n  <app-header-tab></app-header-tab>\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n    <!-- <app-body-tab></app-body-tab> -->\n    <!-- <app-signup></app-signup> -->\n    <!-- <app-login></app-login> -->\n  </div>\n  <app-footer-tab></app-footer-tab>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EqualValidator } from './equal-validator.directive';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_tab_header_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-tab/header-tab.component */ "./src/app/header-tab/header-tab.component.ts");
/* harmony import */ var _body_tab_body_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body-tab/body-tab.component */ "./src/app/body-tab/body-tab.component.ts");
/* harmony import */ var _footer_tab_footer_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-tab/footer-tab.component */ "./src/app/footer-tab/footer-tab.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./all-listing/all-listing.component */ "./src/app/all-listing/all-listing.component.ts");
/* harmony import */ var _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _detail_listing_detail_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detail-listing/detail-listing.component */ "./src/app/detail-listing/detail-listing.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _data_sharing_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-sharing.service */ "./src/app/data-sharing.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _message_send_message_send_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message-send/message-send.component */ "./src/app/message-send/message-send.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _body_tab_body_tab_component__WEBPACK_IMPORTED_MODULE_4__["BodyTabComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    },
    {
        path: 'listing',
        component: _all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_13__["AllListingComponent"]
    },
    {
        path: 'detaillisting/:id',
        component: _detail_listing_detail_listing_component__WEBPACK_IMPORTED_MODULE_16__["DetailListingComponent"]
    },
    {
        path: 'addlisting',
        component: _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_14__["AddListingComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__["WishlistComponent"]
    },
    {
        path: 'sendmsg/:id',
        component: _message_send_message_send_component__WEBPACK_IMPORTED_MODULE_21__["MessageSendComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_tab_header_tab_component__WEBPACK_IMPORTED_MODULE_3__["HeaderTabComponent"],
                _body_tab_body_tab_component__WEBPACK_IMPORTED_MODULE_4__["BodyTabComponent"],
                _footer_tab_footer_tab_component__WEBPACK_IMPORTED_MODULE_5__["FooterTabComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _all_listing_all_listing_component__WEBPACK_IMPORTED_MODULE_13__["AllListingComponent"],
                _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_14__["AddListingComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"],
                _detail_listing_detail_listing_component__WEBPACK_IMPORTED_MODULE_16__["DetailListingComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_17__["WishlistComponent"],
                _message_send_message_send_component__WEBPACK_IMPORTED_MODULE_21__["MessageSendComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ],
            providers: [_signup_service__WEBPACK_IMPORTED_MODULE_11__["SignupService"], _listing_service__WEBPACK_IMPORTED_MODULE_18__["ListingService"], _wishlist_service__WEBPACK_IMPORTED_MODULE_12__["WishlistService"], _data_sharing_service__WEBPACK_IMPORTED_MODULE_19__["DataSharingService"], _message_service__WEBPACK_IMPORTED_MODULE_20__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body-tab/body-tab.component.css":
/*!*************************************************!*\
  !*** ./src/app/body-tab/body-tab.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/body-tab/body-tab.component.html":
/*!**************************************************!*\
  !*** ./src/app/body-tab/body-tab.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-animate-opacity w3-text-white\">\r\n        <div class=\"w3-display-middle\">\r\n          <h1 class=\"w3-jumbo w3-animate-top\" style=\"text-align: center ;color:black\"> <i class=\"fab fa-blogger-b\" style=\"color:black\"></i>ookland</h1>\r\n          <hr class=\"w3-border-grey\" style=\"margin:auto;width:40%\">\r\n          <p class=\"w3-large w3-center\" style=\"color:black\">Store for Book Lover's..........</p>\r\n        </div>\r\n\r\n        \r\n        <!-- <div class=\"w3-display-bottomleft w3-padding-large\">\r\n          Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a>\r\n        </div> -->\r\n      </div>"

/***/ }),

/***/ "./src/app/body-tab/body-tab.component.ts":
/*!************************************************!*\
  !*** ./src/app/body-tab/body-tab.component.ts ***!
  \************************************************/
/*! exports provided: BodyTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyTabComponent", function() { return BodyTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyTabComponent = /** @class */ (function () {
    function BodyTabComponent() {
    }
    BodyTabComponent.prototype.ngOnInit = function () {
    };
    BodyTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-tab',
            template: __webpack_require__(/*! ./body-tab.component.html */ "./src/app/body-tab/body-tab.component.html"),
            styles: [__webpack_require__(/*! ./body-tab.component.css */ "./src/app/body-tab/body-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyTabComponent);
    return BodyTabComponent;
}());



/***/ }),

/***/ "./src/app/data-sharing.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-sharing.service.ts ***!
  \*****************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataSharingService = /** @class */ (function () {
    function DataSharingService() {
        this.isUserLoggedIn = false;
    }
    DataSharingService.prototype.setLoggedInUser = function (flag) {
        this.isUserLoggedIn = flag;
    };
    DataSharingService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    DataSharingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataSharingService);
    return DataSharingService;
}());



/***/ }),

/***/ "./src/app/detail-listing/detail-listing.component.css":
/*!*************************************************************!*\
  !*** ./src/app/detail-listing/detail-listing.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    /* overflow-y: auto */\r\n    /* opacity:0.5 ; */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/detail-listing/detail-listing.component.html":
/*!**************************************************************!*\
  !*** ./src/app/detail-listing/detail-listing.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-text-white\">\n  <div class=\"container\">\n\n    <div class=\"row\" style=\"color: black\">\n      <div class=\"col\"></div>\n      <h1 class=\"\" style=\"text-align:center;\">\n        <i class=\"fab fa-blogger-b\"></i>ookland</h1>\n      <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\" style=\"margin:auto;width:80vw;height:70vh;background-color: rgb(0,0,0,0.5)\">\n      <div class=\"col\" style=\"margin-top:30px;margin-left:30px\">\n        <img src={{data.Photo}} style=\"width:30vw;height:60vh\">\n      </div>\n      <div class=\"col\" style=\"margin: auto\">\n        <h1 style=\"text-align: center ; font-family:'Courier New', Courier, monospace\">\n          <b><u>{{data.BookName}}</u></b>\n        </h1>\n        <p style=\"text-align: center\">By :{{data.AuthorName}}  </p>\n        <p style=\"text-align: center\">Cost : Rs.{{data.Price}}</p>\n        <p style=\"text-align: center\">Condition : {{data.Condition}}</p>\n        <p style=\"text-align: center\">Seller : {{data.Seller}}</p>\n        <p style=\"text-align: center\">\n          <button class=\"btn btn-primary btn-block\" (click)=\"buyclick()\">BUY</button><br>\n          <button class=\"btn btn-primary btn-block\" name={{data.BookId}} id={{data.userTableId}} (click)=\"contactclick($event)\">Contact Seller</button><br>\n          <button class=\"btn btn-primary btn-block\"(click)=\"addtowishlist()\">Add to Wishlist</button>\n        </p>\n         \n\n \n\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/detail-listing/detail-listing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/detail-listing/detail-listing.component.ts ***!
  \************************************************************/
/*! exports provided: DetailListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListingComponent", function() { return DetailListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailListingComponent = /** @class */ (function () {
    function DetailListingComponent(_listing, router, _wishlist, route) {
        this._listing = _listing;
        this.router = router;
        this._wishlist = _wishlist;
        this.route = route;
        this.data = [];
        this.wishlistData = { "myid": sessionStorage.getItem("key2") };
    }
    DetailListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("key") != null) {
            this.router.paramMap.subscribe(function (params) {
                _this.selected = +(params.get('id'));
                // console.log(this.selected);
            });
            this.detaillisting();
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    DetailListingComponent.prototype.buyclick = function () {
        alert("Your Order has been Placed!!");
    };
    DetailListingComponent.prototype.contactclick = function (event) {
        if (event.target.id === sessionStorage.getItem("key2")) {
            alert("You are the Seller of the Book!!");
        }
        else {
            this.route.navigate(['/sendmsg/' + event.target.id + "," + event.currentTarget.name]);
        }
    };
    DetailListingComponent.prototype.wishlistclick = function () {
        alert("Added to Wishlist!!");
    };
    DetailListingComponent.prototype.detaillisting = function () {
        var _this = this;
        this._listing.DetailListing({ "BookId": this.selected })
            .subscribe(function (res) {
            _this.data = res[0];
        }, function (err) { return alert("Data Not Found!!"); });
    };
    DetailListingComponent.prototype.addtowishlist = function (event) {
        this.wishlistData["bookid"] = this.selected;
        // console.log(this.wishlistData);
        this._wishlist.AddWishlist(this.wishlistData)
            .subscribe(function (res) {
            alert("Added to Wishlist");
        }, function (err) { return alert("Already Present in the WishList"); });
    };
    DetailListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-listing',
            template: __webpack_require__(/*! ./detail-listing.component.html */ "./src/app/detail-listing/detail-listing.component.html"),
            styles: [__webpack_require__(/*! ./detail-listing.component.css */ "./src/app/detail-listing/detail-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailListingComponent);
    return DetailListingComponent;
}());



/***/ }),

/***/ "./src/app/footer-tab/footer-tab.component.css":
/*!*****************************************************!*\
  !*** ./src/app/footer-tab/footer-tab.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social:hover {\r\n    -webkit-transform: scale(1.1);\r\n    -moz-transform: scale(1.1);\r\n    -o-transform: scale(1.1);\r\n}\r\n.social {\r\n    -webkit-transform: scale(0.8);\r\n    /* Browser Variations: */\r\n    \r\n    -moz-transform: scale(0.8);\r\n    -o-transform: scale(0.8);\r\n    -webkit-transition-duration: 0.5s;\r\n    -moz-transition-duration: 0.5s;\r\n    -o-transition-duration: 0.5s;\r\n}\r\n/* .container{\r\n    position: fixed;\r\n\r\n    bottom: 0;\r\n} */\r\n/*\r\n   Multicoloured Hover Variations\r\n*/\r\n#social-fb:hover {\r\n    color: #3B5998;\r\n}\r\n#social-tw:hover {\r\n    color: #4099FF;\r\n}\r\n#social-gp:hover {\r\n    color: #d34836;\r\n}\r\n#social-em:hover {\r\n    color: #f39c12;\r\n}"

/***/ }),

/***/ "./src/app/footer-tab/footer-tab.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-tab/footer-tab.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"text-center center-block\" style=\"background-color:black;\">\n    <a href=\"\">\n      <i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"style=\"color:white\"></i>\n    </a>\n    <a href=\"\">\n      <i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"style=\"color:white\"></i>\n    </a>\n    <a href=\"\">\n      <i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"style=\"color:white\"></i>\n    </a>\n    <a href=\"\">\n      <i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"style=\"color:white\"></i>\n    </a>\n  </div>"

/***/ }),

/***/ "./src/app/footer-tab/footer-tab.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-tab/footer-tab.component.ts ***!
  \****************************************************/
/*! exports provided: FooterTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTabComponent", function() { return FooterTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterTabComponent = /** @class */ (function () {
    function FooterTabComponent() {
    }
    FooterTabComponent.prototype.ngOnInit = function () {
    };
    FooterTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-tab',
            template: __webpack_require__(/*! ./footer-tab.component.html */ "./src/app/footer-tab/footer-tab.component.html"),
            styles: [__webpack_require__(/*! ./footer-tab.component.css */ "./src/app/footer-tab/footer-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTabComponent);
    return FooterTabComponent;
}());



/***/ }),

/***/ "./src/app/header-tab/header-tab.component.css":
/*!*****************************************************!*\
  !*** ./src/app/header-tab/header-tab.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\r\n.topnav {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n}\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\r\n/* Hide the link that should open and close the topnav on small screens */\r\n.topnav .icon {\r\n    display: none;\r\n}\r\n/* When the screen is less than 600 pixels wide, hide all links, except for the first one (\"Home\"). Show the link that contains should open and close the topnav (.icon) */\r\n@media screen and (max-width: 600px) {\r\n    .topnav a:not(:first-child) {display: none;}\r\n    .topnav a.icon {\r\n      float: right;\r\n      display: block;\r\n    }\r\n  }\r\n/* The \"responsive\" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */\r\n@media screen and (max-width: 600px) {\r\n    .topnav.responsive {position: relative;}\r\n    .topnav.responsive a.icon {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n    }\r\n    .topnav.responsive a {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/header-tab/header-tab.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-tab/header-tab.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"topnav\" [class.responsive]=\"apply\" id=\"myTopnav\">\n  <a routerLink=\"home\" ><i class=\"fas fa-home\"></i> Home</a>\n  <a routerLink=\"listing\" ><i class=\"fas fa-book-open\"></i> Listing</a>\n  <a routerLink=\"addlisting\" ><i class=\"fas fa-plus-circle\"></i> Add</a>\n  <a routerLink=\"wishlist\" ><i class=\"fas fas fa-bookmark\"></i> Wishlist</a>\n  <a routerLink=\"message\" ><i class=\"fas fa-comments\"></i> Message</a>\n  <a routerLink=\"signup\" *ngIf=\"!getUserLoggedIn()\"><i class=\"fas fa-user-plus\"></i> Sign Up</a>\n  <a routerLink=\"login\" *ngIf=\"!getUserLoggedIn()\" ><i class=\"fas fa-sign-in-alt\"></i> Log In</a>\n  <a routerLink=\"home\" *ngIf=\"getUserLoggedIn()\" (click)=\"logout()\" ><i  class=\"fas fa-sign-out-alt\"></i> Log Out</a>\n  <a routerLink=\"\" class=\"icon\" (click)=\"onclick()\">\n    <i class=\"fa fa-bars\"  ></i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/header-tab/header-tab.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-tab/header-tab.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTabComponent", function() { return HeaderTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_sharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-sharing.service */ "./src/app/data-sharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderTabComponent = /** @class */ (function () {
    function HeaderTabComponent(service) {
        this.service = service;
        this.apply = false;
    }
    HeaderTabComponent.prototype.getUserLoggedIn = function () { return this.service.getUserLoggedIn(); };
    HeaderTabComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("key") == null) {
            this.service.setLoggedInUser(false);
        }
        else {
            this.service.setLoggedInUser(true);
        }
    };
    HeaderTabComponent.prototype.logout = function () {
        this.service.setLoggedInUser(false);
        sessionStorage.clear();
    };
    HeaderTabComponent.prototype.onclick = function () {
        if (this.apply === false) {
            this.apply = true;
        }
        else {
            this.apply = false;
        }
    };
    HeaderTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-tab',
            template: __webpack_require__(/*! ./header-tab.component.html */ "./src/app/header-tab/header-tab.component.html"),
            styles: [__webpack_require__(/*! ./header-tab.component.css */ "./src/app/header-tab/header-tab.component.css")]
        }),
        __metadata("design:paramtypes", [_data_sharing_service__WEBPACK_IMPORTED_MODULE_1__["DataSharingService"]])
    ], HeaderTabComponent);
    return HeaderTabComponent;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
        this._alllistingUrl = "/Api/book/alllisting";
        this._detaillistingUrl = "/Api/book/detaillisting";
        this._uploadUrl = "/Api/book/upload";
        this._addUrl = "/Api/book/add";
    }
    ListingService.prototype.AllListing = function (data) {
        // console.log(data)
        return this.http.post(this._alllistingUrl, data);
    };
    ListingService.prototype.DetailListing = function (id) {
        return this.http.post(this._detaillistingUrl, id);
    };
    ListingService.prototype.Upload = function (fd) {
        return this.http.post(this._uploadUrl, fd);
    };
    ListingService.prototype.Add = function (data) {
        // console.log(data)
        return this.http.post(this._addUrl, data);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#loginbox {\r\n    margin-top: 30px;\r\n}\r\n\r\n#loginbox > div:first-child {        \r\n    padding-bottom: 10px;    \r\n}\r\n\r\n#form > div {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#form > div:last-child {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nbody,h1 {font-family: \"Raleway\", sans-serif}\r\n\r\nbody, html {height: 100%}\r\n\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-animate-opacity w3-text-white\">\n  <br>\n  <br>\n  <div id=\"loginbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3\">\n    <h1 class=\"\" style=\"text-align:center;color:black\">\n      <i class=\"fab fa-blogger-b\" style=\"color:black\"></i>ookland</h1>\n    <hr>\n    <h1 style=\"text-align:center;color:black\">LogIn\n      <i class=\"fas fa-user\" style=\"color:black\"></i>\n    </h1>\n    <hr>\n    <form ngNativeValidate (ngSubmit)=\"login($event)\" #heroForm=\"ngForm\" name=\"form\" [id]=loginUserData.user class=\"form-horizontal\" enctype=\"multipart/form-data\" method=\"\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"glyphicon glyphicon-user\"></i>\n        </span>\n        <input required [(ngModel)]=loginUserData.user id=\"user\" type=\"text\" class=\"form-control \"  name=\"user\" value=\"\" placeholder=\"User\">\n      </div>\n      <br>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"glyphicon glyphicon-lock\"></i>\n        </span>\n        <input [(ngModel)]=loginUserData.password required id=\"password\" type=\"password\" class=\"form-control \"  name=\"password\" placeholder=\"Password\">\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <div class=\"col-sm-12 controls text-center\">\n          <button [disabled]=\"!heroForm.form.valid\"  class=\"btn btn-primary \">\n            <i class=\"glyphicon glyphicon-log-in\"></i> Log in</button>\n        </div>\n      </div>\n      <hr>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-sharing.service */ "./src/app/data-sharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_login, router, data, route) {
        this._login = _login;
        this.router = router;
        this.data = data;
        this.route = route;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        // header()
    };
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        this._login.LoginUser(this.loginUserData)
            .subscribe(function (res) {
            // console.log(res[0].Username);
            sessionStorage.setItem("key", res[0].Username);
            sessionStorage.setItem("key2", res[0].id);
            _this.data.setLoggedInUser(true);
            _this.route.navigate(['/listing']);
        }, function (err) { return alert("Login Fail!!"); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message-send/message-send.component.css":
/*!*********************************************************!*\
  !*** ./src/app/message-send/message-send.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/message-send/message-send.component.html":
/*!**********************************************************!*\
  !*** ./src/app/message-send/message-send.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-text-white\">\n  <div class=\"container \">\n\n    <div class=\"row\" style=\"color: black\">\n      <div class=\"col\"></div>\n      <h1 class=\"\" style=\"text-align:center;\">\n        <i class=\"fab fa-blogger-b\"></i>ook\n        <b>L</b>and</h1>\n      <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\" style=\"background-color:rgb(0,0,0,0.5);height:70vh;margin: auto\">\n      <div class=\"col\"></div>\n      <div class=\"col-md-10\">\n        <h1 style=\"text-align:center;font-family: 'Courier'\">\n          <u>Send Message</u>\n        </h1>\n        <div class=\"card border-light\" style=\"background-color: rgb(0,0,0,0.5);height:50vh;\">\n          <h5 class=\"card-header border-light\">TO : {{Msg.ReceiverName}}</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">For Book Id : {{Msg.SelectedBookId}} AND Book Name : {{Msg.BookName}}</p>\n            <p class=\"card-text\">\n              <textarea [(ngModel)]=Msg.Message name=\"Message\" class=\"form-control\" style=\"height:20vh;\"></textarea>\n            </p>\n            <a class=\"btn btn-primary float-center\" style=\"width:100px\" (click)=\"Send()\">Send</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/message-send/message-send.component.ts":
/*!********************************************************!*\
  !*** ./src/app/message-send/message-send.component.ts ***!
  \********************************************************/
/*! exports provided: MessageSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSendComponent", function() { return MessageSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageSendComponent = /** @class */ (function () {
    function MessageSendComponent(_listing, _msg, router, _user, route) {
        this._listing = _listing;
        this._msg = _msg;
        this.router = router;
        this._user = _user;
        this.route = route;
        this.Msg = { "SenderName": sessionStorage.getItem("key"), "SenderId": sessionStorage.getItem("key2") };
    }
    MessageSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("key") != null) {
            this.router.paramMap.subscribe(function (params) {
                _this.selected_id = params.get('id');
                _this.splitted = _this.selected_id.split(",", 2);
                _this.Msg["SelectedBookId"] = _this.splitted[1];
                _this.Msg["ReceiverId"] = _this.splitted[0];
                _this.getname();
                _this.getbookname();
            });
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    MessageSendComponent.prototype.getname = function () {
        var _this = this;
        this._user.GetUserNAme({ "id": this.Msg["ReceiverId"] })
            .subscribe(function (res) {
            _this.Msg["ReceiverName"] = res[0].Username;
        }, function (err) { return alert("No user found!!"); });
    };
    MessageSendComponent.prototype.getbookname = function () {
        var _this = this;
        this._listing.DetailListing({ "BookId": this.Msg["SelectedBookId"] })
            .subscribe(function (res) {
            _this.Msg["BookName"] = res[0].BookName;
        }, function (err) { return alert("Data Not Found!!"); });
    };
    MessageSendComponent.prototype.Send = function () {
        var _this = this;
        // console.log(this.Msg);
        this._msg.SendMsg(this.Msg)
            .subscribe(function (res) {
            alert("Msg Sent");
            _this.route.navigate(['/message']);
        }, function (err) { return alert("Msg Not Sent!!"); });
    };
    MessageSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-send',
            template: __webpack_require__(/*! ./message-send.component.html */ "./src/app/message-send/message-send.component.html"),
            styles: [__webpack_require__(/*! ./message-send.component.css */ "./src/app/message-send/message-send.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"], _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageSendComponent);
    return MessageSendComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this._msgsentUrl = "/Api/msg/sent";
        this._msgreceiveUrl = "/Api/msg/receive";
        this._msgsendUrl = "/Api/msg/sendmsg";
    }
    MessageService.prototype.Sent = function (data) {
        return this.http.post(this._msgsentUrl, data);
    };
    MessageService.prototype.Receive = function (data) {
        return this.http.post(this._msgreceiveUrl, data);
    };
    MessageService.prototype.SendMsg = function (data) {
        return this.http.post(this._msgsendUrl, data);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-text-white\">\n  <div class=\"container\">\n\n    <div class=\"row\" style=\"color: black\">\n      <div class=\"col\"></div>\n      <h1 class=\"\" style=\"text-align:center;\">\n        <i class=\"fab fa-blogger-b\"></i>ook\n        <b>L</b>and</h1>\n      <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\" style=\"width:80vw;height:70vh;\">\n      <div class=\"col\" style=\"background-color:rgb(0,0,0,0.5);overflow-y:auto\">\n        <h1 style=\"font-family:'Courier';text-align:center\">\n          <u>Message Sent</u>\n        </h1>\n        <h1 *ngIf=\"SentMsgEr\" style=\"text-align:center;font-family: 'Courier';color:white;height: 200px\">\n          <div class=\"row\" style=\"height:50px;\"></div>\n          <div class=\"row\" style=\"margin:100px\">\n            No Msg Sent!!\n          </div>\n        </h1>\n        <div class=\"card border-light\" style=\"background-color: rgb(0,0,0,0.5);margin-top:10px;margin-bottom:10px\" *ngFor=\"let Msg of SentMsg\">\n          <h5 class=\"card-header \">TO : {{Msg.ReceiverName}}</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">For Book Id : {{Msg.SelectedBookId}} AND Book Name : {{Msg.BookName}}</p>\n            <p class=\"card-text\">{{Msg.Message}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\" style=\"background-color:rgb(0,0,0,0.5);margin-left: 10px;overflow-y: auto;\">\n        <h1 style=\"text-align:center;font-family: 'Courier'\">\n          <u>Message Receive</u>\n        </h1>\n        <h1 *ngIf=\"ReceiveMsgEr\" style=\"text-align:center;font-family: 'Courier';color:white;height: 200px\">\n            <div class=\"row\" style=\"height:50px;\"></div>\n            <div class=\"row\" style=\"margin:100px\">\n              No Msg Received!!\n            </div>\n          </h1>\n\n        <div class=\"card border-light\" style=\"background-color: rgb(0,0,0,0.5);margin-top:10px;margin-bottom:10px\" *ngFor=\"let Msg of ReceiveMsg\">\n          <h5 class=\"card-header\">FROM : {{Msg.SenderName}}</h5>\n          <div class=\"card-body\">\n            <p class=\"card-text\">For Book Id : {{Msg.SelectedBookId}} AND Book Name : {{Msg.BookName}}</p>\n            <p class=\"card-text\">{{Msg.Message}}</p>\n            <button class=\"btn btn-primary float-center\" name={{Msg.SelectedBookId}} id={{Msg.SenderId}} (click)=\"contact($event)\">Reply</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(_msg, route) {
        this._msg = _msg;
        this.route = route;
        this.ReceiveMsgEr = false;
        this.SentMsgEr = false;
        this.myid = sessionStorage.getItem("key2");
        this.ReceiveMsg = [];
        this.SentMsg = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("key") != null) {
            this.Receive();
            this.Sent();
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    MessageComponent.prototype.Receive = function () {
        var _this = this;
        this._msg.Receive({ "myid": this.myid })
            .subscribe(function (res) {
            _this.ReceiveMsg = res;
        }, function (err) { return _this.ReceiveMsgEr = true; });
    };
    MessageComponent.prototype.contact = function (event) {
        if (event.target.id === sessionStorage.getItem("key2")) {
            alert("You are the Seller of the Book!!");
        }
        else {
            this.route.navigate(['/sendmsg/' + event.target.id + "," + event.currentTarget.name]);
        }
    };
    MessageComponent.prototype.Sent = function () {
        var _this = this;
        this._msg.Sent({ "myid": this.myid })
            .subscribe(function (res) {
            _this.SentMsg = res;
        }, function (err) { return _this.SentMsgEr = true; });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this._signupUrl = "/Api/users/signup";
        this._loginUrl = "/Api/users/login";
        this._getnameUrl = "/Api/users/getname";
    }
    SignupService.prototype.SignupUser = function (signupUserData) {
        return this.http.post(this._signupUrl, signupUserData);
    };
    SignupService.prototype.LoginUser = function (loginUserData) {
        return this.http.post(this._loginUrl, loginUserData);
    };
    SignupService.prototype.GetUserNAme = function (data) {
        return this.http.post(this._getnameUrl, data);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#signupbox {\r\n    margin-top: 30px;\r\n}\r\n\r\n#signupbox > div:first-child {        \r\n    padding-bottom: 10px;    \r\n}\r\n\r\n#form > div {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#form > div:last-child {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nbody,h1 {font-family: \"Raleway\", sans-serif}\r\n\r\nbody, html {height: 100%}\r\n\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    overflow-y: auto\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-animate-opacity w3-text-white\">\n  <br>\n  <div id=\"signup\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 \">\n    <h1 class=\"\" style=\"text-align:center;color:black\">\n      <i class=\"fab fa-blogger-b\" style=\"color:black\"></i>ookland</h1>\n    <hr>\n    <h1 style=\"text-align:center;color:black\">Sign Up\n      <i class=\"fas fa-user\" style=\"color:black\"></i>\n    </h1>\n    <hr>\n    <form ngNativeValidate name=\"form\" (ngSubmit)=\"signup()\" #heroForm=\"ngForm\" id=\"form\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">UserName</span>\n        <input [(ngModel)]=signupUserData.user id=\"user\" type=\"text\" class=\"form-control\" required name=\"user\" placeholder=\"Enter a Unique UserName\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Password</span>\n        <input [(ngModel)]=signupUserData.password id=\"password\" type=\"password\" class=\"form-control\" required name=\"password\" placeholder=\"Enter a Strong Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Email Id</span>\n        <input [(ngModel)]=signupUserData.email id=\"email\"  type=\"email\" class=\"form-control\" required name=\"Email\" placeholder=\"abc@gmail.com\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">College Name</span>\n        <input [(ngModel)]=signupUserData.college id=\"college\" type=\"text\" class=\"form-control\" required name=\"College\" placeholder=\"Enter Your College Name\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Phone Number</span>\n        <input [(ngModel)]=signupUserData.phoneno id=\"phoneno\" minlength=\"10\" maxlength=\"12\" type=\"text\" class=\"form-control\" required name=\"phoneno\" placeholder=\"Enter 10 Digit Number\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Address</span>\n        <textarea [(ngModel)]=signupUserData.address id=\"address\" class=\"form-control\" required name=\"address\" placeholder=\"Enter a Valid Address\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-12 controls text-center\">\n          <button [disabled]=\"!heroForm.form.valid\" class=\"btn btn-primary\">\n            Sign Up\n            <i class=\"fas fa-user-plus\"></i>\n          </button>\n        </div>\n      </div>\n      <hr>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_signup, router, route) {
        this._signup = _signup;
        this.router = router;
        this.route = route;
        this.signupUserData = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._signup.SignupUser(this.signupUserData)
            .subscribe(function (res) { return _this.route.navigate(['/login']); }, function (err) { return alert("UserName Already Exist!!"); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
        this._wishlistUrl = "/Api/wishlist/get";
        this._addwishlistUrl = "/Api/wishlist/post";
    }
    WishlistService.prototype.Wishlist = function (data) {
        return this.http.post(this._wishlistUrl, data);
    };
    WishlistService.prototype.AddWishlist = function (data) {
        return this.http.post(this._addwishlistUrl, data);
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,h1 {font-family: \"Raleway\", sans-serif}\r\nbody, html {height: 100%}\r\n.bgimg {\r\n    background-image: url(https://res.cloudinary.com/dp8x0d1mj/image/upload/v1531034095/back.jpg);\r\n    min-height:84vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    overflow-y: auto\r\n    /* opacity:0.5 ; */\r\n}\r\n.slidecontainer {\r\n    width: 100%;\r\n}\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 10px;\r\n    border-radius: 5px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 23px;\r\n    height: 24px;\r\n    border: 0;\r\n    background: url();\r\n    cursor: pointer;\r\n}\r\n.slider::-moz-range-thumb {\r\n    width: 23px;\r\n    height: 24px;\r\n    border: 0;\r\n    background: url();\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg w3-display-container w3-text-white\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\"></div>\r\n      <h1 class=\"\" style=\"text-align:center;\">\r\n        <i class=\"fab fa-blogger-b\"></i>ookland</h1>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n    <h1 *ngIf=\"NoWishlist\" style=\"text-align:center;font-family:'Courier';height: 200px;color:black\">\r\n          Empty Wishlist!!\r\n      </h1>\r\n\r\n    <div class=\"row\" id=\"booklist\">\r\n      <div class=\"card mx-2 p-4\" style=\"background-color: rgb(0,0,0,0.5);margin-bottom: 20px\" *ngFor=\"let data of list\">\r\n        <img class=\"card-img-top\" src={{data.Photo}} alt=\"Card image cap\" style=\"width: 200px;height:150px\">\r\n        <div class=\"card-body\">\r\n          <h5 style=\"text-align: center\" class=\"card-title\">\r\n            <b>{{data.BookName}}</b>\r\n          </h5>\r\n          <p style=\"text-align: center\" class=\"card-text\">By : {{data.AuthorName}}</p>\r\n          <p style=\"text-align: center\" class=\"card-text\">Rs.{{data.Price}}</p>\r\n          <p style=\"text-align: center\" class=\"card-text\">\r\n            <button class=\"btn btn-primary\" [id]=\"data.BookId\" (click)=\"onclick($event)\" style=\"width:170px;align-content:center;margin-right:5px\">View Details</button>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(_wishlist, _listing, route) {
        this._wishlist = _wishlist;
        this._listing = _listing;
        this.route = route;
        this.listdata = [];
        this.list = [];
        this.i = 0;
        this.NoWishlist = false;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("key") != null) {
            this.Wishlist();
        }
        else {
            alert("You first need to login to view the listing!!");
            this.route.navigate(['/login']);
        }
    };
    WishlistComponent.prototype.Wishlist = function () {
        var _this = this;
        this._wishlist.Wishlist({ "id": sessionStorage.getItem("key2") })
            .subscribe(function (res) {
            _this.listdata = res;
            _this.ViewWishlist(_this.listdata);
        }, function (err) { return _this.NoWishlist = true; });
    };
    WishlistComponent.prototype.onclick = function (event) {
        this.route.navigate(['/detaillisting/' + event.currentTarget.id]);
    };
    WishlistComponent.prototype.ViewWishlist = function (ldata) {
        var _this = this;
        for (var _i = 0, ldata_1 = ldata; _i < ldata_1.length; _i++) {
            var entry = ldata_1[_i];
            this._listing.DetailListing({ "BookId": entry["bookTableBookId"] })
                .subscribe(function (res) {
                _this.list[_this.i++] = res[0];
            }, function (err) { return alert("Data Not Found!!"); });
        }
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"], _listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SurTush\Desktop\Angular\bookstor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map