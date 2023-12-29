import { LitElement, html } from 'lit';

import '../card/card';

export class CardList extends LitElement {
    static properties = {
        characters: []
    }

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
            }
        ]
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class='row row-cols-1 row-cols-md-3 g-4'>
                ${this.characters.map((character) => {
                    const { id, image, name } = character;
                    return html`
                        <card-element
                            id=${id}
                            image=${image}
                            name=${name}
                        />
                    `
                })}
            </div>
        `;
    }
}

customElements.define('card-list', CardList);
