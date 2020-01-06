function displayInfobox() {
  // Remove all the previous blocks so we don't get multiple entries
  let items = $(".infoBlock");
  if (items.length > 0) items.remove();

  for (i = 0; i < infopackages.length; i++) {
    let obj = infopackages[i];
    let $newItem = $("#template").clone(true, true);

    // Set a class name so we can get rid of the blocks in subsequent calls to this function
    $newItem.addClass("infoBlock");

    // Replace the HTML for the different parts
    $newItem.find("#templateFname").html(obj.firstname);
    $newItem.find("#templateLname").html(obj.lastname);
    $newItem.find("#templateFood").html(obj.favefood);
    $newItem.find("#templateYoB").html(obj.yob);
    $newItem.find("#templateDay").html(obj.faveDay);
    $newItem.find("#templateAnimal").html(obj.faveAnimal);
    $newItem.find("#templateColor").html(obj.faveColor);
    $newItem.find("#templatePres").html(obj.presentation);

    // We don't wanu multiple elements with the same id,
    // so remove them for the new item
    $newItem.removeAttr("id");
    $newItem.find("#templateFname").removeAttr("id");
    $newItem.find("#templateLname").removeAttr("id");
    $newItem.find("#templateFood").removeAttr("id");
    $newItem.find("#templateYoB").removeAttr("id");
    $newItem.find("#templateDay").removeAttr("id");
    $newItem.find("#templateAnimal").removeAttr("id");
    $newItem.find("#templateColor").removeAttr("id");
    $newItem.find("#templatePres").removeAttr("id");

    // Change the header, show the item and insert it into the HTML
    $("h1").html("Current information in the list");
    $newItem.show();
    $($newItem).insertBefore("#infoButton");
  }

  // Shot the information panel
  $(".information").show();
} // displayInfobox

function checkForm(e) {
  if ($("input:checkbox:checked").length === 0) {
    $(".login-form").reportValidity();
    return false;
  }

  let animal = $("input:checkbox:checked")
    .map(function() {
      return this.value;
    })
    .get()
    .join();

  let pItem = {
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    favefood: $("#favefood").val(),
    yob: $("#birth-year").val(),
    faveDay: $("#favorite-weekday")
      .children("option:selected")
      .val(),
    faveAnimal: animal,
    faveColor: $("input[name='color-choice']:checked").val(),
    presentation: $("#about").val()
  };

  infopackages.push(pItem);

  $(".login-form").hide();
  displayInfobox();

  e.preventDefault();
}

// Get the checkbox group
$cbx_group = $("input:checkbox[name='cbgroup']");

// Start by setting the custom error message for all check boxes
$cbx_group.each(function() {
  this.setCustomValidity("Please select at least one checkbox.");
});

$cbx_group.on("click", function() {
  if ($cbx_group.is(":checked")) {
    // checkboxes become unrequired as long as one is checked
    $cbx_group.prop("required", false).each(function() {
      this.setCustomValidity("");
    });
  } else {
    // require checkboxes and set custom validation error message
    $cbx_group.prop("required", true).each(function() {
      this.setCustomValidity("Please select at least one checkbox.");
    });
  }
});

$("#addAnother").click(function() {
  $(".information").hide();
  $("h1").html("Please enter your information");
  $(".login-form")[0].reset();
  $(".login-form").show();
});

let infopackages = [];

$(".login-form").submit(checkForm);
$(".information").hide();
