import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export class App extends Component {
  render() {
    const container =  document.createElement("div")
    container.className = "container"
    container.innerHTML = `
      <header class="header"></header>
      <div class="content">
        <main>
          <h1>My shop</h1>
        </main>
      </div>
      <footer class="footer"></footer>
    `


    //Render components 
    const header = new Header().render()
    const footer = new Footer().render()

    container.querySelector(".header").appendChild(header)
    container.querySelector(".footer").appendChild(footer)

    return container
  }
}