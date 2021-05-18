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

function myMove(){
  var fox = document.getElementById("fox");
  fox.style.position='relative';
  
  var position = 0;

  setInterval(frame,5)

  function frame(){
    if(position==window.screen.width - 70|| position == window.screen.height - 1000) {
      clearInterval(); //fox stops moving
    }
    else {
      position=position+1;
      fox.style.top = position + 'px';
      fox.style.left = position + 'px';
    }
  }
}