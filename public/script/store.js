//Stores index card into array into local storage
function htmlLives() {
  var htmlqpast = HtmlQuestion;
  var htmlapast = HtmlAnswer;
  localStorage.setItem("hquestions", JSON.stringify(htmlqpast));
  localStorage.setItem("hanswers", JSON.stringify(htmlapast));
  console.log('html stored');
}

function CssLives() {
  var Cssqpast = CssQuestion;
  var Cssapast = CssAnswer;
  localStorage.setItem("cquestions", JSON.stringify(Cssqpast));
  localStorage.setItem("canswers", JSON.stringify(Cssapast));
  console.log('css stored');
}

function JsLives() {
  var Jsqpast = JsQuestion;
  var Jsapast = JsAnswer;
  localStorage.setItem("jquestions", JSON.stringify(Jsqpast));
  localStorage.setItem("janswers", JSON.stringify(Jsapast));
  console.log('js stored');

}

