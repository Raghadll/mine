const correctCode = "24831";
let enteredCode = "";

function appendDigit(digit) {
  if (enteredCode.length < 5) {
    enteredCode += digit;
    updateDisplay();
  }
  if (enteredCode.length === 5) {
    setTimeout(checkCode, 300);
  }
}

function updateDisplay() {
  const display = document.getElementById("code-display");
  display.textContent = enteredCode.padEnd(5, "_");
}

function resetCode() {
  enteredCode = "";
  updateDisplay();
}

function checkCode() {
  if (enteredCode === correctCode) {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
  } else {
    alert("Wrong password! Try again.");
    resetCode();
  }
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}