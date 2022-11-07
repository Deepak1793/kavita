console.log("Welcome");
let urlUsers="http://localhost:3000/users";

var currentUser = 0;



let alreadyAcntLogin = document.querySelector("#alreadyAcntLogin");
alreadyAcntLogin.onclick = switchToLogin;

let noAccntReg = document.querySelector("#noAccntReg");
noAccntReg.onclick = switchToRegister;

function switchToLogin(){
    reset();
    document.querySelector("#divLogin").style.display = "block";
    document.querySelector("#divRegister").style.display = "none";
}

function switchToRegister(){
    reset();
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divRegister").style.display = "block";
}

let messages = {
    "missingName" : "Please enter your Name and try again",
    "missingUseremail": "Please enter your email id field and try again",
    "missingPassword": "Please enter your password field and try again",
    "incorrectPassword": "Incorrect password entered. Please try again.",
    "loginSuccess": "Login Success",
    "registerSuccess": "Registration Successful. Kindly login now.",
    "signup": "Email id not registered. Kindly Register before logging in."
  };

let btnLogin = document.querySelector("#btnLogin");
btnLogin.onclick = login;

function login(){
    let email = document.querySelector("#inputEmailLog").value;
    let password = document.querySelector("#inputPasswordLog").value;
    if(email===""){
        alert(messages.missingUseremail);
    }
    else if(password===""){
        alert(messages.missingPassword);
    }
    else{
        let emailFound = false;
        fetch(urlUsers)
        .then(data=>{
            return data.json();
        })
        .then(data_json=>{
            data_json.forEach(user => {
                console.log(user.userEmail);
                if(email===user.userEmail){
                    console.log("User Found");
                    emailFound = true;
                    if(password === user.password){
                        console.log("Correct Password");
                        alert(messages.loginSuccess);
                        reset();
                        // Move to Home Page........
                        sessionStorage.setItem("currentUser", user.id);
                        location.href = "home.html";
                    }
                    else{
                        console.log("Incorrect Password");
                        alert(messages.incorrectPassword);
                        document.querySelector("#inputPasswordLog").value = "";
                    }
                }
            });
            if(emailFound===false){
                alert(messages.signup);
                reset();
                switchToRegister();
            }
        })
        .catch("Error in validating details.");
    }
}


let btnRegister = document.querySelector("#btnRegister");
btnRegister.onclick = register;
var data={};
var data_header={};
function register(){
    let name = document.querySelector("#inputNameReg").value;
    let email = document.querySelector("#inputEmailReg").value;
    let password = document.querySelector("#inputPasswordReg").value;
    
    if(name===""){
        alert(messages.missingName)
    }
    else if(email===""){
        alert(messages.missingUseremail);
    }
    else if(password===""){
        alert(messages.missingPassword);
    }
    else{
        collectData(name,email,password);
        fetch(urlUsers,data_header)
            .then(response=>{
                if(!response.ok){
                    throw Error(response.status)
                }
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                alert(messages.registerSuccess);
                reset();
                switchToLogin();
            }).catch("error in POST");
    }
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

let collectData=(name,email,password)=>{
    data= {
    "id": ID,
    "userName":name,
    "userEmail":email,
    "password":password};
    data_header={
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    };
};
 

function newTask(){
    event.preventDefault();
    
    collectData();
    console.log(data);

    fetch(url,data_header)
    .then(response=>{
        if(!response.ok){
            throw Error(response.status)
        }
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch("error in POST");
    reset();
}


function reset(){
    document.querySelector("#inputNameReg").value = "";
    document.querySelector("#inputEmailReg").value = "";
    document.querySelector("#inputPasswordReg").value = "";
    
    document.querySelector("#inputEmailLog").value = "";
    document.querySelector("#inputPasswordLog").value = "";
}


function showPasswordLog(){
    var pass = document.querySelector("#inputPasswordLog");
    if(pass.type === "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}

function showPasswordReg(){
    var pass = document.querySelector("#inputPasswordReg");
    if(pass.type === "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}