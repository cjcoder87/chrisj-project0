$(document).ready(function(){
//Validates wheter or not the update inputs are not empty or empty 
function checkupdate(){
  if(document.querySelector('#updateQuestion').value ==""){
    document.querySelector('#failupdate').innerHTML = 'Type a Question to Update';
    document.querySelector('#failupdate').style.display = 'block';
  document.querySelector('#updateSpan').style.display = "none";
  }
  if(document.querySelector('#updateAnswer').value ==""){
    document.querySelector('#failupdate2').innerHTML = 'Type a Question to Update';
    document.querySelector('#failupdate2').style.display = 'block';
  document.querySelector('#updateSpan').style.display = "none";
  }

  if(document.querySelector('#updateQuestion').value !== ""){
    document.querySelector('#failupdate').style.display = 'none';
  }

  if(document.querySelector('#updateAnswer').value !== ""){
    document.querySelector('#failupdate2').style.display = 'none';
  }
}

// checks what subject has active class which is the card that would be didplayed
$("#wrench").click(function(){
if($("#htmllink").hasClass("active")){
  document.querySelector('#updateQuestion').value = HtmlQuestion[i]; 
  document.querySelector('#updateAnswer').value = HtmlAnswer[i];
  console.log('update html');
}
if($("#csslink").hasClass("active")){
  document.querySelector('#updateQuestion').value = CssQuestion[j]; 
  document.querySelector('#updateAnswer').value = CssAnswer[j];
  console.log('update css');
}
  if($("#jslink").hasClass("active")){
    document.querySelector('#updateQuestion').value = JsQuestion[k]; 
    document.querySelector('#updateAnswer').value = JsAnswer[k];
    console.log('js html');
  }
});

//Update Functionality
$("#updateButton").click(function(){
  checkupdate();
  if(document.querySelector('#updateQuestion').value !== "" && document.querySelector('#updateAnswer').value !==""){
    document.querySelector('#failupdate2').style.display = 'none';
    document.querySelector('#failupdate').style.display = 'none';
  
  if($("#htmllink").hasClass("active")){
  HtmlQuestion[i] = document.querySelector('#updateQuestion').value;
  HtmlAnswer[i] = document.querySelector('#updateAnswer').value;
  document.querySelector('#updateSpan').innerHTML = "Update Recorded";
  document.querySelector('#updateSpan').style.display = "block";
  document.querySelector('#card1').innerHTML = HtmlQuestion[i];
    document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
}
if($("#csslink").hasClass("active")){
  CssQuestion[j] = document.querySelector('#updateQuestion').value;
  CssAnswer[j] = document.querySelector('#updateAnswer').value;
  document.querySelector('#updateSpan').innerHTML = "Update Recorded";
  document.querySelector('#updateSpan').style.display = "block";
  document.querySelector('#card1').innerHTML = CssQuestion[j];
  document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];

}

  if($("#jslink").hasClass("active")){
    JsQuestion[k] = document.querySelector('#updateQuestion').value;
    JsAnswer[k] = document.querySelector('#updateAnswer').value;
    document.querySelector('#updateSpan').innerHTML = "Update Recorded";
    document.querySelector('#updateSpan').style.display = "block";
    document.querySelector('#card1').innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
  
  }
}
});
});// End of Document Ready