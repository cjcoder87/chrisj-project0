
var i = 0;
var j = 0;
var k = 0;

function rightHTML(){
console.log('right arrow');

if(i < HtmlQuestion.length-1 && i < HtmlAnswer.length-1){
 i++;
 document.querySelector('#card1').innerHTML = HtmlQuestion[i];
 document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
 
}
else{
  document.querySelector('#card1').innerHTML = HtmlQuestion[i];
  document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
}
}

function leftHTML(){
  console.log('left arrow');
  if(i > 0 ){
    i--;
    document.querySelector('#card1').innerHTML = HtmlQuestion[i];
    document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
    
   }
   else{
     document.querySelector('#card1').innerHTML = HtmlQuestion[i];
     document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
   }
   }

function rightCSS(){
  console.log('right arrow');

if(j < CssQuestion.length-1 && j < CssAnswer.length-1){
 j++;
 document.querySelector('#card1').innerHTML = CssQuestion[j];
 document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
 
}
else{
  document.querySelector('#card1').innerHTML = CssQuestion[j];
  document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
}

}

function leftCSS(){
  console.log('left arrow');
  if(j > 0 ){
    j--;
    document.querySelector('#card1').innerHTML = CssQuestion[j];
    document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
    
   }
   else{
     document.querySelector('#card1').innerHTML = CssQuestion[j];
     document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
   }
}

function rightJS(){
  console.log('right arrow');

  if(k < JsQuestion.length-1 && k < JsAnswer.length-1){
   k++;
   document.querySelector('#card1').innerHTML = JsQuestion[k];
   document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
   
  }
  else{
    document.querySelector('#card1').innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
  }
}

function leftJS(){
  console.log('left arrow');
  if(k > 0 ){
    k--;
    document.querySelector('#card1').innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
    
   }
   else{
     document.querySelector('#card1').innerHTML = JsQuestion[k];
     document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
   }
}

function switchHtmlSlider(){
document.querySelector('#htmlleft').style.display = 'block';
document.querySelector('#htmlright').style.display = 'block';
document.querySelector('#cssleft').style.display = 'none';
document.querySelector('#cssright').style.display = 'none';
document.querySelector('#jsleft').style.display = 'none';
document.querySelector('#jsright').style.display = 'none';

document.querySelector("#card1").innerHTML = HtmlQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[0];
i = 0;

document.querySelector('#htmllink').style.backgroundColor = '#1b4473';
document.querySelector('#csslink').style.backgroundColor = 'initial';
document.querySelector('#jslink').style.backgroundColor = 'initial';




}
function switchCssSlider(){
  document.querySelector('#htmlleft').style.display = 'none';
document.querySelector('#htmlright').style.display = 'none';
document.querySelector('#cssleft').style.display = 'block';
document.querySelector('#cssright').style.display = 'block';
document.querySelector('#jsleft').style.display = 'none';
document.querySelector('#jsright').style.display = 'none';

document.querySelector("#card1").innerHTML = CssQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = CssAnswer[k];
j = 0;

document.querySelector('#htmllink').style.backgroundColor = 'initial';
document.querySelector('#csslink').style.backgroundColor = '#1b4473';
document.querySelector('#jslink').style.backgroundColor = 'initial';
}
function switchJsSlider(){
  document.querySelector('#htmlleft').style.display = 'none';
document.querySelector('#htmlright').style.display = 'none';
document.querySelector('#cssleft').style.display = 'none';
document.querySelector('#cssright').style.display = 'none';
document.querySelector('#jsleft').style.display = 'block';
document.querySelector('#jsright').style.display = 'block';

document.querySelector("#card1").innerHTML = JsQuestion[0];
document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
k=0;

document.querySelector('#htmllink').style.backgroundColor = 'initial';
document.querySelector('#csslink').style.backgroundColor = 'initial';
document.querySelector('#jslink').style.backgroundColor = '#1b4473';
}