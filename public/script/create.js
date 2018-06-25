//Arrays initialized
var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];


// Checks to see if index cards are in local storage

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

//Outputs value to front and back of index card
document.querySelector("#card1").innerHTML = HtmlQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[0];


$("#htmllink li").addClass("active");
$("#csslink li").removeClass("active");
$("#jslink li").removeClass("active");