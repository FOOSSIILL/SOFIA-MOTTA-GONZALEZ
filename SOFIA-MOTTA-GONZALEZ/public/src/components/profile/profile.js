class profile extends HTMLElement {

    constructor() {
        super();
        this.shadowRoot({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes () {
        return("name", "alter", "specie", "gender", "house", "year")
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <section>
        <h1>${this.name}</h1>
        <p>${this.alter}</p>
        <p>${this.specie}</p>
        <p>${this.gender}</p>
        <p>${this.house}</p>
        <p>${this.year}</p>
        </section>
        `
    }

}

customElements.define("my-profile", profile);
export default profile;