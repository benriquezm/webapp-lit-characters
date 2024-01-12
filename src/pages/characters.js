import { html, LitElement, css } from 'lit';

import '../components/header/my-header';
import '../components/detailview/my-detail';

export class Characters extends LitElement {
  static properties = {
    characters: [],
  }

  static styles = css`
    .wrapper-list {
      display: grid;
      gap: 1rem;
      /*grid-auto-rows: 22rem;*/
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      background-color: #135964;
      padding: 1.5rem;
    }
  `;

  constructor() {
    super();
    this.characters = [
      {
          "__typename": "Character",
          "name": "Aqua Morty",
          "id": "21",
          "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg"
      },
      {
          "__typename": "Character",
          "name": "Aqua Rick",
          "id": "22",
          "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg"
      },
      {
          "__typename": "Character",
          "name": "Arcade Alien",
          "id": "23",
          "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg"
      },
      {
          "__typename": "Character",
          "name": "Armagheadon",
          "id": "24",
          "image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg"
      },
      {
          "__typename": "Character",
          "name": "Aqua Morty",
          "id": "21",
          "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg"
      },
      {
          "__typename": "Character",
          "name": "Aqua Rick",
          "id": "22",
          "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg"
      }
    ];
  }

  render() {
    console.log(this.characters);
    return html`
      <my-header></my-header>
      <div class="wrapper-list">
        ${this.characters?.map(character => {
          const { id, image, name } = character;
          console.log("name: ", name);
          return html`
            <my-detail
              orientation="vertical"
              image="${image}"
              name="${name}"
            />
          `;
        })}
      </div>
    `;
  }
}

customElements.define('page-characters', Characters);
