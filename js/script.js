//Open-close login modal
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.add("active");
};

document.querySelector("#close-login-form").onclick = () => {
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
