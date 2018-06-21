function flip(){
  
  document.querySelector(".flip-container2").classList.toggle("flip");
  console.log('should flip');
}

document.querySelector(".front").addEventListener("click", flip);