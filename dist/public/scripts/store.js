"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var globals_1 = require("../../globals/globals");
var Store = /** @class */ (function () {
    // private path: string;
    function Store() {
        // this.path = path.join(__dirname, "../../", "data.json");
        // this.data = this.parseDataFile(this.path);
    }
    // public expose(): Store {
    //   return this;
    // }
    Store.prototype.set = function () {
        // fs.writeFile(this.path, JSON.stringify(this.data, null, 2), (err: any) =>
        //   console.log("ERROR WRITING FILE", err)
        // );
    };
    Store.prototype.addBubble = function (bubbleText) {
        // this.bubblesTextData.push(bubbleText);
        electron_1.ipcRenderer.send(globals_1.STORE, [globals_1.ADD, globals_1.BUBBLE_TEXTS, bubbleText]);
    };
    Store.prototype.deleteBubble = function (index) {
        // this.data["bu((bblesTextData"].splice(index, 1);
        electron_1.ipcRenderer.send(globals_1.STORE, [globals_1.DELETE, globals_1.BUBBLE_TEXTS, index]);
    };
    return Store;
}());
exports.default = Store;
