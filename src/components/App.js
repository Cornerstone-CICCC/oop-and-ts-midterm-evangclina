import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";


export class App extends Component {
  render() {
    const container =  document.createElement("div")
    container.className = "container"
    container.innerHTML = `
      <header id="header" class="header"></header>
      <div class="content">
        <main>
          <div id="products" class="products"></div>
          <div class="cart"></div>
          <a href="#header"><button class="up-btn"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></button></a>
        </main>
      </div>
      <footer class="footer"></footer>
    `

    const upBtn = container.querySelector(".up-btn")

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
      } else {
        upBtn.style.display = "none";
      }
    }

    //Render components 
    const header = new Header().render()
    const footer = new Footer().render()
    const cart = new CartList({ cartContext: this.props.cartContext }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext })

    container.querySelector(".header").appendChild(header)
    container.querySelector(".footer").appendChild(footer)
    container.querySelector(".cart").appendChild(cart)

    productList.mount(container.querySelector(".products"))

    return container
  }
}