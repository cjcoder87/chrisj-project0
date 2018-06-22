function addcards(){
  //Empty Beginnings
  if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
    document.querySelector('#failmessage').style.display='block';
    document.querySelector('.statusmessage').style.display='none';

  }
    if(document.querySelector('#addQuestion').value == ""){
      document.querySelector('#failmessage2').style.display='block';
      document.querySelector('.statusmessage').style.display='none';

    }
      if(document.querySelector('#addAnswer').value == ""){
        document.querySelector('#failmessage3').style.display='block';
        document.querySelector('.statusmessage').style.display='none';
       
      }

      if(document.querySelector('#pickSubject').value !== 'Pick a Subject'){
        document.querySelector('#failmessage').style.display='none';
      }
        if(document.querySelector('#addQuestion').value !== ""){
          document.querySelector('#failmessage2').style.display='none';
        }
          if(document.querySelector('#addAnswer').value !== ""){
            document.querySelector('#failmessage3').style.display='none';
            
          }
 
if(document.querySelector('#pickSubject').value == 'HTML' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")){
  HtmlQuestion.push(document.querySelector('#addQuestion').value);
  HtmlAnswer.push(document.querySelector('#addAnswer').value);
  document.querySelector('#addQuestion').value = "";
  document.querySelector('#addAnswer').value = "";
  document.querySelector('.statusmessage').style.display='block';
  document.querySelector('#failmessage2').style.display='none';
  document.querySelector('#failmessage').style.display='none';
  document.querySelector('#failmessage3').style.display='none';
  document.querySelector('#pickSubject').value = "Pick a Subject";
  console.log('stored HTML CARD');

  

}

 //Other "" Combinations
 if(document.querySelector('#pickSubject').value == 'CSS' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")){
  CssQuestion.push(document.querySelector('#addQuestion').value);
  CssAnswer.push(document.querySelector('#addAnswer').value);
  document.querySelector('#addQuestion').value = "";
  document.querySelector('#addAnswer').value = "";
  document.querySelector('.statusmessage').style.display='block';
  document.querySelector('#failmessage2').style.display='none';
  document.querySelector('#failmessage').style.display='none';
  document.querySelector('#failmessage3').style.display='none';
  document.querySelector('#pickSubject').value = "Pick a Subject";
  console.log('stored CSS CARD');
 }

 //Other "" Combinations
 if(document.querySelector('#pickSubject').value == 'JS' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")){
  JsQuestion.push(document.querySelector('#addQuestion').value);
      JsAnswer.push(document.querySelector('#addAnswer').value);
      document.querySelector('#addQuestion').value = "";
      document.querySelector('#addAnswer').value = "";
      document.querySelector('.statusmessage').style.display='block';
      document.querySelector('#failmessage2').style.display='none';
      document.querySelector('#failmessage').style.display='none';
      document.querySelector('#failmessage3').style.display='none';
  document.querySelector('#pickSubject').value = "Pick a Subject";

      console.log('stored JS CARD');
 }

}

