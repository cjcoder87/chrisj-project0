//Arrays initialized
var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];
var j = 0;

// Checks to see if index cards are in local storage, will load saved array in new array, if not does nothing
if (JSON.parse(localStorage.getItem("cquestions")) != null) {
  CssQuestion = JSON.parse(localStorage.getItem("cquestions"))
  console.log('Array Overridden');
} else {
  console.log('Do Nothing');
}

if (JSON.parse(localStorage.getItem("canswers")) != null) {
  CssAnswer = JSON.parse(localStorage.getItem("canswers"))
  console.log('Array Overridden');
} else {
  console.log('Do Nothing');
}

//Converts array into an object for Mondo DB
var CssQuestionObj = Object.assign({}, CssQuestion);
var CssAnswerObj = Object.assign({}, CssAnswer);

function CssStatus() {
  document.querySelector("#cardstatus").innerHTML = 'CSS CARD ' + (j + 1) + ' of' + " " + CssQuestion.length;

}
CssStatus();

//Outputs value to front and back of index card
document.querySelector("#card1").innerHTML = CssQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = CssAnswer[0];
document.getElementById("csslink").style.pointerEvents = "none";
document.getElementById("htmllink").style.pointerEvents = "initial";
document.getElementById("jslink").style.pointerEvents = "initial";
document.querySelector("#card1").style.display = "block";

//switches class to the active class of the current page
$("#htmllink li").removeClass("active");
$("#csslink li").addClass("active");
$("#jslink li").removeClass("active");

