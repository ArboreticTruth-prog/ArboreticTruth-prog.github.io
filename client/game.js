let loggingIn = () => { //Will send User Input Data to Server File
    let usernamearea = document.createElement("input")
    usernamearea.setAttribute("class", "usernameLogin")
    usernamearea.setAttribute("value", "Username")

    let passarea = document.createElement("input")
    passarea.setAttribute("class", "passwordLogin")
    passarea.setAttribute("value", "Password")

    let loginarea = document.getElementById("loginarea")
    let loggingin = document.createElement("text")
    loggingin.innerText = "Logging In?"
    loggingin.style.alignSelf = "center"
    
    let submitToServer = document.createElement("button")
    submitToServer.setAttribute("class", "submitButton")
    submitToServer.setAttribute("onclick", "createLogin()")
    submitToServer.innerHTML = "Submit"
    
    
    loginarea.appendChild(loggingin)
    loginarea.appendChild(usernamearea)
    loginarea.appendChild(passarea)
    loginarea.appendChild(submitToServer)
    

}

let signingUp = () =>{ //Will send User Input Data to Server File
    let usernamearea = document.createElement("input")
    let passarea = document.createElement("input")
    let confirmpassarea = document.createElement("input")
    let email = document.createElement("input")
    let singuptext = document.createElement("text")
    let signinarea = document.getElementById("signinarea")

    usernamearea.setAttribute("class", "usernameSignin")
    passarea.setAttribute("class", "passwordSignin")
    confirmpassarea.setAttribute("class", "confirmSignin")
    email.setAttribute("class", "email")

    singuptext.innerText = "Signing Up?"
    singuptext.style.alignSelf = "center"

    usernamearea.setAttribute("value", "Username?")
    passarea.setAttribute("value", "Password")
    confirmpassarea.setAttribute("value", "Confirm Password")
    email.setAttribute("value", "Email")

    signinarea.appendChild(singuptext)
    signinarea.appendChild(usernamearea)
    signinarea.appendChild(passarea)
    signinarea.appendChild(confirmpassarea)
    signinarea.appendChild(email)
}

let difficultySelect = () =>{ //Sends selected Difficulty Logic to Game Board File
    let box = document.getElementById("diffcultyselect")

    let easy = document.createElement("button")
    let medium = document.createElement("button")
    let hard = document.createElement("button")


    easy.innerHTML = "Easy"
    medium.innerHTML = "Medium"
    hard.innerHTML = "Hard"

    easy.setAttribute("onClick", "gameBoard('easy')")
    medium.setAttribute("onClick", "gameBoard('medium')")
    hard.setAttribute("onClick", "gameBoard('hard')")


    box.appendChild(easy)
    box.appendChild(medium)
    box.appendChild(hard)
}

let changeDisplay = () =>{
    loginarea.style.display = "none"
    console.log("hello")
}

document.addEventListener('DOMContentLoaded', onLoad = () => {
    difficultySelect()
    
})

