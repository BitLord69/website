class CVManager {
  constructor() {
    loadCV();
  } // constructor

  async loadCV() {
    let cvData = await $.getJSON("json/mycv.json");
    this.cv = new CV(cvData);
  } // loadCV
} // class CVManager
