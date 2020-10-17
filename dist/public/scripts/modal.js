"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Modal = /** @class */ (function () {
    function Modal(bubbles) {
        this.containerElement = document.getElementById("container");
        this.bubbles = bubbles;
    }
    // public expose(): Modal {
    //   return this;
    // }
    Modal.prototype.removeModal = function () {
        document.getElementsByClassName("input-modal-outer")[0].remove();
    };
    Modal.prototype.saveTextToBubblesList = function (bubbleText) {
        this.bubbles.saveTextToBubblesList(bubbleText);
        this.removeModal();
    };
    Modal.prototype.createInputModal = function () {
        var _this = this;
        if (this.containerElement === null) {
            console.error("add.ts, container element not found");
            return;
        }
        var inputModalOuter = document.createElement("div");
        inputModalOuter.classList.add("input-modal-outer");
        var inputModal = document.createElement("div");
        inputModal.classList.add("input-modal");
        var textAreaElement = document.createElement("textarea");
        textAreaElement.classList.add("input-modal__textarea");
        textAreaElement.maxLength = 50;
        var buttonRow = document.createElement("div");
        buttonRow.classList.add("input-modal__row-btn");
        var addButton = document.createElement("button");
        addButton.innerHTML = "add";
        addButton.onclick = function () { return _this.saveTextToBubblesList(textAreaElement.value); };
        buttonRow.appendChild(addButton);
        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = "cancel";
        cancelButton.onclick = function () { return _this.removeModal(); };
        buttonRow.appendChild(cancelButton);
        inputModal.appendChild(textAreaElement);
        inputModal.appendChild(buttonRow);
        inputModalOuter.appendChild(inputModal);
        this.containerElement.appendChild(inputModalOuter);
    };
    return Modal;
}());
exports.default = Modal;
