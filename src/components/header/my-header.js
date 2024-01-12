import { LitElement, html, css } from "lit";

export class MyHeader extends LitElement{
    static styles = css`
        header {
            width: 100%;
        }
        .header-img{
            width: 100%;
        }

        @media (min-width: 1200px){
            .header-container{
                width: 100%;
                height: 308px;
                display: flex;
                justify-content: center;
                background-color: black;
            }
            .header-img{
                height: 300px;
                width: 50%;
            }
        }
    `;
    constructor() {
        super();
    }

    render() {
        return html`
            <header>
                <div class="header-container">
                    <img class="header-img" src="rick&morty_logo.png" alt="" />
                </div>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);