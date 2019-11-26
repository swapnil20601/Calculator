const screen = document.getElementById("screen");

let firstOperand = "";

let secondOperand = "";

let operator = "";

let lengthOfOperand = 0;

const numberButtonElements = document.querySelectorAll("button[data-number]");

const operatorButtonElements = document.querySelectorAll(
  "button[data-operator]"
);

/* function to insert decimal in operands */
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

/* resets display to 0 when CE button is pressed */
document.getElementById("clear").addEventListener("click", function() {
  screen.value = "0";
  window.location.reload();
});

/* function to delete individual digit. Basically works as backspace */
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

/* function to grab operator and call compute function to perform operation based on operator */
operatorButtonElements.forEach(res =>
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

/* function to set firstOperand and secondOperand */
numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
    const btn = e.target.textContent;

    /* set and display secondOperand on screen where maximum length of secondOperand is 10 
    and if it contains decimal, then maximum length is 11
    */
    if (operator !== "") {
      lengthOfOperand = secondOperand.includes(".") ? 11 : 10;
      secondOperand.includes(".")
        ? (lengthOfOperand = 11)
        : (lengthOfOperand = 10);
      if (secondOperand.length < lengthOfOperand) {
        secondOperand = secondOperand + btn;
        screen.value = secondOperand;
      }
    } else {
      /* set and display firstOperand on screen with maximum length of 10 without decimal and
      11 if it contains decimal
    */
      lengthOfOperand = firstOperand.includes(".") ? 11 : 10;
      if (screen.value === "0") {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      } else if (firstOperand.length < lengthOfOperand) {
        firstOperand = firstOperand + btn;
        screen.value = firstOperand;
      }
    }
  })
);

/* function to perform operation on first and second operand based on operator selected */
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

/* displays at the most 14 digits on the screen if the length of result is more than 10 */
function display(answer) {
  if (`${answer}`.length > 10) {
    screen.value = `${answer}`.substr(0, 14);
  } else {
    screen.value = answer;
  }
  firstOperand = answer;
  secondOperand = "";
}
