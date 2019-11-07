const screen = document.getElementById("screen");

let firstOperand = null;

let numberButtonElements = document.querySelectorAll("button[data-number]");

numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
      const btn = e.target.textContent;
      if (screen.value === "0") {
        screen.value = "";
        firstOperand = screen.value + btn;
        screen.value = firstOperand;
        console.log(firstOperand)
      } else if (screen.value.length < 10) {
        firstOperand = screen.value + btn;
        screen.value = firstOperand;
        console.log(firstOperand)
      } else {
        alert("Only 10 digits are allowed!");
      }
       
  })
);

console.log(firstOperand)