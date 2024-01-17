import { LitElement, html } from 'lit';

import './my-webcomponent-obj';
import './my-webcomponent-attribute';

export class MyMain extends LitElement {
    /**
     * Render example for binding from JavaScript file
     */
    /*render() {
        return html`
            <p>Hola Mundo!!!</p>
            <my-webcomponent-obj person="{'name': 'Pedro', 'age': 25}"></my-webcomponent-obj>
            <my-webcomponent-obj persons='["Ana", "Juan"]'></my-webcomponent-obj>
            <my-webcomponent-obj .person=${JSON.parse('{"name": "Pedro", "age": 25}')}></my-webcomponent-obj>
            <my-webcomponent-obj persons="['Ana', 'Juan']"></my-webcomponent-obj>
        `;
    }*/
    /**
     * Render example for correct binding use Attribute
     */
    /*render() {
        return html`
            <my-webcomponent-attribute name="Some Name"></my-webcomponent-attribute>
            <my-webcomponent-attribute persons='["Ana", "Juan"]'></my-webcomponent-attribute>
            <my-webcomponent-attribute persons="['Ana', 'Juan']"></my-webcomponent-attribute>
            <my-webcomponent-attribute fullname="Some Name"></my-webcomponent-attribute>
        `;
    }*/
    /*render() {
        return html `
            <my-webcomponent-conditional .isShouldRender=${true}></my-webcomponent-conditional>
        `;
    }*/
}

customElements.define('my-main', MyMain);
