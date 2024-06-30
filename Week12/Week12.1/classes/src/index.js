"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Decorators
const helpful_decorators_1 = require("helpful-decorators");
// Classes 
class DateClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getItem() {
        return 1;
    }
    getTime() {
        var d = new Date();
        return d.getTime();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimeZone() {
        return this.timeZone;
    }
    epensiveOperation() {
        let ctr = 0;
        const startTime = new Date().getTime();
        for (let i = 0; i < 11000000; i++) {
            ctr++;
        }
        const currentTime = new Date().getTime();
        console.log(currentTime - startTime);
    }
}
__decorate([
    helpful_decorators_1.measure //decorator
], DateClass.prototype, "getTime", null);
// We cannot do DateClass.gtitem // because it is not a static thing it is a class same as in java c++
const dateObject = new DateClass("IND");
const response = dateObject.getMonth();
const responseTime = dateObject.getTime();
const responseTimeZone = dateObject.getTimeZone();
console.log(response);
console.log(responseTime);
console.log(responseTimeZone);
console.log(dateObject.epensiveOperation());
