const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const userId = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userId);
    //greeting.innerText = "Hello " + userId;
    paintGreetings(userId);
}

function paintGreetings(userId){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${userId}`;
}

const localuser = localStorage.getItem(USERNAME_KEY);

if (localuser === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    //show the gretting
    paintGreetings(localuser);
}