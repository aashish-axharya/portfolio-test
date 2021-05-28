function validation() {
  //validation form of the contact page
  //ensuring that all the values are given before submitting
  var name = document.forms["messageForm"]["name"].value;
  var email = document.forms["messageForm"]["email"].value;
  var subject = document.forms["messageForm"]["subject"].value;
  var message = document.forms["messageForm"]["message"].value;

  //checking if the data entered are empty 
  if (name == "" || email == "" || subject == "" || message == "") {
    alert("Please fill all the fields");
  } else {
    alert("Thank you for filling the form");
  }
}

//auto-navigation of sliders
var counter = 1;
setInterval(function () {
  //get the id of the radio buttons to check which button has been clicked currently
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    //when the counter reaches the end of the slider, it will go at the start and loop again
    counter = 1;
  }
}, 3000);
