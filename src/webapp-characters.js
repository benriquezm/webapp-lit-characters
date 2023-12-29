import { LitElement, html } from 'lit';

import './components/cardlist/cardlist';

export class WebappCharacters extends LitElement {
    static properties = {
        greeting: {}
    }

    constructor() {
        super();
        this.greeting = 'Hola'
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class='container bg-body'>
                <div class='root pb-5'>
                    <card-list></card-list>
                </div>
            </div>
        `;
    }
}

customElements.define('webapp-characters', WebappCharacters);
