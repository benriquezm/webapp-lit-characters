import { html, LitElement } from 'lit';

export class NotFound extends LitElement {
  constructor() {
    super();
  }
  
  render() {
    return html`
      <h1>Page not found</h1>
    `;
  }
}

customElements.define('page-not-found', NotFound);
