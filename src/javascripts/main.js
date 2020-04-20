import "./components/meal-area.js";
import "./components/content-search.js";
import DataApi from './api/data-api.js';


const Navbar = () => {
    const menuNav = document.querySelector(".nav")
    const menuToggler = document.querySelector(".menu-toggler");

    menuToggler.addEventListener("click", function () {
        menuNav.classList.toggle("open");
        this.classList.toggle("open");
    })

    window.addEventListener("scroll", () => {
        const menuArea = document.querySelector(".top-nav");

        if (window.pageYOffset > 0) {
            menuArea.classList.add("cus-menu");
        } else {
            menuArea.classList.remove("cus-menu")
        }
    })
}

const main = () => {
    const contentSearch = document.querySelector("content-search");
    const mealArea = document.querySelector("meal-area");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataApi.findFood(contentSearch.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealArea.meals = results;
    };

    const fallbackResult = message => {
        mealArea.renderError(message);
    };

    contentSearch.clickEvent = onButtonSearchClicked;
};


export { Navbar, main };