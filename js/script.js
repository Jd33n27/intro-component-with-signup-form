const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const firstNameContainer = document.getElementById("first-name-container");
const lastNameContainer = document.getElementById("last-name-container");
const passwordInputContainer = document.getElementById("password-container");
const firstNameErrorMessageContainer = document.getElementById(
  "first-name-error-message-container"
);
const lastNameErrorMessageContainer = document.getElementById(
  "last-name-error-message-container"
);
const passwordErrorMessageConatiner = document.getElementById(
  "password-error-message-container"
);
const emailContainer = document.getElementById("email-container");
const emailErrorMessageContainer = document.getElementById(
  "email-error-message-container"
);

const originalFirstNamePlaceholder = firstName.placeholder;
const originalLastNamePlaceholder = lastName.placeholder;
const originalEmailPlaceholder = emailInput.placeholder;
const originalPasswordPlaceholder = passwordInput.placeholder;

submitButton.addEventListener("click", (sb) => {
  sb.preventDefault();
  console.log("button clicked");
  validators();
});

// A single, reusable function
const validateField = (
  input,
  container,
  errorContainer,
  minLength,
  placeholder
) => {
  const value = input.value;

  if (value.length === 0 || value.length < minLength) {
    // erroe state
    container.classList.add("error");
    errorContainer.classList.add("error");
    input.placeholder = value.length === 0 ? "" : `Must be ${minLength}+ chars`;
  } else {
    // valid state
    container.classList.remove("error");
    errorContainer.classList.remove("error");
    input.placeholder = placeholder;
  }
};

const emailValidator = () => {
  const value = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // .test() returns true if it matches, false if it doesn't
  if (emailPattern.test(value)) {
    // if the email is valid, so remove errors
    emailContainer.classList.remove("error");
    emailErrorMessageContainer.classList.remove("error");
    emailInput.placeholder = originalEmailPlaceholder;
  } else {
    // if the email is not valid, so add errors
    emailContainer.classList.add("error");
    emailErrorMessageContainer.classList.add("error");
    emailInput.placeholder = "email@example.com";
  }
};

function validators() {
  // Calling the reusable function for each field
  validateField(
    firstName,
    firstNameContainer,
    firstNameErrorMessageContainer,
    5, // min length
    originalFirstNamePlaceholder
  );

  validateField(
    lastName,
    lastNameContainer,
    lastNameErrorMessageContainer,
    5, // min length
    originalLastNamePlaceholder
  );

  validateField(
    passwordInput,
    passwordInputContainer,
    passwordErrorMessageConatiner,
    8, // min length
    originalPasswordPlaceholder
  );
  emailValidator();
}
