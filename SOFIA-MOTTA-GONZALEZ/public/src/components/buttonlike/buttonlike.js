class buttonlike extends HTMLElement {
    constructor() {
        super();
        this-this.attachShadow({mode: 'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    static get observedAttributes (){
        retrun ["mesage"]
    }

    attributeChangedCallback(propName, oldValue, NewValue){
        this[propName] = NewValue;

        this.mount();
    }

    connectedCallback(){
        this.mount();
    }

    mount() {
        this.render();
        this.addEventListener();
    }

    addEventListener(){
        this.shadowRoot.querySelector("button").addEventListener('click', this.onButtonClicked);
    }

    render() {
        this.shadowRoot.innerHTML = `
        <section>
        <p>${this.message}</p>
        <button>Dar like</button>
        </section>
        `
    }

    onButtonClicked() {
        const currentValue = this.getAttribute("message");

        this.setAttribute("message", "Gracias por dar like");
    }
}

customElements.define("my-buttom",buttonlike);
export default buttonlike;