const screen = document.getElementById("screen");

let firstOperand = "";

let secondOperand = "";

let operator = "";

let lengthOfOperand = 10;

const numberButtonElements = document.querySelectorAll("button[data-number]");

//const operatorButtons = document.querySelectorAll("button[data-operator]");

const result = document.querySelectorAll("button[data-operator]");

document.getElementById("decimal").addEventListener("click", function() {
  if (operator == "" && firstOperand !== "" && !firstOperand.includes(".")) {
    firstOperand = firstOperand + ".";
    screen.value = firstOperand;
  } else if (
    operator !== "" &&
    !secondOperand.includes(".") &&
    secondOperand !== ""
  ) {
    secondOperand = secondOperand + ".";
    screen.value = secondOperand;
  }
});

/* reset display to 0 when CE button is pressed */
document.getElementById("clear").addEventListener("click", function() {
  screen.value = "0";
  window.location.reload();
});

document.getElementById("del").addEventListener("click", function() {
  if (screen.value.length > 1) {
    screen.value = screen.value.substring(0, `${screen.value}`.length - 1);
    if (operator != "") {
      secondOperand = screen.value;
    } else {
      firstOperand = screen.value;
    }
  } else {
    screen.value = "0";
    firstOperand = "";
    secondOperand = "";
  }
});

// result.forEach(res =>
//   res.addEventListener("click", function() {
//     if (firstOperand !== "") {
//       compute(firstOperand, operator, secondOperand);
//     }
//   })
// );

result.forEach(res =>
  res.addEventListener("click", function(e) {
    if (firstOperand !== "" && secondOperand !== "") {
      compute(firstOperand, operator, secondOperand);
    }
    operator = e.target.textContent;

    if (operator === "√" && firstOperand !== "") {
      display(Math.sqrt(firstOperand));
    } else if (operator === "1/x" && firstOperand !== "") {
      display(1 / parseFloat(firstOperand));
    }
  })
);

numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
    const btn = e.target.textContent;

    /*if operator is not empty, then clear screen and display secondOperand, ELSE, display firstOperand on screen */
    if (operator !== "") {
      if (screen.value.length < lengthOfOperand) {
        secondOperand = secondOperand + btn;
        screen.value = secondOperand;
      } else {
        alert("Only 10 digits are allowed!");
        screen.value = secondOperand;
      }
    } else {
      /* 
      display firstOperand on screen
    */
      if (screen.value === "0") {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else if (screen.value.length < lengthOfOperand) {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else {
        alert("Only 10 digits are allowed!");
        screen.value = firstOperand;
      }
    }
  })
);

// /* stores operator in 'operator' variable when any the operator button is clicked */
// operatorButtons.forEach(op =>
//   op.addEventListener("click", function(e) {
//     if (firstOperand !== "") {
//       operator = e.target.textContent;
//       if (operator === "√") {
//         display(Math.sqrt(firstOperand));
//       } else if (operator === "1/x") {
//         display(1 / parseFloat(firstOperand));
//       }
//     } else {
//       alert("Please enter numeric value first");
//       document.location.reload();
//     }
//   })
// );

function compute(firstOperand, operator, secondOperand) {
  switch (operator) {
    case "+":
      display(parseFloat(firstOperand) + parseFloat(secondOperand));
      break;

    case "−":
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
}

/* displays at the most 10 digits on the screen if the length of result is more than 10 */
function display(answer) {
  if (`${answer}`.length > 10) {
    screen.value = `${answer}`.substr(0, 15);
  } else {
    screen.value = answer;
  }
  firstOperand = answer;
  secondOperand = "";
}

document.getElementById("go").addEventListener("click", function() {
  console.log(
    `first op is ${firstOperand} and second op is ${secondOperand} and operator is ${operator}`
  );
});

// need to work on result function so that when = is pressed the same switch case is executed.
