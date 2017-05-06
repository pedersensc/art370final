
function gray1() {
  document.getElementById("myImg").style.WebkitFilter = "grayscale(100%)";
}

function gray2() {
  document.getElementById("myImg").style.WebkitFilter = "grayscale(0%)";
}

var i = 0; var path = new Array();

// LIST OF IMAGES
path[0] = "12.jpg";
path[1] = "2.jpg";
path[2] = "3.jpg";
path[3] = "4.jpg";
path[4] = "5.jpg";
path[5] = "6.jpg";
path[6] = "7.jpg";
path[7] = "8.jpg";
path[8] = "9.jpg";
path[9] = "10.jpg";
path[10] = "11.jpg";
path[11] = "1.jpg";
path[12] = "13.jpg";
path[13] = "14.jpg";

function swapImage() {
  document.slide.src = path[i];
  if(i < path.length - 1)i++;
  else i = 0;
  setTimeout("swapImage()",5000);
  document.getElementById("demo").addEventListener("mouseover", mouseOver);
  document.getElementById("demo").addEventListener("mouseout", mouseOut);
}

window.onload=swapImage;

function mouseOver() {
    document.getElementById("demo").style.WebkitFilter = "grayscale(0%)";
}

function mouseOut() {
    document.getElementById("demo").style.WebkitFilter = "grayscale(100%)";
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("E-mail must be filled out to submit");
        return false;
    }
    else {
      alert("Thanks for your submission!");
      return false;
    }
}
