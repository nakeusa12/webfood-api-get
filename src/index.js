import "./style.css";
import "./javascripts/components/top-nav.js";
import "./javascripts/components/slideshow.js";
import UIkit from 'uikit';
import { Navbar, main } from "./javascripts/main.js";

import "./img/logo2.svg";
import "./img/meal4.jpg";
import "./img/meal2.jpg";
import "./img/meal3.jpg";
import "./img/mouse.svg";
import "./img/search-icon.svg";

document.addEventListener("DOMContentLoaded", Navbar);
document.addEventListener("DOMContentLoaded", main);
UIkit();