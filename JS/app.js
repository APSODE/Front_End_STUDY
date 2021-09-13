// const LoginForm = document.querySelector("#login-form");
// const LoginInput = document.querySelector("#login-form input");
// const Greeting = document.querySelector("#greeting");
// const MoveToLink  = document.querySelector("a");

const LoginForm = document.querySelector("#login-form")
const LoginIdInput = document.querySelector('#login-form input[class="ID_SPACE"]')
const LoginPwInput = document.querySelector('#login-form input[class="PW_SPACE"]')
const Greeting = document.querySelector("#greeting");


// const UserName = LoginInput.value

const HIDDEN_CLASSNAME = "hidden";
const USERACCOUNT_ID = "TestId"
const USERACCOUNT_PW = "TestPw"
const USERACCOUNT_USERNAME = "테스트계정"



function ClickEvent(EVENT) {
    EVENT.preventDefault();
    // console.dir(LoginIdInput)
    // const UserName = LoginInput.value
    const InputUserId = LoginIdInput.value;
    const InputUserPw = LoginPwInput.value; 

    localStorage.setItem(USERACCOUNT_ID, USERACCOUNT_USERNAME)

    if (InputUserId == USERACCOUNT_ID && InputUserPw == USERACCOUNT_PW) {
        LoginForm.classList.add(HIDDEN_CLASSNAME);
        USERNAME = localStorage.getItem(InputUserId)
        Greeting.innerText = `Hello ${USERNAME}`;
        Greeting.classList.remove(HIDDEN_CLASSNAME);
    } else if (InputUserId != USERACCOUNT_ID) {
        alert(`입력하신 ${InputUserId} 계정은 존재하지 않습니다.`)
        LoginIdInput.value = null
        LoginPwInput.value = null
    } else if (InputUserId == USERACCOUNT_ID && InputUserPw != USERACCOUNT_PW) {
        alert(`입력하신 ${InputUserPw} 비밀번호는 잘못되었습니다.`)
        LoginIdInput.value = null
        LoginPwInput.value = null
    } else {
        alert("에러!")
        LoginIdInput.value = null
        LoginPwInput.value = null
    }



    
    // console.log(`InputUserId = ${InputUserId}`);
    // console.log(`InputUserPw = ${InputUserPw}`);

    // localStorage.setItem("UserName", UserName);
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