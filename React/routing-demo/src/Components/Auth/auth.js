const authentication={
    isLoggedIn : false,
    async Login(){
    await fetch("http://localhost:9000/auth/isAuthenticated",{
    method:"POST",
    headers:{
    "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
    
    }).then(res=>res.json())
    .then(data=>{
    this.isLoggedIn=data.isAuthenticated
    })
    }
    }
    
    export default authentication;
    

    import authentication from "./components/Services/auth";

    authentication.isLoggedIn

    authentication.Login()