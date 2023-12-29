import { LitElement, html } from 'lit';

export class Card extends LitElement {
    static properties = {
        name: {},    // TODO a property is always declared as an object?
        id: {},
        image: {}
    }

    constructor() {
        super();
        this.id = '';
        this.image = '';
        this.name  = '';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class='col'>
                <div class='card text-center h-100'>
                    <img src=${this.image} class='img-circle rounded-circle my-4' alt=${this.name} />
                    <div class='card-body'>
                        <h5 class='card-title'>${this.name}</h5>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('card-element', Card);
