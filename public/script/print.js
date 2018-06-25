var d = 0;
//prints HTML Questions
function printQuestions() {
  for (d = 0; d < HtmlQuestion.length; d++) {

    document.querySelector("#displayhtmlcards").innerHTML +=
      '<section class="flip-container"' + '>' +
      '<section class="flipper">' +
      '<section class="front flashcard">' +
      '<p id="card2">' + HtmlQuestion[d] + '</p>' +
      '</section>' +
      '<section class="back flashcard2">' +
      '<p>' + HtmlAnswer[d] + '</p>' +
      '</section>' +
      '</section>' +
      '</section> ';

  }
  d = 0;
}

//prints CSS Questions
function printQuestions2() {
  for (d = 0; d < CssQuestion.length; d++) {

    document.querySelector("#displaycsscards").innerHTML +=
      '<section class="flip-container"' + '>' +
      '<section class="flipper">' +
      '<section class="front flashcard">' +
      '<p id="card2">' + CssQuestion[d] + '</p>' +
      '</section>' +
      '<section class="back flashcard2">' +
      '<p>' + CssAnswer[d] + '</p>' +
      '</section>' +
      '</section>' +
      '</section> ';

  }
  d = 0;
}

//prints CSS Questions            
function printQuestions3() {
  for (d = 0; d < JsQuestion.length; d++) {
    document.querySelector("#displayjscards").innerHTML +=
      '<section class="flip-container"' + '>' +
      '<section class="flipper">' +
      '<section class="front flashcard">' +
      '<p id="card2">' + JsQuestion[d] + '</p>' +
      '</section>' +
      '<section class="back flashcard2">' +
      '<p>' + JsAnswer[d] + '</p>' +
      '</section>' +
      '</section>' +
      '</section> ';
  }
  d = 0;
}
//Print All Questions
function printAll() {
  printQuestions()
  printQuestions2()
  printQuestions3()

}