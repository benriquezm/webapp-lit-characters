import { LitElement, html } from 'lit';

export class MyWebcomponentAttribute extends LitElement {
    static get properties() {
        return {
            name: {
                type: String,
                attribute: 'fullname',
            },
        };
    }

    render() {
        console.log("propertie name typeof: ", typeof this.name);
        console.log("propertie name value: ", this.name);
        return html`
            <p>Hola Mundo!!!</p>
        `;
    }
}

customElements.define('my-webcomponent-attribute', MyWebcomponentAttribute);
