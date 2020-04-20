class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: flex;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.4);
            border-radius: 10px;
            width: 80%;
            overflow: hidden;
            margin-bottom: 20px;
            flex-direction: row;
        }
       
        .gambar {
            width: 100%;
            max-height: 410px;
            object-fit: cover;
            object-position: center;
        }
       
        .food-info {
            padding: 24px;
        }
       
        .food-info > h2 {
            font-size: 2rem !important;
            font-weight: 600;
            color: #FF7315 !important;
        }
        
        .food-info > p{
            font-size: 1rem !important;
            height: 220px !important; 
            overlay: hidden !important;
        }

        .btn-card{
            padding: 5px 10px;
            background-color: #FF7315 ;
            border-radius: 5px;
            text-decoration: none;
            color: white;
        }
        .food-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
            margin-bottom: 10px;
        }

        @media only screen and (max-width: 768px){
            :host{
                flex-direction: column;
            }
        }


    </style>
    <img class="gambar" src="${this._meal.strMealThumb}" alt="">
    <div class="food-info">
        <span># ${this._meal.strCategory}</span>
        <h2>${this._meal.strMeal}</h2>
        <p>${this._meal.strInstructions}</p>
        <a href="" class="btn-card">From : ${this._meal.strArea}</a>
    </div>`;
    }
}

customElements.define("meal-item", MealItem);