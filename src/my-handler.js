import { LitElement, html, nothing } from 'lit';

export class MyHandler extends LitElement {
    static get properties() {
        return {
            object: {
                type: Object,
            }
        };
    }

    constructor() {
        super();
        this.object = { myProp: 'Initial value' };
    }

    handleClick() {
        console.log('click me!');
        this.object.myProp = 'New value';
    }

    render() {
        return html`
            <h2>${this.object.myProp}</h2>
            <button @click=${this.handleClick}>Click me!</button>
        `;
    }
}

customElements.define('my-handler', MyHandler);
