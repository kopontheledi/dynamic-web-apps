// const MAX_NUMBER =15
// const MIN_NUMBER =-5

// const number= document.querySelector ('[data-key="number"]')
// const subtract=  document.querySelector ('[data-key="subtract"]')
// const add=  document.querySelector ('[data-key="add"]')

// const subtractHandler = ()  =>{
// const newValue= parseInt(number.value) - 1
// number.value = newValue

// if ( add.disabled === true) {
//     add.disabled = false
// }

// if (newValue <= MIN_NUMBER) {
//     subtract.disabled = true
// }
// }

// const addHandler = ()  =>{
//     const newValue= parseInt(number.value) + 1
// number.value = newValue


// if ( subtract.disabled === true) {
//     subtract.disabled = false
// }

// if (newValue >= MAX_NUMBER) {
//     add.disabled = true
// }
// }


// subtract.addEventListener ('click', subtractHandler )


// add.addEventListener  ('click', addHandler )

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');
const message = document.querySelector('[data-key="message"]');

const updateCounter = (newValue) => {
  number.value = newValue;
  subtract.disabled = newValue <= MIN_NUMBER;
  add.disabled = newValue >= MAX_NUMBER;
};

const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1;
  updateCounter(newValue);
};

const addHandler = () => {
  const newValue = parseInt(number.value) + 1;
  updateCounter(newValue);
};

const resetHandler = () => {
  updateCounter(0);
  message.textContent = "The counter has been reset.";
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);
