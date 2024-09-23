import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("div")
    footer.innerHTML = `
     <p>© Copyright 2024. All rights reserved </p>
    `
    return footer
  }
}