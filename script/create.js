var HtmlQuestion = ['What does HTML stand for?'];
var HtmlAnswer = ['Hyper Text Markup Language'];
var CssQuestion = ['What does CSS stand for?'];
var CssAnswer = ['Cascading Style Sheet'];
var JsQuestion = ['What does JS stand for?'];
var JsAnswer = ['JavaScript'];
var d = 0;


{/* <section class="flip-container" ontouchstart="this.classList.toggle('hover');"> <!-- fl_container -->
                  <section class="flipper">  <!-- fl card shadow -->
                      <section class="front flashcard">
                        <p id="card1"> </p>
                      </section>   <!--  front face end -->
                      <section class="back flashcard2">
                        <p></p>
                      </section> <!-- End of Flash Card2 --> 
                  </section> <!-- End of flipper -->
               </section> <!-- End of flip-container --> */}

function printQuestions(){
for (d=0;d<HtmlQuestion.length;d++)
{
// document.querySelector("#displayhtmlcards").innerHTML += '<li>' + HtmlQuestion[i] + '</li>';
document.querySelector("#displayhtmlcards").innerHTML += 
                '<section class="flip-container"' +'>' +
                  '<section class="flipper">' +
                      '<section class="front flashcard">' +
                        '<p id="card2">' + HtmlQuestion[d] + '</p>' +
                      '</section>' + 
                      '<section class="back flashcard2">' +
                        '<p>'+ HtmlAnswer[d] +'</p>' +
                      '</section>' +  
                  '</section>' +
              '</section> ';

              document.querySelector("#displaycsscards").innerHTML += 
                '<section class="flip-container"' +'>' +
                  '<section class="flipper">' +
                      '<section class="front flashcard">' +
                        '<p id="card2">' + CssQuestion[d] + '</p>' +
                      '</section>' + 
                      '<section class="back flashcard2">' +
                        '<p>'+ CssAnswer[d] +'</p>' +
                      '</section>' +  
                  '</section>' +
              '</section> ';

              document.querySelector("#displayjscards").innerHTML += 
                '<section class="flip-container"' +'>' +
                  '<section class="flipper">' +
                      '<section class="front flashcard">' +
                        '<p id="card2">' + JsQuestion[d] + '</p>' +
                      '</section>' + 
                      '<section class="back flashcard2">' +
                        '<p>'+ JsAnswer[d] +'</p>' +
                      '</section>' +  
                  '</section>' +
              '</section> ';

               

}
d=0;
}

// function printAnswer(){
//   for (i=0;i<HtmlAnswer.length;i++)
//   {
//   document.querySelector("#displayhtmlcardsa").innerHTML += '<li>' + HtmlAnswer[i] + '</li>';
//   }
  
//   }

//   function printQuestions2(){
//     for (i=0;i<CssQuestion.length;i++)
//     {
//     document.querySelector("#displaycsscards").innerHTML += '<li>' + CssQuestion[i] + '</li>';
//     }
    
//     }

//     function printAnswer2(){
//       for (i=0;i<CssAnswer.length;i++)
//       {
//       document.querySelector("#displaycsscardsa").innerHTML += '<li>' + CssAnswer[i] + '</li>';
//       }
      
//       }

//       function printQuestions3(){
//         for (i=0;i<JsQuestion.length;i++)
//         {
//         document.querySelector("#displayjscards").innerHTML += '<li>' + JsQuestion[i] + '</li>';
//         }
        
//         }

//         function printAnswer3(){
//           for (i=0;i<JsAnswer.length;i++)
//           {
//           document.querySelector("#displayjscardsa").innerHTML += '<li>' + JsAnswer[i] + '</li>';
//           }
          
//           }

          // function printAll(){
            
          //   // printQuestions2()
          //   // printQuestions3()
          //   // printAnswer();
          //   // printAnswer2();
          //   // printAnswer3();
          // }


