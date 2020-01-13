class Panorama {
  constructor() {
    this.loadFileList();
  } // constructor

  async loadFileList() {
    this.fileList = await $.getJSON("json/filelist.json");
  } // loadFileList

  render() {
    let str =
      this.fileList == undefined
        ? "File list not loaded yet - please try again in a short while!"
        : "<h1>A mighty panorama gallery will soon hit this very page!</h1>";

    // str += /*html*/ `<div class="panorama-main"><div class="panorama-top"></div><div class="panorama-center"></div><div class="panorama-bottom"></div></div>`;
    str += /*html*/ `
    <div class="container">
      <div class="panorama-main">
        <div id="photoCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">`;

    let sActive = "active";
    let counter = 0;
    for (let photo of this.fileList) {
      str += /*html*/ `
        <li data-target="#photoCarousel" data-slide-to="${counter}" class="${sActive}"></li>`;

      counter++;
      if (sActive === "active") sActive = "";
    }

    str += /*html*/ `
          </ol>
        <div class="carousel-inner">`;

    sActive = "active";
    for (let photo of this.fileList) {
      str += /*html*/ `
        <div class="carousel-item ${sActive}">
          <img src="img/pano/${photo.filename}" class="d-block w-100 c-img" alt="...">
          <div class="image-caption">
            <h5>${photo.filename}</h5>
            <p>${photo.description}</p>
          </div>
      </div>`;

      // <div class="carousel-caption d-none d-md-block">
      //   <h5>${photo.filename}</h5>
      //   <p>${photo.description}</p>
      //   <p>${photo.country}</p>
      // </div>

      if (sActive === "active") sActive = "";
    }

    str += /*html*/ `
      <a class="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      </div> 
      </div> 
    </div>`;

    $(".cnt").html(str);
    $(".panorama-main").show();
  } // render
} // class Panorama
