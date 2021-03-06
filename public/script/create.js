//Arrays initialized
var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];
var i=0;

// Checks to see if index cards are in local storage, will load saved array in new array, if not does nothing
if(JSON.parse(localStorage.getItem("hquestions")) != null){
  HtmlQuestion = JSON.parse(localStorage.getItem("hquestions"))
  console.log('Array Overridden'); 
}else{
  console.log('Do Nothing');
}

if(JSON.parse(localStorage.getItem("hanswers")) != null){
  HtmlAnswer = JSON.parse(localStorage.getItem("hanswers"))
  console.log('Array Overridden'); 
}else{
  console.log('Do Nothing');
}
//Converts array into an object for Mondo DB
var HtmlQuestionObj = Object.assign({}, HtmlQuestion);
var HtmlAnswerObj = Object.assign({}, HtmlAnswer);


function htmlStatus(){
  document.querySelector("#cardstatus").innerHTML = 'HTML CARD ' + (i+1) + ' of' + " " + HtmlQuestion.length;
}
htmlStatus();
//Outputs value to front and back of index card
document.querySelector("#card1").innerHTML = HtmlQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[0];
//switches class to the active class of the current page
$("#htmllink li").addClass("active");
$("#csslink li").removeClass("active");
$("#jslink li").removeClass("active");