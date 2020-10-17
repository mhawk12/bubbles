import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { GET, ADD, DELETE, STORE } from "./globals/globals";
import Store from "./services/store";
export default class Main {
  private createWindow(): void {
    const store = new Store();
    const mainWindow = new BrowserWindow({
      backgroundColor: "#060606",
      minWidth: 850,
      minHeight: 650,
      minimizable: false,
      maximizable: false,
      resizable: false,
      // frame: false,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
      },
    });

    const mainURL = "file://" + path.join(__dirname, "./public/index.html");
    (async () => mainWindow.loadURL(mainURL))();

    ipcMain.on(STORE, (event: Event, message: string[]) => {
      const operation = message[0];
      const key = message[1];
      const value = message[2];
      switch (operation) {
        case GET:
          mainWindow.webContents.send(STORE, key, store.get(key));
          break;
        case ADD:
          store.add(key, value);
          break;
        case DELETE:
          store.delete(key, parseInt(value));
          break;
      }
    });

    app.on("window-all-closed", () => {
      app.quit();
    });

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) this.createWindow();
    });

    app.on("before-quit", () => {
      store.set();
    });

    // mainWindow.webContents.openDevTools();
  }

  public start(): void {
    app.whenReady().then(this.createWindow);
  }
}
