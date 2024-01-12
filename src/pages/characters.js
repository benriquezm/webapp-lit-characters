import { html, LitElement } from 'lit';

import '../components/header/my-header';

export class Characters extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <my-header>
        <h1>Page of Characters</h1>
      </my-header>
    `;
  }
}

customElements.define('page-characters', Characters);
