import Store from "./store";

export default class Bubbles {
  private bubblesTextData: string[];
  private bubblesColors: string[];
  private filteredBubblesTextData: string[];
  private mainElement: HTMLElement | null;
  private store: Store;
  constructor(bubblesData: string[], bubblesColors: string[], store: Store) {
    this.bubblesTextData = bubblesData;
    this.bubblesColors = bubblesColors;
    this.filteredBubblesTextData = Object.create(this.bubblesTextData);
    this.store = store;
    this.mainElement = document.getElementById("main");
  }

  // public expose(): Bubbles {
  //   return this;
  // }

  public setBubbleColors(bubblesColors: string[]): void {
    this.bubblesColors = bubblesColors;
  }

  public setBubblesText(bubblesTextData: string[]): void {
    this.bubblesTextData = bubblesTextData;
    this.filteredBubblesTextData = [...this.bubblesTextData];
    this.generateBubbles();
  }

  // public addBubble(bubbleText: string): void {
  //   this.bubblesTextData.push(bubbleText);
  //   this.filteredBubblesTextData = [...this.bubblesTextData];
  //   this.store.addBubble(bubbleText);
  // }

  private deleteBubble(index: string): void {
    this.bubblesTextData.splice(parseInt(index), 1);
    this.filteredBubblesTextData.splice(parseInt(index), 1);
    this.store.deleteBubble(index);
    this.generateBubbles();
  }

  public filterBubbleTexts(bubbleText: string): void {
    bubbleText = bubbleText.toLowerCase();
    this.filteredBubblesTextData = this.bubblesTextData.filter(
      (bubbleTextData: string) =>
        bubbleTextData.toLowerCase().indexOf(bubbleText) > -1
    );
    this.generateBubbles();
  }

  public saveTextToBubblesList(bubbleText: string): void {
    bubbleText = bubbleText.toUpperCase();
    this.bubblesTextData.push(bubbleText);
    this.filteredBubblesTextData.push(bubbleText);
    this.generateBubbles();
    this.store.addBubble(bubbleText);
  }

  public generateBubbles(): void {
    if (this.mainElement === null) {
      console.log("bubbles.ts, main element not found");
      return;
    }
    this.mainElement.innerHTML = "";
    this.filteredBubblesTextData.forEach((data, index) => {
      const bubbleElement = document.createElement("div");
      bubbleElement.classList.add("bubble");
      const bubbleTextElement = document.createElement("div");
      bubbleTextElement.classList.add("bubble__text");
      bubbleTextElement.innerHTML = data.toUpperCase();
      bubbleElement.appendChild(bubbleTextElement);
      const bubbleDeleteButton = document.createElement("button");
      bubbleDeleteButton.classList.add("bubble__delete-btn");
      bubbleDeleteButton.value = index.toString();
      bubbleDeleteButton.innerHTML = "-";
      bubbleDeleteButton.onclick = () =>
        this.deleteBubble((bubbleDeleteButton.value));
      bubbleElement.appendChild(bubbleDeleteButton);
      bubbleElement.style.color = this.bubblesColors[
        index % this.bubblesColors.length
      ];
      if (this.mainElement === null) {
        console.log(
          "bubbles.ts, generateBubbles-->forEach, main element not found"
        );
        return;
      }
      this.mainElement.appendChild(bubbleElement);
    });
  }
}
