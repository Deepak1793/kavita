export const isLoggedIn=()=>{
    let token=localStorage.getItem("jwtToken");
    if (token != null) return true;
    else return false;
}

export const bankDetails = () => {

    let bankUser = JSON.parse(localStorage.getItem('accInfo'))
    return bankUser
}

export const userDetails = () => {

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    return loggedUser
}