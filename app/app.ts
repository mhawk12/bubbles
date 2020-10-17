import Main from "./main";

class App {
  private main: Main;
  constructor() {
    this.main = new Main();
  }

  public static main() {
    const app = new App();
    app.main.start();
  }
}

App.main();
