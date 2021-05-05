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