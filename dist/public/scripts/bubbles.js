"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Bubbles = /** @class */ (function () {
    function Bubbles(bubblesData, bubblesColors, store) {
        this.bubblesTextData = bubblesData;
        this.bubblesColors = bubblesColors;
        this.filteredBubblesTextData = Object.create(this.bubblesTextData);
        this.store = store;
        this.mainElement = document.getElementById("main");
    }
    // public expose(): Bubbles {
    //   return this;
    // }
    Bubbles.prototype.setBubbleColors = function (bubblesColors) {
        this.bubblesColors = bubblesColors;
    };
    Bubbles.prototype.setBubblesText = function (bubblesTextData) {
        this.bubblesTextData = bubblesTextData;
        this.filteredBubblesTextData = __spreadArrays(this.bubblesTextData);
        this.generateBubbles();
    };
    // public addBubble(bubbleText: string): void {
    //   this.bubblesTextData.push(bubbleText);
    //   this.filteredBubblesTextData = [...this.bubblesTextData];
    //   this.store.addBubble(bubbleText);
    // }
    Bubbles.prototype.deleteBubble = function (index) {
        this.bubblesTextData.splice(parseInt(index), 1);
        this.filteredBubblesTextData.splice(parseInt(index), 1);
        this.store.deleteBubble(index);
        this.generateBubbles();
    };
    Bubbles.prototype.filterBubbleTexts = function (bubbleText) {
        bubbleText = bubbleText.toLowerCase();
        this.filteredBubblesTextData = this.bubblesTextData.filter(function (bubbleTextData) {
            return bubbleTextData.toLowerCase().indexOf(bubbleText) > -1;
        });
        this.generateBubbles();
    };
    Bubbles.prototype.saveTextToBubblesList = function (bubbleText) {
        bubbleText = bubbleText.toUpperCase();
        this.bubblesTextData.push(bubbleText);
        this.filteredBubblesTextData.push(bubbleText);
        this.generateBubbles();
        this.store.addBubble(bubbleText);
    };
    Bubbles.prototype.generateBubbles = function () {
        var _this = this;
        if (this.mainElement === null) {
            console.log("bubbles.ts, main element not found");
            return;
        }
        this.mainElement.innerHTML = "";
        this.filteredBubblesTextData.forEach(function (data, index) {
            var bubbleElement = document.createElement("div");
            bubbleElement.classList.add("bubble");
            var bubbleTextElement = document.createElement("div");
            bubbleTextElement.classList.add("bubble__text");
            bubbleTextElement.innerHTML = data.toUpperCase();
            bubbleElement.appendChild(bubbleTextElement);
            var bubbleDeleteButton = document.createElement("button");
            bubbleDeleteButton.classList.add("bubble__delete-btn");
            bubbleDeleteButton.value = index.toString();
            bubbleDeleteButton.innerHTML = "-";
            bubbleDeleteButton.onclick = function () {
                return _this.deleteBubble((bubbleDeleteButton.value));
            };
            bubbleElement.appendChild(bubbleDeleteButton);
            bubbleElement.style.color = _this.bubblesColors[index % _this.bubblesColors.length];
            if (_this.mainElement === null) {
                console.log("bubbles.ts, generateBubbles-->forEach, main element not found");
                return;
            }
            _this.mainElement.appendChild(bubbleElement);
        });
    };
    return Bubbles;
}());
exports.default = Bubbles;
