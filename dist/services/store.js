"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Store = /** @class */ (function () {
    function Store() {
        this.defaultBubbleValues = {
            BUBBLE_COLORS: [
                "#9d65c9",
                "#fe7171",
                "#55b3f3",
                "#e5df88",
                "#68c170",
                "#f8bd7f",
            ],
            BUBBLE_TEXTS: ["ADD NOTES!!!"],
        };
        this.userDataPath = (electron_1.app || electron_1.remote.app).getPath("userData");
        this.path = path_1.default.join(this.userDataPath, "data.json");
        this.data = this.parseDataFile(this.path);
    }
    Store.prototype.get = function (key) {
        return this.data[key];
    };
    Store.prototype.add = function (key, val) {
        this.data[key].push(val);
    };
    Store.prototype.delete = function (key, index) {
        this.data[key].splice(index, 1);
    };
    Store.prototype.set = function () {
        fs_1.default.writeFileSync(this.path, JSON.stringify(this.data));
    };
    Store.prototype.parseDataFile = function (filePath) {
        try {
            return JSON.parse(fs_1.default.readFileSync(filePath).toString());
        }
        catch (error) {
            return this.defaultBubbleValues;
        }
    };
    return Store;
}());
exports.default = Store;
