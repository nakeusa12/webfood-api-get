
class SlideShow extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"
        uk-slideshow="min-height: 300; max-height: 650; animation: push; autoplay:true; autoplay-interval: 3000;  ">
        <ul class="uk-slideshow-items">
          <li>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
              <img src="./img/meal4.jpg" alt="" uk-cover />
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
              <div uk-slideshow-parallax="scale: 1,1,0.8">
                <h2 uk-slideshow-parallax="x: 200,0,0" class="title">
                  Aneka Ragam Makanan
                </h2>
                <p uk-slideshow-parallax="x: 400,0,0;" class="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
              <img src="./img/meal2.jpg" alt="" uk-cover />
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
              <div uk-slideshow-parallax="scale: 1,1,0.8">
                <h2 uk-slideshow-parallax="x: 200,0,0" class="title">
                  Makanan Special
                </h2>
                <p uk-slideshow-parallax="x: 400,0,0;" class="desc">
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
              <img src="./img/meal3.jpg" alt="" uk-cover />
            </div>
            <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
            <div class="uk-position-center uk-position-medium uk-text-center">
              <div uk-slideshow-parallax="scale: 1,1,0.8">
                <h2 uk-slideshow-parallax="x: 200,0,0" class="title">
                  Makanan Langka
                </h2>
                <p uk-slideshow-parallax="x: 400,0,0;" class="desc">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </li>
        </ul>
  
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
          uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
          uk-slideshow-item="next"></a>
  
        <div class="mouse">
          <a href="#section">
            <img src="./img/mouse.svg" alt="" />
          </a>
        </div>
      </div>
          `;
    }

}

customElements.define("slide-show", SlideShow);