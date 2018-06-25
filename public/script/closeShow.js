//Reset everything after close
function closeAll() {
  document.querySelector('#addCard').style.display = 'none';
  document.querySelector('#updateCard').style.display = 'none';
  document.querySelector('#deleteCard').style.display = 'none';
  document.querySelector('#displaycards').style.display = 'none';
  document.querySelector('#filter').style.display = 'none';
  document.querySelector('#studyDirections').style.display = 'none';
  document.querySelector('#failmessage').style.display = 'none';
  document.querySelector('#failmessage2').style.display = 'none';
  document.querySelector('#failmessage3').style.display = 'none';
  document.querySelector('#updateSpan').style.display = 'none';
  document.querySelector('#failupdate').style.display = 'none';
  document.querySelector('#failupdate2').style.display = 'none';
  document.querySelector('#deleteSpan').style.display = 'none';
  document.querySelector('#displayhtmlcards').innerHTML = '';
  document.querySelector('#displaycsscards').innerHTML = '';
  document.querySelector('#displayjscards').innerHTML = '';
  document.querySelector('.statusmessage').style.display = 'none';
  document.querySelector('#pickSubject').value = "Pick a Subject";
  document.querySelector('#addQuestion').value = "";
  document.querySelector('#addAnswer').value = "";
}
//the following shows the different sections according to the link presses(add, delete, show cards)
function showadd() {
  document.querySelector('#addCard').style.display = "block";
  document.querySelector('#filter').style.display = 'block';
}
function showupdate() {
  document.querySelector('#updateCard').style.display = 'block';
  document.querySelector('#filter').style.display = 'block';
}
function showdelete() {
  document.querySelector('#deleteCard').style.display = 'block';
  document.querySelector('#filter').style.display = 'block';
}
function showcards() {
  document.querySelector('#displaycards').style.display = 'block';
  document.querySelector('#filter').style.display = 'block';
}
function study() {
  document.querySelector('#filter').style.display = 'block';
  document.querySelector('#studyDirections').style.display = 'block';
}

