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
      </div>
      <h3>${this.props.product.title}</h3>
      <p class="price">$${this.props.product.price}</p>


      <div class="overlay">
        <div class="modal">
          
          <img src="${this.props.product.image}" alt="${this.props.product.title} image">
        
          <div class="modal-info">
            <p class="rating"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#607fc6"><path d="m314-698 110-142q10.81-14.45 25.69-21.23 14.87-6.77 31.09-6.77t30.72 7q14.5 7 25.5 21l110 142 168 55q23 8 36 26.7 13 18.69 13 41.3 0 10.72-3.03 21.45-3.04 10.72-9.97 20.55L743-382l4 162q0 31-21 52.5T675.82-146q-1.82 0-18.82-3l-177-49-177.05 49.04Q298-147 293.5-146.5q-4.5.5-9.03.5-28.99 0-50.73-21.5T213-220l4-162-108-151q-7-10-10-20t-3-21.03q0-22.97 13.18-41.99Q122.36-635.04 146-643l168-55Zm42 62-188 62 120.9 171.04L285-218l195-55 196 54-5-185 121-171-189-61-123-158-124 158Zm124 130Z"/></svg>  ${this.props.product.rating.rate} (${this.props.product.rating.count})</p>
            <h3 class="title">${this.props.product.title}</h3>
            <p class="price">$${this.props.product.price}</p>
            <h5>Item Description:</h5>
            <p class="description">${this.props.product.description}</p>
            <button class="add-btn">Add to Cart</button>
          </div>
          <button class="close-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>          
        </div>
      </div>
    `
    product.querySelector(".add-btn").addEventListener("click", this.handleAddToCart)
    // product.querySelector(".overlay.add-btn").addEventListener("click", this.handleAddToCart)

    product.querySelector(".close-btn").addEventListener("click", function(){
      product.querySelector(".overlay").style.display = "none"
    })

    product.querySelector(".img-div").addEventListener("click", () => {
      product.querySelector(".overlay").style.display = "grid"
    })

    return product
  }
}