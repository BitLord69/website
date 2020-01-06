// Click handler to add text when a list-item is clicked in the navbar
$(document).on("click", "ul li", e => {
  // Stop the page from reloading
  e.preventDefault();

  // Add some text in the content area
  const elem = $('<article class="added">');
  elem.append(`<h3>Tillagd text ${++clickCount}`);
  elem.append("<p>Här kommer lite tillagd text....");
  $(".content").append(elem);

  // Remove the active class from currently selected
  // I know it can be done with a more general $("li")-selector,
  // but want to remove it from just the selected item
  $(".active").removeClass("active");

  // Make sure to set the LI-element to active,
  // so check if the actual link got clicked on
  if (e.target.tagName === "A")
    $(e.target)
      .parent()
      .addClass("active");
  else $(e.target).addClass("active");
});

// Clickhandler to remove clicked article in the main content area
$(document).on("click", ".added", e => {
  $(e.currentTarget).remove();
});

// Count the number of times a li/link has been clicked
let clickCount = 0;
