import { LitElement, html } from 'lit';

export class MyWebcomponent extends LitElement {
    static get properties() {
        return {
            persons: {
                type: Array,
            },
        };
    }

    render() {
        console.log("propertie persons typeof: ", typeof this.persons);
        console.log("propertie persons value: ", this.persons);
        console.log("propertie persons validate", Array.isArray(this.persons));
        return html`
            <p>Hola Mundo!!!</p>
        `;
    }
}

customElements.define('my-webcomponent', MyWebcomponent);
