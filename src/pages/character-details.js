import { html, LitElement } from 'lit';

import '../components/header/my-header';
import '../components/detailview/my-detail';

export class CharacterDetails extends LitElement {
  constructor() {
    super();
  }
  /*static properties = {
    characterId: { type: Number },
  }

  firstUpdated() {
    super.firstUpdated();
    this.characterId = this.location.params?.characterid;
  }*/

  render() {
    return html`
      <my-header></my-header>
      <my-detail></my-detail>
    `;
  }
}

customElements.define('page-character-details', CharacterDetails);
