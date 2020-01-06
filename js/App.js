class App {
  constructor() {
    // (we will add more routes when we have read
    //  the products from JSON)
    this.routes = {
      "": new StartPage(),
      page404: new Page404(),
      cv: new CVManager()
    };

    // Hide the menu
    $(".menu").hide();

    // Listen to hash changes - rerender...
    $(window).on("hashchange", () => this.changeRoute());

    // Listen for clicks on the hamburger/toggler and display the menu
    $("body").on("click", ".toggler:checked", e => {
      $(".menu").show();
    });

    // Listen for clicks on collapsable menu items, hide the menu and restore the hamburger
    $("body").on("click", ".collapse", e => {
      $(".menu").hide();
      $(".toggler").trigger("click");
    });

    this.changeRoute();
  } // constructor

  changeRoute() {
    // Get the hash from the url - remove the #-sign
    let hash = location.hash.replace(/#/g, "");
    // The first part of the hash is everything before a '-' character
    let hashFirstPart = hash.split("-")[0];
    // Look up the "page to show" - the instance to call render on
    // if we do not find any page set the page to 'page404'
    let pageToShow = this.routes[hash] || this.routes.page404;

    // Hide the menu if it's open
    // if ($(".menu").css("visibility") == "visible") {
    //   $(".menu").css("visibility", "hidden");
    // }

    // Render content
    pageToShow.render();
  } // changeRoute
} // class App
