"use strict";
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
function doSomething() {
    console.log('did something!');
}
exports.doSomething = doSomething;
function doSomethingSecret() {
    console.log('secret!');
}
function doSomethingElse() {
    console.log('something else!');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = doSomethingElse;
exports.orange = '#FFA500';
