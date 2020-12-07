// js code for Form Page

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "Every Month";

slider.oninput = function() {

  if (slider.value < 50) {
    output.innerHTML = "I don't buy posters/prints";
  } else if (slider.value == 50) {
    output.innerHTML = "Every Month";
  } else {
    output.innerHTML = "Every Week";
  }
}

