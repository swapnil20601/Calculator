const screen = document.getElementById("screen");

let firstOperand = "";

let secondOperand = "";

let operator = "";

//let lengthOfOperand = 10;

const numberButtonElements = document.querySelectorAll("button[data-number]");

const operatorButtons = document.querySelectorAll("button[data-operator]");

const result = document.querySelector("button[data-operator = '=']");

/* reset display to 0 when CE button is pressed */
document.getElementById("clear").addEventListener("click", function() {
  screen.value = "0";
  window.location.reload();
});

/* stores operator in 'operator' variable when any the operator button is clicked */
operatorButtons.forEach(op =>
  op.addEventListener("click", function(e) {
    if (e.target.textContent !== "=") {
      operator = e.target.textContent;
      if (operator === "√") {
        display(Math.sqrt(firstOperand));
      } else if (operator === "1/x") {
        display(1 / parseFloat(firstOperand));
      }
    }
  })
);

numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
    const btn = e.target.textContent;
    // if (btn === ".") {
    //   lengthOfOperand = 11;
    // }

    /*if operator is not empty, then clear screen and display secondOperand, ELSE, display firstOperand on screen */
    if (operator !== "") {
      //console.log("length of operand for 2nd op is "+lengthOfOperand)
      
     
     if (screen.value.length < 10) {
        console.log("inside if clobk "+lengthOfOperand)
        secondOperand = secondOperand + btn;
        screen.value = secondOperand;
      } 
      else {
        alert("Only 10 digits are allowed!");
        window.location.reload();
      }
    } 
    /* 
      display firstOperand on screen
    */
    else {
      if (screen.value === "0") {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else if (screen.value.length < 10) {
        //console.log("1st op is "+lengthOfOperand)
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else {
        alert("Only 10 digits are allowed!");
        window.location.reload();
      }
    }
  })
);

result.addEventListener("click", function() {
  switch (operator) {
    case "+":
      display(parseFloat(firstOperand) + parseFloat(secondOperand));
      break;

    case "-":
      display(parseFloat(firstOperand) - parseFloat(secondOperand));
      break;

    case "×":
      display(parseFloat(firstOperand) * parseFloat(secondOperand));
      break;

    case "÷":
      display(parseFloat(firstOperand) / parseFloat(secondOperand));
      break;

    case "%":
      display(parseFloat(firstOperand) % parseFloat(secondOperand));
      break;
  }
});

/* displays at the most 10 digits on the screen if the length of result is more than 10 */
function display(answer) {
  if (`${answer}`.length > 10) {
    screen.value = `${answer}`.substr(0, 10);
  } else {
    screen.value = answer;
  }
}

document.getElementById("x").addEventListener("click", function(e) {
  console.log('"&divide;"');
});
