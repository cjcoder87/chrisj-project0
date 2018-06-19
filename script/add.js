var html = document.querySelector('#html').value;
var js = document.querySelector('#js').value;
var css = document.querySelector('#css').value;
var htmlcount = 0;
var csscount = 0;
var jscount = 0;


function addcards(){

if(document.querySelector('#pickSubject').value == 'HTML'){

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == undefined || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';
    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == undefined || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';

    }

  }
    else{
      HtmlQuestion.push(document.querySelector('#addQuestion').value);
      HtmlAnswer.push(document.querySelector('#addAnswer').value);
      document.querySelector('#addQuestion').value = null;
      document.querySelector('#addAnswer').value = null;
     
      }
  
} 

if(document.querySelector('#pickSubject').value == 'CSS'){

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == undefined || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';
    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == undefined || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';

    }

  }
    else{
      CssQuestion.push(document.querySelector('#addQuestion').value);
  CssAnswer.push(document.querySelector('#addAnswer').value);
  document.querySelector('#addQuestion').value = null;
  document.querySelector('#addAnswer').value = null;
 

      }
  }

if(document.querySelector('#pickSubject').value == 'JS'){

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == undefined || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';
    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == undefined || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
    }

  }
    else{
      JsQuestion.push(document.querySelector('#addQuestion').value);
  JsAnswer.push(document.querySelector('#addAnswer').value);
  document.querySelector('#addQuestion').value = null;
  document.querySelector('#addAnswer').value = null;
  

  
      }
  

}
else{
  //Write Validation Code Here
  
  document.querySelector('#failmessage').style.display='block';
  
}


console.log(HtmlQuestion[1]);
console.log(CssQuestion[1]);
console.log(JsQuestion[1]);
}

