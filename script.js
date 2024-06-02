const formInputs = document.querySelectorAll("input");
const signUpForm = document.querySelector(".sing-up-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formInputs.forEach((input) => {
    if (input.type === "submit") {
      return;
    }
    const inputGroup = input.closest(".input-group");
    const errorIcon = inputGroup.querySelector(".icon-error");
    const errorMessage = inputGroup.querySelector(".error-message");

    if (!input.value) {
      input.placeholder = "";
      input.classList.add("error");
      errorIcon.classList.remove("hidden");
      errorMessage.classList.remove("hidden");
      if (input.name === "email") input.placeholder = "email@example.com";
    } else {
      input.classList.remove("error");
      errorIcon.classList.add("hidden");
      errorMessage.classList.add("hidden");
    }
  });
});
