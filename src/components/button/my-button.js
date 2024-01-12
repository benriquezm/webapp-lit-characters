import { LitElement, html, css } from "lit";

export class MyButton extends LitElement{
    static styles = css`
        .a-wrapper{
            height: 3rem;
            display: flex;
            align-items: center;
            text-align: center;
            padding: 1px;
        }
        .back{
            font-family: 'Chakra Petch', sans-serif;
            font-size: 20px;
            font-weight: bold;
            background-color:#7F3C9A;
            color:#74FC09;
            height: 2rem;
            border-radius: 10px;
            width: 7rem;
            text-decoration: none;
        } -A
        .back:hover{
            background-color: #01B2C6;
            color: #7F3C9A;
        }

        @media (min-width: 768px){
            .back{
                height: 2.5rem;
                width: 9rem;
                padding-top: 8px
            }
        }
        @media (min-width: 1200px){
            .a-wrapper{
                margin-top: 3rem;
            }
        }
        
    `;
    constructor() {
        super();
    }

    render() {
        return html`
            <div class="a-wrapper">
                <a href="/" class="back">Back</a>
            </div>
           
        `;
    }
}

customElements.define('my-button', MyButton);