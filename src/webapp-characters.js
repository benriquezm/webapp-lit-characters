import { LitElement, html } from "lit";

export class WebappCharacters extends LitElement {
    static properties = {
        greeting: {}
    }

    constructor() {
        super();
        this.greeting = 'Hola'
    }

    render() {
        return html`
            <p>${this.greeting} Mundo!</p>
        `;
    }
}

customElements.define('webapp-characters', WebappCharacters);
