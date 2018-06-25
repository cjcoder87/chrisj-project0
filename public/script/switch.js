
var i = 0;
var j = 0;
var k = 0;
//fade in, fade out effect
function shift() {
  $(".flashcard2 p").css("display", "none");
  $("#card1").css("display", "none");
  $(".flip-container").fadeOut("slow");
  $(".flip-container").fadeIn(400);
  $(".flashcard2 p").fadeIn(400);
  $("#card1").delay(500).fadeIn(400);
}

function rightHTML() {
  console.log('right arrow');
  //checks if array index 1 is not undefined. This means there is another card to display so switch card
  if (HtmlQuestion[i + 1] !== undefined) {
    i++;
    shift();
    document.querySelector('#card1').innerHTML = HtmlQuestion[i];
    document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
    htmlStatus();
  }
}
//checks if array index is greater than 0 becasue this means that there is at least one more card to display going backwards

function leftHTML() {
  console.log('left arrow');
  if (i > 0) {
    i--;
    shift();
    document.querySelector('#card1').innerHTML = HtmlQuestion[i];
    document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
    htmlStatus();
  }

}

function rightCSS() {
  console.log('right arrow');

  if (CssQuestion[j + 1] !== undefined) {
    j++;
    shift();
    document.querySelector('#card1').innerHTML = CssQuestion[j];
    document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
    CssStatus();

  }
}

function leftCSS() {
  console.log('left arrow');
  if (j > 0) {
    j--;
    shift();
    document.querySelector('#card1').innerHTML = CssQuestion[j];
    document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
    CssStatus();

  }
}

function rightJS() {
  console.log('right arrow');

  if (JsQuestion[k + 1] !== undefined) {
    k++;
    shift();
    document.querySelector('#card1').innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
    JsStatus();

  }

}

function leftJS() {
  console.log('left arrow');
  if (k > 0) {
    k--;
    shift();
    document.querySelector('#card1').innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
    JsStatus();


  }

}