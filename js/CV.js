class CV {
  constructor(data) {
    Object.assign(this, data.basics);

    this.works = data.work;
    this.volunteering = data.volunteer;
    this.education = data.education;
    this.skills = data.skills;
    this.languages = data.languages;
  } // constructor

  render() {
    return `<h1>Name:</h1><strong>${this.name}</strong>`;
  }
} // class CV
