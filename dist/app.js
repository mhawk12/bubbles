"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./main"));
var App = /** @class */ (function () {
    function App() {
        this.main = new main_1.default();
    }
    App.main = function () {
        var app = new App();
        app.main.start();
    };
    return App;
}());
App.main();
