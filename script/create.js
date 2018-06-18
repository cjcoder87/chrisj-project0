
var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];

function printQuestions(){
for (i=0;i<HtmlQuestion.length;i++)
{
document.querySelector("#displayhtmlcards").innerHTML += '<li>' + HtmlQuestion[i] + '</li>';
}

}

function printQuestions2(){
  for (i=0;i<HtmlAnswer.length;i++)
  {
  document.querySelector("#displaycsscards").innerHTML += '<li>' + HtmlQuestion[i] + '</li>';
  }
  
  }

  function printQuestions3(){
    for (i=0;i<CssQuestion.length;i++)
    {
    document.querySelector("#displayjscards").innerHTML += '<li>' + CssQuestion[i] + '</li>';
    }
    
    }

    function printAnswer(){
      for (i=0;i<CssAnswer.length;i++)
      {
      document.querySelector("#displayhtmlcardsa").innerHTML += '<li>' + CssAnswer[i] + '</li>';
      }
      
      }

      function printAnswer2(){
        for (i=0;i<JsQuestion.length;i++)
        {
        document.querySelector("#displaycsscardsa").innerHTML += '<li>' + JsQuestion[i] + '</li>';
        }
        
        }

        function printAnswer3(){
          for (i=0;i<JsAnswer.length;i++)
          {
          document.querySelector("#displayjscardsa").innerHTML += '<li>' + JsAnswer[i] + '</li>';
          }
          
          }

          function printAll(){
            printQuestions()
            printQuestions2()
            printQuestions3()
            printAnswer();
            printAnswer2();
            printAnswer3();
          }


