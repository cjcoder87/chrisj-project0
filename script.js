var check = 0;
var check2 = 0;
$(function() {
$('.flipper').click(function() {
$('.f1_container').toggleClass('active');
});

$('.flipper').mouseover(function() {
if(check % 2 == 0){
  $('.f1_container').addClass('active');
  check++;
  }else {
    return false;
  }

});

// $('.flipper').mouseout(function() {
//   if(check2 % 2 == 0){
//     $('.f1_container').toggleClass('active');
//     check2++;
//     console.log(check);
//     }else {
//       return false;
//     }

// });
// Picture Flip http://jsfiddle.net/YaUPs/

}); // ready function Close tag