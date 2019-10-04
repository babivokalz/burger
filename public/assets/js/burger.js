$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("You added a new burger!");
      location.reload();
    });
  });

  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log(this);
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("You devoured your burger!");
      location.reload();
    });
  });

  $(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({ type: "DELETE", url: "/api/burgers/" + id }).then(
      location.reload()
    );
  });
});
