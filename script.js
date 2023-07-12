const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submiBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

submiBtn.onclick = () => {
  let isFirstNameOk  = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;

  if(firstNameInput.value  === "" ){
    firstNameInput.classList.add("is-invalid");

  }else{
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;

  }
  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");

  }else{
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;

  }
  if(emailInput.value === "" ||  validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");

  }else{
    emailInput.classList.add("is-valid");
    isEmailOk = true ;

  }
  if(passwordInput.value === ""){
    passwordInput.classList.add("is-invalid");

  }else if(passwordInput.value.length > '6'){
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;

  }

  if(isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk){
    alert("Registered successfully");
  }

};



