export class CartContext {
  static id = 1

  constructor(){
    this.cart = []
    this.listeners = []
  }

  addItem(newItem){
    const findItem = this.cart.find(product => product.newItem.id === newItem.id)
    // console.log(findItem)
    if(findItem){
      this.updateQuantity(findItem.id)
    }else{
      const newCartItem = {
        id: CartContext.id,
        newItem,
        qty: 1
      }
      this.cart.push(newCartItem)
      CartContext.id = CartContext.id + 1
      this.notifyListeners()
    }
  }

  updateQuantity(id){
    const findItem = this.cart.find(product => product.id === id)
    const updatedItem = {
      ...findItem,
      qty: findItem.qty + 1
    }
    this.cart = this.cart.map(item => {
      return findItem.id === item.id ? updatedItem : item
    })
    this.notifyListeners()
  }

  removeProduct(id){
    this.cart = this.cart.filter(cart => cart.id !==id)
    this.notifyListeners()
  }

  getTotalCost(){
    const totalPrice = this.cart.reduce((total, curr) => {
      return total + (curr.newItem.price * curr.qty)
    }, 0)
    return totalPrice.toLocaleString()
  }

  getCart(){
    return this.cart
  }

  subscribe(listener){
    this.listeners.push(listener)
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.cart))
  }
}