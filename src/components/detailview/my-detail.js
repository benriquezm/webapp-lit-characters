import { LitElement, html, css } from "lit";

export class MyDetail extends LitElement{
    static styles = css`
    :host{
        font-family: 'Chakra Petch', sans-serif;
    }
    section{
        margin-top: -6.5px;
    }
    .container{
        display: flex;
        border: 1px solid #7F3C9A;
        flex-direction: column;
        font-size: 22px;
        background-color: #135764;
        .img-container{
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
            .profile-img{
                border-radius: 5px;
                box-shadow: 2px 2px 8px 0 rgb(116,252,9), 4px 4px 16px 0 #7F3C9A, 0px 0px 24px 2px rgb(52,240, 231) ;
            }
        }
        .card{
            padding: 1rem;
            margin-top: 8px;
            p{
                color: #74FC09;
                margin: 0 0 1rem 0;
            }
            .name {
                font-size: 62px;
                font-weight: bold;
                text-align: center;
                color: #7F3C9A;
                margin: 0;
                text-shadow: 1.5px  0px 0px #01B2C6,
                             0px  1.5px 0px #01B2C6,
                             -1.5px  0px 0px #01B2C6,
                             0px -1.5px 0px #01B2C6;
            }
            .sub-title{
                color: #34F0E7;
            }
        }

    }

    @media (min-width: 768px){
        .container{
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            padding: 1rem;
            height: 63vh;
            .profile-img{
                width: 325px;
                height: 325px;
            }
            .card{
                margin-left: 1rem;
                .name{
                    font-size: 64px
                }
            } 
        }
    }

    @media (min-width: 1200px){
        .container{
            height: 70vh;
        }
        .profile-img{
            width: 425px;
            height: 425px;

        }  

    }

    `;

    static properties = {
        name: {}, // TODO a property is always declared as an object?
        episode: {},  
        gender:{},
        species:{}, 
        id: {},
        image: {},
        characterId: {},
    }

    constructor() {
        super();
        this.name  = 'Beth Smith';
        this.episode = "Close Rick-counters of the Rick Kind"
        this.gender = "Female",
        this.species = "Human"
        this.id = '';
        this.image = "39.jpeg";
        this.characterId = 21;
    }

    render (){
        return html`
            <section>
                <div class="container">
                    <a href="/">go home</a>
                    <div class="img-container">
                        <img class="profile-img" src= ${this.image} alt=""/>
                    </div>
                    <div class="card">
                        <h1 class="name">${this.name}</h1>
                        <p class="episode"> <span class="sub-title">Episode: </span>${this.episode}</p>
                        <p class="gender"> <span class="sub-title">Gender: </span>${this.gender}</p>
                        <p class="species"> <span class="sub-title">Species: </span>${this.species}</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('my-detail', MyDetail);
