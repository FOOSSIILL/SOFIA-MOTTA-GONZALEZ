import * as components from "./components/index.js"
import { data } from "./data.js";

class AppContainer extends HTMLElement {

constructor () {
    super();
    this.attachShadow ({mode:'open'});
}

connectedCallback() {
    this.render();
}

render() {
data.forEach(user => {
    this.shadowRoot.innerHTML += `
    <my-profile name = "${user.name}" uid="${user.uid}" alter="${user.alter}" specie="${user.specie}" gender="${user.gender}" house="${user.house}" year of birth="${user.year}"></my-profile>
    <my-button message="Registra tu like"></my-button>
    `
});
}
}

customElements.define("app-container", AppContainer);