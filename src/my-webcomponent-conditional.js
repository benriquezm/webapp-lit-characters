import { LitElement, html, nothing } from 'lit';

export class MyWebcomponentConditional extends LitElement {
    static get properties() {
        return {
            isShouldRender: {
                type: Boolean,
            }
        };
    }

    render() {
        //return html `${this.isShouldRender ? html `<label>Condition true</label>` : nothing}`;
        //return html `${this.isShouldRender ? html `<label>Condition true</label>` : ''}`;
        //return html `${this.isShouldRender ? html `<label>Condition true</label>` : null}`;
        //return html `${this.isShouldRender ? html `<label>Condition true</label>` : }`;

        //return this.isShouldRender ? html `<label>Condition true</label>` : nothing;
        //return this.isShouldRender ? html `<label>Condition true</label>` : '';
        //return this.isShouldRender ? html `<label>Condition true</label>` : null;
        //return this.isShouldRender ? html `<label>Condition true</label>` : ;
    }
}

customElements.define('my-webcomponent-conditional', MyWebcomponentConditional);
