const form = document.querySelector(".form");
const error = document.querySelector(".invalid-message");
const email = document.querySelector(".form__email");

form.addEventListener("submit", (e) => {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value == "") {
    email.classList.add("active");
    error.classList.add("active");
    error.innerText = "Email can't be blank";
  }
  if (!email.value.match(pattern)) {
    email.classList.add("active");
    error.classList.add("active");
    error.innerText = "Please provide a valid email address";
  } else {
    email.classList.remove("active");
    error.classList.remove("active");
  }
});
