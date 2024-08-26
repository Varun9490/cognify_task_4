document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complex-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    // Username validation
    if (usernameInput.value.trim() === "") {
      usernameError.classList.remove("hidden");
      isValid = false;
    } else {
      usernameError.classList.add("hidden");
    }

    // Password validation
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
      passwordError.classList.remove("hidden");
      isValid = false;
    } else {
      passwordError.classList.add("hidden");
    }

    // If form is valid, show success message
    if (isValid) {
      messageDiv.innerHTML =
        '<p class="bg-green-500 text-white p-4 rounded-md">Form submitted successfully!</p>';
      form.reset();
    }
  });
});
