const addButton = document.getElementById("add");

addButton.addEventListener("click", () => {
  if ( inputsAreEmpty() ) {
    updateResult("Please enter valid numbers.");
  } else {
    sumCalculator();
  }
});

const inputsAreEmpty = () => {
  return getNumber1() === "" || getNumber2() === "";
};

const sumCalculator = () => {
  const number1 = getNumber1();
  const number2 = getNumber2();
  const sum = number1 + number2;
  updateResult(`The sum is: ${sum}`);
};

const getNumber1 = () => {
  const number1Input = document.getElementById("number1");

  //Necesitamos retornar el valor de los elemntos en tipo entero, por lo tanto pasamos el valor por una función parseInt
  return parseInt(number1Input.value);
};

const getNumber2 = () => {
  const number2Input = document.getElementById("number2");
  //Necesitamos retornar el valor de los elementos en tipo entero, por lo tanto pasamos el valor por una función parseInt
  return parseInt(number2Input.value);
};

const updateResult = (text) => {
  const resultSpan = document.getElementById("result");
  resultSpan.textContent = text;
};
