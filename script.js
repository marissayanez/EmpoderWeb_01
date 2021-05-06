function popup() {
  alert("Hey, how are you?");
}
function onsite(){
  document.getElementById("text").innerHTML="something appears";
}

function signUp(){
  var txt; 
  var person = prompt ("Please enter your name: ", "Adriana Guerrero"); //don't need anything after comma
  if(person == null || person == ""){
    txt = "You are not signed up.";
  }
  else{
    txt = "Thank you " + person + "! You have successfully signed up!";
  }
  document.getElementById("message").innerHTML = txt;
}

function init() 
{
  image = document.getElementById("fox");
  image.style.position = "relative"
}
var id = null;
function myMove() {
  var elem = document.getElementById("fox");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      // elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
window.onload = init;