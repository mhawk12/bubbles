import { ipcRenderer } from "electron";
import {
  BUBBLE_COLORS,
  BUBBLE_TEXTS,
  GET,
  SET,
  ADD,
  DELETE,
  STORE,
} from "../../globals/globals";

export default class Store {
  // private path: string;
  constructor() {
    // this.path = path.join(__dirname, "../../", "data.json");
    // this.data = this.parseDataFile(this.path);
  }

  // public expose(): Store {
  //   return this;
  // }


  public set(): void {
    // fs.writeFile(this.path, JSON.stringify(this.data, null, 2), (err: any) =>
    //   console.log("ERROR WRITING FILE", err)
    // );
  }

  public addBubble(bubbleText: string) {
    // this.bubblesTextData.push(bubbleText);
    ipcRenderer.send(STORE, [ADD, BUBBLE_TEXTS, bubbleText]);
  }

  public deleteBubble(index: string): void {
    // this.data["bu((bblesTextData"].splice(index, 1);
    ipcRenderer.send(STORE, [DELETE, BUBBLE_TEXTS, index]);
  }

  // private parseDataFile(
  //   filePath: string
  // ): { bubbleColors: string[]; bubblesTextData: [] } {
  //   try {
  //     return JSON.parse(fs.readFileSync(filePath));
  //   } catch (error) {
  //     console.log("FILE READING ERROR", error);
  //     return { bubbleColors: [], bubblesTextData: [] };
  //   }
  // }
}
