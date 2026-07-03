let namee = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let password2 = document.getElementById('pass2');
let btn = document.getElementById('submit');
let alerttt = document.getElementById('mess');
let cap = document.getElementById('cpatcha');
let capCheck = document.getElementById('cpatcha-check');

// generate captcha
function makeCaptcha() {
  let text = Math.random().toString(36).substring(2, 8);
  cap.value = text;
}
makeCaptcha();

btn.addEventListener("click", () => {
  let msg = [];

  if (namee.value === "") msg.push("Name must be filled");
  if (email.value === "") msg.push("Email must be filled");
  if (password.value === "") msg.push("Password must be filled");
  if (password2.value === "") msg.push("Confirm password must be filled");

  if (password.value !== password2.value) {
    msg.push("Passwords do not match");
  }

  if (capCheck.value !== cap.value) {
    msg.push("Captcha is wrong");
    makeCaptcha();
  }

  if (msg.length > 0) {
    alerttt.innerHTML = msg.join("<br>");
    alerttt.className = "text-red-600 font-semibold";
  } else {
    alerttt.innerHTML = "Registration Successful!";
    alerttt.className = "text-green-600 font-semibold";
  }
});
