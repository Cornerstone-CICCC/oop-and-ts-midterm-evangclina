import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleDelete(id){
    this.props.cartContext.removeProduct(id)
  }

  handleUpdate(id){
    this.props.cartContext.updateQuantity(id)
  }

  render() {
    const cartLi = document.createElement("li")


    cartLi.innerHTML =`
      <div class="item-price">
        <span><strong>${this.props.product.newItem.title}</strong></span>
        $${this.props.product.newItem.price * this.props.product.qty} 
        <p>qty: ${this.props.product.qty}</p>
      </div>
      <div class="delete">
        <button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
      </div>
    `

    cartLi.querySelector(".delete-btn").addEventListener("click", () => this.handleDelete(this.props.product.id))

    return cartLi
  }
}