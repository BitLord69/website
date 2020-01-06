class CVManager {
  constructor() {
    this.loadCV();
  } // constructor

  async loadCV() {
    let cvData = await $.getJSON("json/mycv.json");
    this.cv = new CV(cvData);
  } // loadCV

  render() {
    let str =
      this.cv == undefined
        ? "CV not loaded yet - please try again in a short while!"
        : this.cv.render();
    $(".cnt").html(str);
  } // render
} // class CVManager
