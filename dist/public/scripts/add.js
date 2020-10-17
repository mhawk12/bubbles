"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Add = /** @class */ (function () {
    function Add(modal) {
        this.bodyElement = document.getElementsByTagName("body")[0];
        this.modal = modal;
    }
    // public expose(): Add {
    //   return this;
    // }
    Add.prototype.addButton = function () {
        var _this = this;
        if (this.bodyElement === null) {
            console.error("add.ts, body element not found");
            return;
        }
        var button = document.createElement("button");
        button.classList.add("add-btn");
        button.innerHTML = "+";
        button.onclick = function () { return _this.modal.createInputModal(); };
        this.bodyElement.appendChild(button);
    };
    return Add;
}());
exports.default = Add;
