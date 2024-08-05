import { app } from "electron";
import path from "path";
import fs from "fs";

export default class Store {
  private path: string;
  private data: { [index: string]: string[] };
  private userDataPath: string;
  private defaultBubbleValues: { [index: string]: string[] };

  constructor() {
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
    this.userDataPath = app.getPath("userData");
    this.path = path.join(this.userDataPath, "data.json");
    this.data = this.parseDataFile(this.path);
  }

  public get(key: string): string[] {
    return this.data[key];
  }

  public add(key: string, val: string) {
    this.data[key].push(val);
  }

  public delete(key: string, index: number): void {
    this.data[key].splice(index, 1);
  }

  public set(): void {
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  private parseDataFile(filePath: string): { [index: string]: string[] } {
    try {
      return JSON.parse(fs.readFileSync(filePath).toString());
    } catch (error) {
      return this.defaultBubbleValues;
    }
  }
}
