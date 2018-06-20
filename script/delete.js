$(document).ready(function(){
  //Called by id 
  $("#trash").click(function(){
  if($("#htmllink").hasClass("active")){
    document.querySelector('#deleteQuestion').value = HtmlQuestion[i]; 
    document.querySelector('#deleteAnswer').value = HtmlAnswer[i];
    console.log('delete html');
  }
  
  if($("#csslink").hasClass("active")){
    document.querySelector('#deleteQuestion').value = CssQuestion[j]; 
    document.querySelector('#deleteAnswer').value = CssAnswer[j];
    console.log('delete css');
  }
  
    if($("#jslink").hasClass("active")){
      document.querySelector('#deleteQuestion').value = JsQuestion[k]; 
      document.querySelector('#deleteAnswer').value = JsAnswer[k];
      console.log('js html');
    }
  
  });
  
  });
  // End of Document Ready