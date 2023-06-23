/**
  * Maximum allowed number.
  * @constant {number}
  */
const MAX_NUMBER = 15
/**
 * Minimum allowed number.
 * @constant {number}
 */
const MIN_NUMBER = -5
/**
 * The number input element.
 * @type {HTMLInputElement}
 */
const number = document.querySelector('[data-key="number"]')
/**
 * The subtract button element.
 * @type {HTMLButtonElement}
 */
const subtract = document.querySelector('[variant="danger"]')
/**
 * The add button element.
 * @type {HTMLButtonElement}
 */
const add = document.querySelector('[variant="success"]')
const reset = document.querySelector('[variant="default"]')
/**
 * Event handler for the subtract button click event.
 * @prop {Function} subtractHandler - Event handler for the subtract button click event.
 * @param {Event} event - The click event object.
 */
const subtractHandler = (event) => {
    /**
     * The new value after subtracting one from the current number value.
     * @type {number}
     * @prop {number} newValue - The new value after subtracting one.
     */
    const newValue = parseInt(number.value) - 1;
    number.value = newValue;
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    } else {
        subtract.disabled = false;
    }
};
const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue
    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }
}
const resetHandler = () => {
    number.value = 0;
    add.disabled = false;
    subtract.disabled = false;
    showMessage("Reset has been pressed")
}
const showMessage = (message) => {
    alert(message);
    message.disabled = false
};
subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
reset.addEventListener('click', resetHandler )