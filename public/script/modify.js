document.querySelector("#card1").innerHTML = HtmlQuestion[0];

function closeAll(){
  document.querySelector('#addCard').style.display='none';
  document.querySelector('#updateCard').style.display='none';
  document.querySelector('#deleteCard').style.display='none';
  document.querySelector('#displaycards').style.display='none';
  document.querySelector('#filter').style.display='none';
  document.querySelector('#studyDirections').style.display='none';
  document.querySelector('#failmessage').style.display='none';
  document.querySelector('#failmessage2').style.display='none';
  document.querySelector('#failmessage3').style.display='none';
  document.querySelector('#updateSpan').style.display='none';
  document.querySelector('#deleteSpan').style.display='none';
  document.querySelector('#displayhtmlcards').innerHTML='';
  document.querySelector('#displaycsscards').innerHTML='';
  document.querySelector('#displayjscards').innerHTML='';
  document.querySelector('.statusmessage').style.display='none';
  document.querySelector('#pickSubject').value = "Pick a Subject";

}


function showadd(){
  document.querySelector('#addCard').style.display="block";
  document.querySelector('#filter').style.display='block';
}
function showupdate(){
  document.querySelector('#updateCard').style.display='block';
  document.querySelector('#filter').style.display='block';
}
function showdelete(){
  document.querySelector('#deleteCard').style.display='block';
  document.querySelector('#filter').style.display='block';
}
function showcards(){
  document.querySelector('#displaycards').style.display='block';
  document.querySelector('#filter').style.display='block';
}

function study(){
  document.querySelector('#filter').style.display='block';
  document.querySelector('#studyDirections').style.display='block';
}
