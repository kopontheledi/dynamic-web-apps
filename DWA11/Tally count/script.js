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

// const MAX_NUMBER = 15;
// const MIN_NUMBER = -5;

// const number = document.querySelector('[data-key="number"]');
// const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const reset = document.querySelector('[data-key="reset"]');
// const message = document.querySelector('[data-key="message"]');

// const updateCounter = (newValue) => {
//   number.value = newValue;
//   subtract.disabled = newValue <= MIN_NUMBER;
//   add.disabled = newValue >= MAX_NUMBER;
// };

// const subtractHandler = () => {
//   const newValue = parseInt(number.value) - 1;
//   updateCounter(newValue);
// };

// const addHandler = () => {
//   const newValue = parseInt(number.value) + 1;
//   updateCounter(newValue);
// };

// const resetHandler = () => {
//   updateCounter(0);
//   message.textContent = "The counter has been reset.";
// };

// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);
// reset.addEventListener('click', resetHandler);

// Define the reducer function
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Create the store
const createStore = (reducer) => {
  let state = reducer(undefined, {});
  const subscribers = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

// Create the store instance
const store = createStore(reducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('New state:', state);
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' }); // Increment the counter
store.dispatch({ type: 'INCREMENT' }); // Increment the counter
store.dispatch({ type: 'DECREMENT' }); // Decrement the counter
store.dispatch({ type: 'RESET' }); // Reset the counter

// Unsubscribe from state changes
unsubscribe();
