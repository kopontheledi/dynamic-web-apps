const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

    //When empty strings are submitted
  if (dividend === "" || divider === "" ) {
 result.innerText = "Division is not performed. Both values are required in the inputs. Try again"
  }
  //when a number that is less than 0 is submitted
  else if (dividend < 0  || divider < 0  ) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error()
    //when an input is not a number
  }  else if(isNaN(dividend) || (isNaN(divider))){
    document.body.innerHTML = '<h1>Something critical went wrong. Please reload the page!</h1>'
    console.error (new error(`Something critical went wrong. Please reload the page!`));
    
  }
  // to zero decimal
  else{
  result.innerText = Math.floor(dividend / divider);
  }
});