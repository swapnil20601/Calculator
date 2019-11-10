const screen = document.getElementById("screen");

let firstOperand = '';

let secondOperand = '';

let numberButtonElements = document.querySelectorAll("button[data-number]");

let operator = document.querySelectorAll("button[data-operator]")

//returns true if operator is clicked
let isOperator = operator.forEach(op => op.addEventListener('click', function() {
  debugger
  return true;
}));



numberButtonElements.forEach(element =>
  element.addEventListener("click", function(e) {
      const btn = e.target.textContent;
      console.log(btn);

      //if isOperator is true, then clear screen and display secondOperand, ELSE, display firstOperand on screen
      if(isOperator) {
        console.log('operation is true')
        screen.value = '';
        secondOperand = secondOperand + btn;
        screen.value = secondOperand;
      }
       else {
        console.log('false operator')
        if (screen.value === "0") {
          firstOperand = firstOperand +  btn;
          screen.value = firstOperand
        } else if (screen.value.length < 10) {
          firstOperand = firstOperand +  btn;
          screen.value = firstOperand
        } else {
          alert("Only 10 digits are allowed!");
        } 
      }

  })
);

document.getElementById('x').addEventListener('click', function(e){
  console.log(isOperator)
})