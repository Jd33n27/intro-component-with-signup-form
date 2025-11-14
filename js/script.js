const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const inputContainer = document.getElementById("input-container");
const errorMessageConatiner = document.getElementById(
  "error-message-container"
);

const originalFirstNamePlaceholder = firstName.placeholder;
const originalLastNamePlaceholder = lastName.placeholder;
const originalEmailPlaceholder = emailInput.placeholder;
const originalPasswordPlaceholder = passwordInput.placeholder;

submitButton.addEventListener("click", (sb) => {
  sb.preventDefault();
  console.log("button clicked");
  validator();
});

function validator() {
  firstNameValidator();
}

const firstNameValidator = () => {
  const value = firstName.value;
  if (value === 0 || value <= 5) {
    console.log("enough");
    inputContainer.classList.add("error");
    errorMessageConatiner.classList.add("error");
    firstName.placeholder = "";
  } else {
    inputContainer.classList.remove("error");
    errorMessageConatiner.classList.remove("error");
    firstName.placeholder = originalFirstNamePlaceholder;
  }
};
