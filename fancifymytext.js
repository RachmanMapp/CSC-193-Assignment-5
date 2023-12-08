
// Make font bigger
var btnBigger = document.getElementById("btnBigger");           // Find the correct button by id
btnBigger.addEventListener("click", function() {                // Add an EventListener to the button. On-click:
  alert("Hello, world");                                        // pop-up alert,
  document.getElementById("textInput").style.fontSize = "2em";  // change font size of text in text box
});

// Make font fancy
var btnShmancy = document.getElementById("btnShmancy");
btnShmancy.addEventListener("click", function() {
  alert("Fancify!!!");
  document.getElementById("textInput").style.fontWeight = "bold";           // Make it bold
  document.getElementById("textInput").style.color = "blue";                // Make it blue
  document.getElementById("textInput").style.textDecoration = "underline";  // Underline it
});

// Make font regular
var btnBetty = document.getElementById("btnBetty");
btnBetty.addEventListener("click", function() {
  alert("Borify!!!");
  document.getElementById("textInput").style.fontWeight = "normal";
  document.getElementById("textInput").style.color = "black";
  document.getElementById("textInput").style.textDecoration = "none";
  document.getElementById("textInput").style.textTransform = "none";
});

// Make font regular
var moo = document.getElementById("moo");
moo.addEventListener("click", function() {
  alert("Moo!!!");
  document.getElementById("textInput").style.textTransform = "capitalize";
  
  // Add -Moo to every last word of each sentence
  var text = document.getElementById("textInput").value;  // Get the text that is in the textarea
  var currentIndex = 0;                                   // Start at first char of string
  while (currentIndex <= text.length) {                   // While have not reached end of string,
    var currentChar = text.charAt(currentIndex);          // get current char
    
    if (currentChar == '.') {                                                    // If char is a period
      text = text.slice(0, (currentIndex)) + "-Moo" + text.slice(currentIndex);  // Add -Moo to and of sentence, before '.'
      currentIndex += 4;                                                         // Move current back to the '.'            
    }
    currentIndex++;  // Move to next char
  }

  // Change the string in the textarea
  document.getElementById("textInput").value = text; 
});