import Modal from "./modal";

export default class Add {
  private bodyElement: HTMLElement | null;
  private readonly modal: Modal;

  constructor(modal: Modal) {
    this.bodyElement = document.getElementsByTagName("body")[0];
    this.modal = modal;
  }

  // public expose(): Add {
  //   return this;
  // }

  public addButton(): void {
    if (this.bodyElement === null) {
      console.error("add.ts, body element not found");
      return;
    }
    const button = document.createElement("button");
    button.classList.add("add-btn");
    button.innerHTML = "+";
    button.onclick = () => this.modal.createInputModal();
    this.bodyElement.appendChild(button);
  }
}
