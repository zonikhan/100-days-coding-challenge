"use strict";
//Named exports
//used for multiple import at a time with their names individually
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIO = exports.student = exports.greet = exports.name = void 0;
//defining and exporting a variable 
exports.name = "rabia";
//defining and exporting a function
function greet() {
    console.log("Hello", exports.name);
}
exports.greet = greet;
//defining and exporting a class 
var student = /** @class */ (function () {
    function student() {
        this.marks = 840;
        this.grade = "A+";
    }
    return student;
}());
exports.student = student;
//defining and exporting an object 
exports.TRIO = {
    frnd1: "hani",
    frnd2: "arif",
    frnd3: "rabia"
};
