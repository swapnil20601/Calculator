const screen = document.getElementById("screen");

let firstOperand = "";

let secondOperand = "";

let operator = "";

const numberButtonElements = document.querySelectorAll("button[data-number]");

const operatorButtons = document.querySelectorAll("button[data-operator]");

const result = document.querySelector("button[data-operator = '=']");

//reset display to 0 when CE button is pressed
document.getElementById("clear").addEventListener("click", function() {
  screen.value = "0";
  window.location.reload();
});

//stores operator in 'operator' variable when any the operator button is clicked
operatorButtons.forEach(op =>
  op.addEventListener("click", function(e) {
    if (e.target.textContent !== "=") {
      operator = e.target.textContent;
    }
    console.log(operator);
  })
);

numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
    const btn = e.target.textContent;
    //console.log(btn);

    //if operator is not empty, then clear screen and display secondOperand, ELSE, display firstOperand on screen
    if (operator !== "") {
      // console.log('operation is true')
      screen.value = "";
      secondOperand = secondOperand + btn;
      screen.value = secondOperand;
    } else {
      //console.log('false operator')
      if (screen.value === "0") {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else if (screen.value.length < 10) {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else {
        alert("Only 10 digits are allowed!");
      }
    }
  })
);

result.addEventListener("click", function() {
  switch (operator) {
    case "+":
      screen.value = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;

    case "-":
      screen.value = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;

    case "×":
      screen.value = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;

      case "÷":
      screen.value = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;

      case "%":
      screen.value = parseFloat(firstOperand) % parseFloat(secondOperand);
      break;
      
  }
});

document.getElementById("x").addEventListener("click", function(e) {
  console.log('"&divide;"');
});
