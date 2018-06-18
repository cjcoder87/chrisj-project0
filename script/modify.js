
function closeAll(){
  document.querySelector('#addCard').style.display='none';
  document.querySelector('#updateCard').style.display='none';
  document.querySelector('#deleteCard').style.display='none';
  document.querySelector('#filter').style.display='none';
  document.querySelector('#studyDirections').style.display='none';

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

function study(){
  document.querySelector('#filter').style.display='block';
  document.querySelector('#studyDirections').style.display='block';
}

