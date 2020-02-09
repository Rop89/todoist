//Click button to get input field

/* This should be a const as the reference won't change
   consts help developers understand the use-case of a variable */

const button = document.getElementById('button')

/* I would in-line an anonymous function here, as it's only used once
   We also don't need to check the event type as we're only listening for 'click':

button.addEventListener("click", function (event) {
    input.classList.toggle("show")
}) */

button.addEventListener("click", showInput)
function showInput(event){
  if(event.type === "click"){
    input.classList.toggle("show")
  }
}
const input = document.querySelector(".input")

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
	var i;
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Create new element for the classList

function newElement(){
  let li = document.createElement("li"); /* This variable name could be more descriptive */
  let inputValue = document.getElementById("tasks").value;
  let t = document.createTextNode(inputValue); /* This variable name could be more descriptive */
  li.appendChild(t);
  if (inputValue === ''){
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("tasks").value = "";
  var span = document.createElement("SPAN"); /* This variable name could be more descriptive */
  var txt = document.createTextNode("\u00D7"); /* This variable name could be more descriptive */
  span.className = "close";
  span.appendChild(txt);
  /* You don't need either loop if you use this line here:

  span.addEventListener('click', function( {
    span.parentElement.style.display = 'none';
  });
  */
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
