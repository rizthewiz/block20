// pull the vaiables from DOM
const form = document.querySelector("form");
const output = document.querySelector("output");
// const numberBank = document.getElementById("numberBank");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const odds = document.getElementById("odds");
const evens = document.getElementById("evens");

//Array to contain the numbers
const numbers = [];
const sortedNumbers = [];

// add events here
form.addEventListener("submit", addNumber);
sortOne.addEventListener("click", sortFirst);
sortAll.addEventListener("click", sortArray);

update();

//function to make changes to the page here
function update() {
  const numberElements = numbers.map((number) => {
    const newEl = document.createElement("p");
    newEl.textContent = number;
    return newEl;
  });
  output.replaceChildren(...numberElements);
}

// When Add Number clicked input.value added to number bank
// Number bank not changed if NaN - only accepts number types thus working already
// Number bank displays all numbers entered
function addNumber(event) {
  event.preventDefault();
  const number = event.target.number.value;
  numbers.push(number);
  event.target.number.value = "";
  update();
}

// When Sort 1 clicked first number in bank is removed and placed in odd or even
// When Sort All clicked all numbers are sorted

function sortFirst(e) {
  sortedNumbers.push(numbers[0]);

  if (numbers[0] % 2 === 1) {
    const sortedEl = document.createElement("p");
    sortedEl.textContent = numbers.shift();
    const sortbox = odds.querySelector("output");
    sortbox.appendChild(sortedEl);
  } else {
    const sortedEl = document.createElement("p");
    sortedEl.textContent = numbers.shift();
    const sortbox = evens.querySelector("output");
    sortbox.appendChild(sortedEl);
  }
  update();
  console.log(sortedNumbers);
}

function sortArray(e) {
  while (numbers.length > 0) {
    sortFirst();
  }
}
