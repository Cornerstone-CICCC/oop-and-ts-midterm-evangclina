import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props){
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.productListElement = null 
    this.cartItemCount = null 
  }

  updateCart(cart){
    this.state.cart = cart

    this.productListElement.innerHTML = ''

    this.state.cart.forEach(product => {
      const cartItem = new CartItem({
        product, 
        cartContext: this.props.cartContext
      })
      this.productListElement.appendChild(cartItem.render())
    });

    const totalQty = this.props.cartContext.cart.reduce((acc,curr) => {
      return acc + curr.qty
    }, 0)


    const qtyElement = document.createElement("span")
    const priceElement = document.createElement("div")

    qtyElement.innerHTML =`(${totalQty})`
    
    this.cartItemCount.innerHTML = ` (${totalQty})`
    
    priceElement.innerHTML = `<span>Subtotal $${this.props.cartContext.getTotalCost()}</span>`
    this.productListElement.append(priceElement)

    if(totalQty === 0){
      this.productListElement.innerHTML = `
        <img src="../assets/sadcat.png" alt="sad cat">
        <p>Your cart is empty</p>
      `
    }
  }


  render() {  
    const cartElement = document.createElement("div")
    cartElement.innerHTML = `
      <h3 id="cart">Your Cart<span> (0)</span></h3>
      <div class="cart-items">
        <img src="../assets/sadcat.png" alt="sad cat">
        <p>Your cart is empty</p>
      </div>
      <button>Checkout</button>
    `

    this.productListElement = cartElement.querySelector(".cart-items")
    this.cartItemCount = cartElement.querySelector("#cart span")


    return cartElement
  }
}