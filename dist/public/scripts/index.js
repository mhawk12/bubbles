"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bubbles_1 = __importDefault(require("./bubbles"));
// import Search from "./search.ts";
var store_1 = __importDefault(require("./store"));
var add_1 = __importDefault(require("./add"));
var modal_1 = __importDefault(require("./modal"));
var electron_1 = require("electron");
var globals_1 = require("../../globals/globals");
/**
 *
 *
 * @class Index
 */
var Index = /** @class */ (function () {
    function Index() {
        // this.search = new Search("");
        this.store = new store_1.default();
        this.bubbles = new bubbles_1.default([], [], this.store);
        this.modal = new modal_1.default(this.bubbles);
        this.add = new add_1.default(this.modal);
    }
    // public eventListener(event: KeyboardEvent): void {
    //   if (event.key === "Enter") {
    //     const searchText = this.search.getSearchText();
    //     this.bubbles.filterBubbleTexts(searchText);
    //   }
    // }
    Index.main = function () {
        var index = new Index();
        index.add.addButton();
        electron_1.ipcRenderer.send(globals_1.STORE, [globals_1.GET, globals_1.BUBBLE_COLORS, ""]);
        electron_1.ipcRenderer.send(globals_1.STORE, [globals_1.GET, globals_1.BUBBLE_TEXTS, ""]);
        electron_1.ipcRenderer.on(globals_1.STORE, function (event, type, data) {
            switch (type) {
                case globals_1.BUBBLE_COLORS:
                    index.bubbles.setBubbleColors(data);
                    break;
                case globals_1.BUBBLE_TEXTS:
                    index.bubbles.setBubblesText(data);
                    break;
            }
        });
    };
    return Index;
}());
Index.main();
