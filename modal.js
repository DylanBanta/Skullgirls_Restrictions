// Get the modal
var modal = $("#myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
  modal.css("display", "block");
}

function closeModal() {
  modal.css("display", "none");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.css("display", "none");
  }
}