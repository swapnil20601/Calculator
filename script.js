const screen = document.getElementById("screen");

let firstOperand = document.querySelector("button[data-number = '1']");

let secondOperand = document.querySelector("button[data-number = '2']");

const result = document.querySelector("button[data-operator = '=']");

//returns value of first operand
firstOperand.addEventListener("click", function(e) {
  screen.value = e.target.textContent;
  return e.target.textContent;
});

//returns value of second operand
secondOperand.addEventListener("click", function(e) {
  screen.value = e.target.textContent;
  return e.target.textContent;
});

//calculates sum  of firstOperand & secondOperand and returns it's result
result.addEventListener("click", function(e) {
  sum =
    parseFloat(firstOperand.textContent) +
    parseFloat(secondOperand.textContent);
  screen.value = sum;
  return sum;
});
