class TopNav extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="top-nav">
            <div class="logo">
                <a href="#"><img src="./img/logo2.svg" alt=""></a>
            </div>
            <div class="menu-toggler">
                <div class="bar half start"></div>
                <div class="bar"></div>
                <div class="bar half end"></div>
            </div>
        </div>
        `;
    }

}

customElements.define("top-nav", TopNav);