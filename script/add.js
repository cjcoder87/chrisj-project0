var html = document.querySelector('#html').value;
var js = document.querySelector('#js').value;
var css = document.querySelector('#css').value;
var htmlcount = 0;
var csscount = 0;
var jscount = 0;


function addcards(){
  //Empty Beginnings
  if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
    document.querySelector('#failmessage').style.display='block';
    if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
      document.querySelector('#failmessage2').style.display='block';
      if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
        document.querySelector('#failmessage3').style.display='block';
        document.querySelector('.statusmessage').style.display='none';

      }
    }
  }else if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
    document.querySelector('#failmessage').style.display='block';
    document.querySelector('.statusmessage').style.display='none';

    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';

    }
  }

  else if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
    document.querySelector('#failmessage').style.display='block';
    document.querySelector('.statusmessage').style.display='none';


    if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
      document.querySelector('#failmessage2').style.display='block';

    }
  }

  //End of Empty Beginnings

  //Other null Combinations
if(document.querySelector('#pickSubject').value == 'HTML'){
  document.querySelector('#failmessage').style.display='none';

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';

    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
    


    }

  }
  else if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
      document.querySelector('#failmessage').style.display='none';
    document.querySelector('#failmessage2').style.display='none';


      if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
        document.querySelector('#failmessage2').style.display='block';
  }

} 

//End of Null Combinations
    else{
      HtmlQuestion.push(document.querySelector('#addQuestion').value);
      HtmlAnswer.push(document.querySelector('#addAnswer').value);
      document.querySelector('#addQuestion').value = null;
      document.querySelector('#addAnswer').value = null;
      document.querySelector('.statusmessage').style.display='block';
      document.querySelector('#failmessage2').style.display='none';
      document.querySelector('#failmessage').style.display='none';
      document.querySelector('#failmessage3').style.display='none';
     
      }
  
    }

 //Other null Combinations
 if(document.querySelector('#pickSubject').value == 'CSS'){
  document.querySelector('#failmessage').style.display='none';

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';

    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
   


    }

  }
  else if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
      document.querySelector('#failmessage').style.display='none';
    document.querySelector('#failmessage2').style.display='none';


      if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
        document.querySelector('#failmessage2').style.display='block';
 


  }

} 
//End of Null Combinations
    else{
      CssQuestion.push(document.querySelector('#addQuestion').value);
      CssAnswer.push(document.querySelector('#addAnswer').value);
      document.querySelector('#addQuestion').value = null;
      document.querySelector('#addAnswer').value = null;
      document.querySelector('.statusmessage').style.display='block';
      document.querySelector('#failmessage2').style.display='none';
      document.querySelector('#failmessage').style.display='none';
      document.querySelector('#failmessage3').style.display='none';
     
      }

    }

 //Other null Combinations
 if(document.querySelector('#pickSubject').value == 'JS'){
  document.querySelector('#failmessage').style.display='none';

  if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
    document.querySelector('#failmessage2').style.display='block';

    if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';


      

    }

  }
  else if(document.querySelector('#addAnswer').value == null || document.querySelector('#addAnswer').value == ""){
      document.querySelector('#failmessage3').style.display='block';
      document.querySelector('#failmessage').style.display='none';
    document.querySelector('#failmessage2').style.display='none';

      if(document.querySelector('#addQuestion').value == null || document.querySelector('#addQuestion').value == ""){
        document.querySelector('#failmessage2').style.display='block';
   

      


  }

} 
//End of Null Combinations
    else{
      JsQuestion.push(document.querySelector('#addQuestion').value);
      JsAnswer.push(document.querySelector('#addAnswer').value);
      document.querySelector('#addQuestion').value = null;
      document.querySelector('#addAnswer').value = null;
      document.querySelector('.statusmessage').style.display='block';
      document.querySelector('#failmessage2').style.display='none';
      document.querySelector('#failmessage').style.display='none';
      document.querySelector('#failmessage3').style.display='none';

     
      }

    }
// else{
//   //Write Validation Code Here
  
//   document.querySelector('#failmessage').style.display='block';
  
// }


// console.log(HtmlQuestion[1]);
// console.log(CssQuestion[1]);
// console.log(JsQuestion[1]);
}

