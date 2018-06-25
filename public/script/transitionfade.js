//After clicking subject cards fades in and out to give the effect the cards are actually changing
$(document).ready(function () {
  $("#htmllink, #jslink, #csslink").click(function () {

    $(".flip-container").fadeOut("slow");
    $(".flip-container").fadeIn(400);
    $(".flashcard2 p").fadeIn(400);
    $("#card1").delay(500).fadeIn(400);
  });
});