//Arrays initialized
var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];

var k = 0;
// Checks to see if index cards are in local storage, will load saved array in new array, if not does nothing
if (JSON.parse(localStorage.getItem("jquestions")) != null) {
  JsQuestion = JSON.parse(localStorage.getItem("jquestions"))
  console.log('Array Overridden');
} else {
  console.log('Do Nothing');
}

if (JSON.parse(localStorage.getItem("janswers")) != null) {
  JsAnswer = JSON.parse(localStorage.getItem("janswers"))
  console.log('Array Overridden');
} else {
  console.log('Do Nothing');
}

//Converts array into an object for Mondo DB
var JsQuestionObj = Object.assign({}, JsQuestion);
var JsAnswerObj = Object.assign({}, JsAnswer);

function JsStatus() {
  document.querySelector("#cardstatus").innerHTML = 'JS CARD ' + (k + 1) + ' of' + " " + JsQuestion.length;

}
JsStatus();

//Outputs value to front and back of index card
document.querySelector("#card1").innerHTML = JsQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = JsAnswer[0];
document.getElementById("csslink").style.pointerEvents = "initial";
document.getElementById("htmllink").style.pointerEvents = "initial";
document.getElementById("jslink").style.pointerEvents = "none";

//switches class to the active class of the current page
$("#htmllink li").removeClass("active");
$("#csslink li").removeClass("active");
$("#jslink li").addClass("active");
