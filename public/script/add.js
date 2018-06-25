function addcards() {
  //Input Validators for Adding Cards
  if (document.querySelector('#pickSubject').value == 'Pick a Subject') {
    document.querySelector('#failmessage').style.display = 'block';
    document.querySelector('.statusmessage').style.display = 'none';
  }
  if (document.querySelector('#addQuestion').value == "") {
    document.querySelector('#failmessage2').style.display = 'block';
    document.querySelector('.statusmessage').style.display = 'none';
  }
  if (document.querySelector('#addAnswer').value == "") {
    document.querySelector('#failmessage3').style.display = 'block';
    document.querySelector('.statusmessage').style.display = 'none';
  }
  if (document.querySelector('#pickSubject').value !== 'Pick a Subject') {
    document.querySelector('#failmessage').style.display = 'none';
  }
  if (document.querySelector('#addQuestion').value !== "") {
    document.querySelector('#failmessage2').style.display = 'none';
  }
  if (document.querySelector('#addAnswer').value !== "") {
    document.querySelector('#failmessage3').style.display = 'none';
  }

  function messages() {
    document.querySelector('#addQuestion').value = "";
    document.querySelector('#addAnswer').value = "";
    document.querySelector('.statusmessage').style.display = 'block';
    document.querySelector('#failmessage2').style.display = 'none';
    document.querySelector('#failmessage').style.display = 'none';
    document.querySelector('#failmessage3').style.display = 'none';
    document.querySelector('#pickSubject').value = "Pick a Subject";
  }



  //HTML Card Add, pushes input value into the end of the array
  if (document.querySelector('#pickSubject').value == 'HTML' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")) {
    HtmlQuestion.push(document.querySelector('#addQuestion').value);
    HtmlAnswer.push(document.querySelector('#addAnswer').value);
    messages();
    i = HtmlQuestion.length - 1;
    document.querySelector("#card1").innerHTML = HtmlQuestion[i];
    document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
    htmlLives();
    if (window.location.pathname != '/') {
      window.location.href = '/';
    } else {
      console.log('on same page');
      htmlStatus();
    }

  }

  //CSS Card Add, pushes input value into the end of the array
  if (document.querySelector('#pickSubject').value == 'CSS' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")) {
    CssQuestion.push(document.querySelector('#addQuestion').value);
    CssAnswer.push(document.querySelector('#addAnswer').value);
    messages();
    j = CssQuestion.length - 1;
    document.querySelector("#card1").innerHTML = CssQuestion[j];
    document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
    CssLives();
    if (window.location.pathname != '/style') {
      window.location.href = '/style';
    } else {
      console.log('on same page');
      CssStatus();
    }

  }


  //JS Card Add, pushes input value into the end of the array
  if (document.querySelector('#pickSubject').value == 'JS' && (document.querySelector('#addQuestion').value !== "" || document.querySelector('#addQuestion').value !== "") && (document.querySelector('#addAnswer').value !== "" || document.querySelector('#addAnswer').value !== "")) {
    JsQuestion.push(document.querySelector('#addQuestion').value);
    JsAnswer.push(document.querySelector('#addAnswer').value);
    messages();
    k = JsQuestion.length - 1;
    document.querySelector("#card1").innerHTML = JsQuestion[k];
    document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
    JsLives();
    if (window.location.pathname != '/js') {
      window.location.href = '/js';
    } else {
      console.log('on same page');
      JsStatus();
    }

  }

}

