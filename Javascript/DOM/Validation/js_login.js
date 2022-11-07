const dbURL = 'http://localhost:3000/user/';
const gotoPage = '/html/issues.html';
const mainPage = '/html/login.html';
const resetPage = '/html/reset.html';

let logIndex = 0;
function userValidation() {
    let userName = document.querySelector("#email-id").value; //stores email id input by user
    let password = document.querySelector("#passcode").value;  //stores password input by user

    fetch(dbURL + userName)
        .then(response => {
            return response.json();
        }).then(users => {
            if (users.id == (userName) && users.password == (password)) {
                localStorage.setItem('username', userName);
                window.open(gotoPage, '_self');
            } else {
                if (logIndex == 0) {
                    addInvalidDiv(userName);
                }
            }

        })
        .catch(function (err) {
            console.log(err);
        });
}

const loginElement = document.getElementById("sign-in");
loginElement.addEventListener("click", userValidation);
document.querySelector("#passcode").addEventListener("keydown", function (el) {
    console.log(el.keyCode);
    if (el.keyCode == 13) {
        userValidation();
    }
});

function addInvalidDiv(userName) {
    let spanText = "";
    if (userName === "" || userName.includes("@") === false) {
        spanText = "Enter valid email for logging in";
    } else {
        spanText = "Invalid login credentials";
    }
    let divElement = document.createElement("div");
    divElement.classList.add(...["ms-5", "ps-4", "pt-2", "pb-2", "border", "mb-4", "w-75"])
    divElement.setAttribute("id", "invalid-creds");
    divElement.innerHTML = `<i class="bi bi-exclamation-circle pe-1" style="font-size: 0.9rem;"></i>
            <span>${spanText}</span>
            <i class="bi bi-x pe-3 float-end"></i>`;
    document.getElementById("login").prepend(divElement);
    let instrElement = document.getElementById("invalid-creds");

    const crossEl = instrElement.childNodes[4];
    crossEl.addEventListener("click", () => {
        document.getElementById("invalid-creds").remove();
        logIndex = 0;
    })
    logIndex++;
}






