const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const Greeting = document.querySelector("#greeting");
const MoveToLink  = document.querySelector("a");
// const UserName = LoginInput.value

const HIDDEN_CLASSNAME = "hidden";

function ClickEvent(EVENT) {
    EVENT.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME)
    const UserName = LoginInput.value
    localStorage.setItem("UserName", UserName)
    Greeting.innerText = `Hello ${UserName}`
    Greeting.classList.remove(HIDDEN_CLASSNAME)
}

function HandleLinkClick(EVENT) {
    // EVENT.preventDefault();
    // LoginForm.classList.add(HIDDEN_CLASSNAME)
    // const UserName = LoginForm.value
    // Greeting.innerText = `Hello ${UserName}`
    // Greeting.classList.remove(HIDDEN_CLASSNAME)

}

LoginForm.addEventListener("submit", ClickEvent);
// MoveToLink.addEventListener("click", HandleLinkClick);