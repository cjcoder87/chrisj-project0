$(document).ready(function () {
  //Checks which subject is the active class and places value from array into the input field
  $("#trash").click(function () {
    if ($("#htmllink li").hasClass("active")) {
      document.querySelector('#deleteQuestion').value = HtmlQuestion[i];
      document.querySelector('#deleteAnswer').value = HtmlAnswer[i];
      console.log('delete html');
    }

    if ($("#csslink li").hasClass("active")) {
      document.querySelector('#deleteQuestion').value = CssQuestion[j];
      document.querySelector('#deleteAnswer').value = CssAnswer[j];
      console.log('delete css');
    }

    if ($("#jslink li").hasClass("active")) {
      document.querySelector('#deleteQuestion').value = JsQuestion[k];
      document.querySelector('#deleteAnswer').value = JsAnswer[k];
      console.log('js html');
    }

  });
  //
  $("#deleteButton").click(function () {
    // initailizes the variiable to the array index currently being displayed
    var index = HtmlQuestion.indexOf(i);
    var index2 = HtmlAnswer.indexOf(i);
    var index3 = CssQuestion.indexOf(j);
    var index4 = CssAnswer.indexOf(j);
    var index5 = CssQuestion.indexOf(k);
    var index6 = CssAnswer.indexOf(k);

    //Checks element that has actie class
    if ($("#htmllink li").hasClass("active")) {
      //Preventitive Condition for deleting the default card

      if (i <= 0) {
        document.querySelector('#deleteSpan').innerHTML = "You can't delete the default HTML index Card";
        document.querySelector('#deleteSpan').style.display = "block";

      }
      //Deletes Card being displayed
      else {
        HtmlQuestion.splice(index, 1);
        HtmlAnswer.splice(index2, 1);
        document.querySelector('#deleteSpan').innerHTML = "Succesfully Deleted";
        document.querySelector('#deleteSpan').style.display = "block";

        document.querySelector('#deleteQuestion').value = "";
        document.querySelector('#deleteAnswer').value = "";
        i--;
        document.querySelector('#card1').innerHTML = HtmlQuestion[i];
        document.querySelector('.flashcard2 p').innerHTML = HtmlAnswer[i];
        htmlLives();
        htmlStatus();
        console.log('HTML delete accomplished');

      }

    }

    if ($("#csslink li").hasClass("active")) {
      if (j <= 0) {
        document.querySelector('#deleteSpan').innerHTML = "You can't delete the default CSS index Card";
        document.querySelector('#deleteSpan').style.display = "block";
      } else {
        CssQuestion.splice(index3, 1);
        CssAnswer.splice(index4, 1);
        document.querySelector('#deleteSpan').innerHTML = "Succesfully Deleted";
        document.querySelector('#deleteSpan').style.display = "block";

        document.querySelector('#deleteQuestion').value = "";
        document.querySelector('#deleteAnswer').value = "";
        j--;
        document.querySelector('#card1').innerHTML = CssQuestion[j];
        document.querySelector('.flashcard2 p').innerHTML = CssAnswer[j];
        CssLives();
        CssStatus();
        console.log('Css delete accomplished');

      }
    }

    if ($("#jslink li").hasClass("active")) {
      if (k <= 0) {
        document.querySelector('#deleteSpan').innerHTML = "You can't delete the default JS index Card";
        document.querySelector('#deleteSpan').style.display = "block";
      } else {
        JsQuestion.splice(index5, 1);
        JsAnswer.splice(index6, 1);
        document.querySelector('#deleteSpan').innerHTML = "Succesfully Deleted";
        document.querySelector('#deleteSpan').style.display = "block";

        document.querySelector('#deleteQuestion').value = "";
        document.querySelector('#deleteAnswer').value = "";
        k--;
        document.querySelector('#card1').innerHTML = JsQuestion[k];
        document.querySelector('.flashcard2 p').innerHTML = JsAnswer[k];
        JsLives();
        JsStatus();
        console.log('JS delete accomplished');
      }

    }

  });
  //deletes all data entered into the array from local storage
  $("#nuclear").click(function () {
    localStorage.clear("hquestions");
    localStorage.clear("hanswers");
    localStorage.clear("cquestions");
    localStorage.clear("canswers");
    localStorage.clear("jquestions");
    localStorage.clear("janswers");
    location.reload();
  });

});
  // End of Document Ready