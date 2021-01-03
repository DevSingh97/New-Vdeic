
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");
var mcnt = document.querySelector('.modal-content')


var bn = document.getElementById("mbt");
var bn1 = document.getElementById("mbt1");
var bn2 = document.getElementById("mbt2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal.style.display = "block";
}

bn1.onclick = function() {
  modal.style.top = '820%';
  modal.style.height = '188%' 
  modal.style.display = "block";
}

bn2.onclick = function() {
  modal.style.top = '0';
  modal.style.display = "block";
}
bn.onclick = function() {
  modal.style.top = '0';
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
