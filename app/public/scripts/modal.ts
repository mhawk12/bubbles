import Bubbles from "./bubbles";

export default class Modal {
  private containerElement: HTMLElement | null;
  private bubbles: Bubbles;

  constructor(bubbles: Bubbles) {
    this.containerElement = document.getElementById("container");
    this.bubbles = bubbles;
  }

  // public expose(): Modal {
  //   return this;
  // }

  private removeModal(): void {
    document.getElementsByClassName("input-modal-outer")[0].remove();
  }

  private saveTextToBubblesList(bubbleText: string): void {
    this.bubbles.saveTextToBubblesList(bubbleText);
    this.removeModal();
  }

  public createInputModal(): void {
    if (this.containerElement === null) {
      console.error("add.ts, container element not found");
      return;
    }
    const inputModalOuter = document.createElement("div");
    inputModalOuter.classList.add("input-modal-outer");
    const inputModal = document.createElement("div");
    inputModal.classList.add("input-modal");
    const textAreaElement = document.createElement("textarea");
    textAreaElement.classList.add("input-modal__textarea");
    textAreaElement.maxLength = 50;
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("input-modal__row-btn");
    const addButton = document.createElement("button");
    addButton.innerHTML = "add";
    addButton.onclick = () => this.saveTextToBubblesList(textAreaElement.value);
    buttonRow.appendChild(addButton);
    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "cancel";
    cancelButton.onclick = () => this.removeModal();
    buttonRow.appendChild(cancelButton);
    inputModal.appendChild(textAreaElement);
    inputModal.appendChild(buttonRow);
    inputModalOuter.appendChild(inputModal);
    this.containerElement.appendChild(inputModalOuter);
  }
}
