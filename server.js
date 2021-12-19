
// Server logic:
//  Log In Logic
//  Sign Up Logic
// session storage for auth token
createHeaders = () => {
    return { headers: {auth:""}}
}

const loginData = (data) => {
    axios.post('http://24.67.64.8:8081/user/login',{
            data
    }, createHeaders)
    .then(function (response) {
        
        createHeaders.headers.auth = response.auth;
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })
}

const signupData = (data) => {
    axios.post('http://24.67.64.8:8081/user/signup',{
            data
    }, createHeaders)
    .then(function (response) {
        // this is where we do the stuff with the data
        createHeaders.headers.auth = response.auth;
    }).catch(err=>{
        console.log(err)
    })
} 

//// \/ Buttons to activate functions

const createSignup = () =>{
    const signup = {
        username: document.getElementById(user_name).innerText,
        password: document.getElementById(user_password).innerText,
        email: document.getElementById(user_email).innerText

    }
    console.log(signup)
    signupData(signup)
}

const createLogin = () =>{
    const login = {
        password: document.getElementsByClassName("passwordLogin").innerText,
        email: document.getElementsByClassName("usernameLogin").innerText
    }
    loginData(login)
}

//// /\ Buttons to activate these functions