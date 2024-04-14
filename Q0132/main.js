"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
//export default
var export_default_1 = require("./export_default");
(0, export_default_1.default)("rabia");
//named Export
var named_export_1 = require("./named_export");
console.log(named_export_1.name); //variable
(0, named_export_1.greet)(); //function
var score = new named_export_1.student(); //class
console.log(score);
console.log(named_export_1.TRIO); //objetc
