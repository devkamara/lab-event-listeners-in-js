// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(241, 185, 247)" 
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const outputParagraph = document.getElementById('keyPressDisplay');
  if (outputParagraph) {
    outputParagraph.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
    const outputParagraph = document.getElementById('user-output');
    const textInput = document.getElementById('textInput');
    if (outputParagraph) {
        const inputValue = (event && event.target) ? event.target.value : (textInput ? textInput.value : '');
        outputParagraph.textContent = `You typed: ${inputValue}`;
    }
}

// Attach Event Listeners
function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
    if (changeBtn) {
        changeBtn.addEventListener("click", changeBackgroundColor);
    }
  document
    .addEventListener('click', changeBackgroundColor)

  document.body.addEventListener("dblclick", resetBackgroundColor);
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  const textInput = document.getElementById("textInput");
    if (textInput) {
        textInput.addEventListener("input", displayUserInput);
    }
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}