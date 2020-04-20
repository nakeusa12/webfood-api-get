class ContentSearch extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }


    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-content {
            width: 100%;
            padding: 5rem 0 2rem 0;
            background-color: whitesmoke;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .text-description {
            font-size: 1.2rem;
            width: 50%;
            text-align: center;
            margin-bottom: 20px;
        }
        
        
        .search-container {
            width: 45%;
            padding: 16px;
            display: flex;
            position: sticky;
            top: 10px;
        }
        
        .search-container>input {
            width: 85%;
            padding: 16px;
            border: 0;
            font-weight: bold;
            border: 1px solid #FF7315;
            border-radius: 5px 0px 0px 5px;
        }
        
        .search-container>input:focus {
            outline: 0;
            border: 2px solid #FF7315;
        }
        
        .search-container>input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container>input::placeholder {
            color: #FF7315;
            font-weight: normal;
        }
        
        .search-container>button {
            width: 15%;
            border-radius: 0px 5px 5px 0px;
            cursor: pointer;
            margin-left: auto;
            /* padding: 16px; */
            background-color: #FF7315;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        </style>
        <div class="search-content">
            <div class="text-description">
                Ketik Makanan yang sedang dicari. misalnya: <br>  'Burger', 'Pizza', 'Soup', DLL 
            </div>
            <div id="search-container" class="search-container">
                <input placeholder="Cari Makanan..." id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">
                    <img src="./img/search-icon.svg" alt="">
                </button>
            </div>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }

}

customElements.define("content-search", ContentSearch);