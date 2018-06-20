// var html = document.querySelector('#html').value;
// var js = document.querySelector('#js').value;
// var css = document.querySelector('#css').value;
// var htmlcount = 0;
// var csscount = 0;
// var jscount = 0;

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
 
  // else if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
  //   document.querySelector('#failmessage').style.display='block';
  //   document.querySelector('.statusmessage').style.display='none';

  //   if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
  //     document.querySelector('#failmessage3').style.display='block';

  //     console.log('else if 2nd begginning');


  //   }
  // }

  // else if(document.querySelector('#pickSubject').value == 'Pick a Subject'){
  //   document.querySelector('#failmessage').style.display='block';
  //   document.querySelector('.statusmessage').style.display='none';


  //   if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
  //     document.querySelector('#failmessage2').style.display='block';

  //     console.log('else if 3rd begginning');

  //   }
  // }

  //End of Empty Beginnings

  //Other "" Combinations
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

  // if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
  //   document.querySelector('#failmessage2').style.display='block';

  //   if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
  //     document.querySelector('#failmessage3').style.display='block';
    
  //     console.log('1st "" combinations');


  //   }

  // }
//   else if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';
//       document.querySelector('#failmessage').style.display='none';
//     document.querySelector('#failmessage2').style.display='none';

//     console.log(' 2nd "" combo 1st condition');


//       if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//         document.querySelector('#failmessage2').style.display='block';
//     console.log(' 2nd "" combo 2nd condition');
      

//   }

// } 

//  else if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';
//       document.querySelector('#failmessage').style.display='none';
//     document.querySelector('#failmessage2').style.display='none';

//     console.log(' 2nd "" combo 1st condition');


//       if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//         document.querySelector('#failmessage2').style.display='block';
//     console.log(' 2nd "" combo 2nd condition');
      

//   }

// } 


//End of "" Combinations
    // else{
    //   HtmlQuestion.push(document.querySelector('#addQuestion').value);
    //   HtmlAnswer.push(document.querySelector('#addAnswer').value);
    //   document.querySelector('#addQuestion').value = "";
    //   document.querySelector('#addAnswer').value = "";
    //   document.querySelector('.statusmessage').style.display='block';
    //   document.querySelector('#failmessage2').style.display='none';
    //   document.querySelector('#failmessage').style.display='none';
    //   document.querySelector('#failmessage3').style.display='none';
    //   console.log('stored HTML CARD');
     
    //   }
  
    // }

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

//   if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//     document.querySelector('#failmessage2').style.display='block';

//     if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';
   

//       console.log('css "" combo');

//     }

//   }
//   else if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';
//       document.querySelector('#failmessage').style.display='none';
//     document.querySelector('#failmessage2').style.display='none';


//       if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//         document.querySelector('#failmessage2').style.display='block';
 
//         console.log('css 2nd "" combo');


//   }

// } 
//End of "" Combinations
    // else{
    //   CssQuestion.push(document.querySelector('#addQuestion').value);
    //   CssAnswer.push(document.querySelector('#addAnswer').value);
    //   document.querySelector('#addQuestion').value = "";
    //   document.querySelector('#addAnswer').value = "";
    //   document.querySelector('.statusmessage').style.display='block';
    //   document.querySelector('#failmessage2').style.display='none';
    //   document.querySelector('#failmessage').style.display='none';
    //   document.querySelector('#failmessage3').style.display='none';
    //   console.log('stored CSS CARD');
     
    //   }

    // }

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

//   if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//     document.querySelector('#failmessage2').style.display='block';

//     if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';

//       console.log('js 1st "" combo');

      

//     }

//   }
//   else if(document.querySelector('#addAnswer').value == "" || document.querySelector('#addAnswer').value == ""){
//       document.querySelector('#failmessage3').style.display='block';
//       document.querySelector('#failmessage').style.display='none';
//     document.querySelector('#failmessage2').style.display='none';

//       if(document.querySelector('#addQuestion').value == "" || document.querySelector('#addQuestion').value == ""){
//         document.querySelector('#failmessage2').style.display='block';
//         console.log('js 2nd "" combo');

//   }

// } 


//End of "" Combinations
    // else{
    //   JsQuestion.push(document.querySelector('#addQuestion').value);
    //   JsAnswer.push(document.querySelector('#addAnswer').value);
    //   document.querySelector('#addQuestion').value = "";
    //   document.querySelector('#addAnswer').value = "";
    //   document.querySelector('.statusmessage').style.display='block';
    //   document.querySelector('#failmessage2').style.display='none';
    //   document.querySelector('#failmessage').style.display='none';
    //   document.querySelector('#failmessage3').style.display='none';
    //   console.log('stored JS CARD');

    //   }

    // }
// else{
//   //Write Validation Code Here
  
//   document.querySelector('#failmessage').style.display='block';
  
// }


// console.log(HtmlQuestion[1]);
// console.log(CssQuestion[1]);
// console.log(JsQuestion[1]);
}

