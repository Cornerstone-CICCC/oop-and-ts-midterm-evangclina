import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props){
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart(){
    this.props.cartContext.addItem(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.className = "product"
    product.innerHTML = `
      <div class="img-div">
        <img src="${this.props.product.image}" alt="${this.props.product.title} image">
        <div class="description">
          <p>${this.props.product.description}</p>
        </div>
      </div>
      <h3>${this.props.product.title}</h3>
      <p class="price">$${this.props.product.price}</p>
      <button class="add-btn">Add to Cart</button>
    `
    product.querySelector(".add-btn").addEventListener("click", this.handleAddToCart)

    product.querySelector(".img-div").addEventListener("mouseover", () => {
      product.querySelector(".description").style.opacity = "100%"
      product.querySelector(".description").style.height = "260px"
    })
    product.querySelector(".img-div").addEventListener("mouseout", () => {
      product.querySelector(".description").style.opacity = "0%"
      product.querySelector(".description").style.height = "0"
    })

    return product
  }
}