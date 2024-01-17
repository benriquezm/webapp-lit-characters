import { LitElement, html } from 'lit';

export class MyWebcomponentObj extends LitElement {
    static get properties() {
        return {
            person: {
                type: Object,
            },
        };
    }

    render() {
        console.log("propertie persons typeof: ", typeof this.person);
        console.log("propertie persons value: ", this.person);
        return html`
            <p>Hola Mundo!!!</p>
        `;
    }
}

customElements.define('my-webcomponent-obj', MyWebcomponentObj);
