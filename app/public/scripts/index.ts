import Bubbles from "./bubbles";
// import Search from "./search.ts";
import Store from "./store";
import Add from "./add";
import Modal from "./modal";
import { ipcRenderer } from "electron";
import {
  BUBBLE_COLORS,
  BUBBLE_TEXTS,
  GET,
  SET,
  DELETE,
  STORE,
} from "../../globals/globals";

/**
 *
 *
 * @class Index
 */
class Index {
  private bubbles: Bubbles;
  // private readonly search: Search;
  private modal: Modal;
  private store: Store;
  private add: Add;

  constructor() {
    // this.search = new Search("");
    this.store = new Store();
    this.bubbles = new Bubbles([], [], this.store);
    this.modal = new Modal(this.bubbles);
    this.add = new Add(this.modal);
  }

  // public eventListener(event: KeyboardEvent): void {
  //   if (event.key === "Enter") {
  //     const searchText = this.search.getSearchText();
  //     this.bubbles.filterBubbleTexts(searchText);
  //   }
  // }

  public static main(): void {
    const index = new Index();
    index.add.addButton();
    ipcRenderer.send(STORE, [GET, BUBBLE_COLORS, ""]);
    ipcRenderer.send(STORE, [GET, BUBBLE_TEXTS, ""]);
    ipcRenderer.on(STORE, (event: Event, type: string, data: string[]) => {
      switch (type) {
        case BUBBLE_COLORS:
          index.bubbles.setBubbleColors(data);
          break;
        case BUBBLE_TEXTS:
          index.bubbles.setBubblesText(data);
          break;
      }
    });
  }
}

Index.main();
