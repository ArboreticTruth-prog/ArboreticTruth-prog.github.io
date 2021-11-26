let hideObjects = () =>{
	document.getElementById("user_area").style.display = "flex"
	document.getElementById("login_area").style.display = "none"
	document.getElementById("signup_area").style.display = "none"
}

let signUp = () =>{
	const button = document.getElementById('signup_button');
	let usern = document.getElementById("sign_up_username").innerText
	let userpass = document.getElementById("sign_up_password2").innerText
	let useremail = document.getElementById("sign_up_email").innerText
	const getData = () => {
    	axios.post('http://24.67.64.8:8081/user/signup',{
            username:usern,
            password:userpass,
            email:useremail,
            auth:'token here'
    
    })
    .then(function (response) {
        console.log(response);
    }).catch(err=>{
        console.log(err)
    })
} 

button.addEventListener('click',()=>{
    getData();
})
get_users()
}

let get_users = () =>{
	let req = new XMLHttpRequest()
	req.open("GET", "http://24.67.64.8:8081/user/all")
	req.onload = function () {
		console.log(req.responseText)
	}
	req.send()	
}

let user_loggingIn = (event) =>{
	if (event.keyCode == 13){
	let user_name = document.getElementById("user_name")
	let pass_word = document.getElementById("pass")
	passw = pass_word.value
	usern = user_name.value
		if (usern == "admin" && passw == "password"){
			word_list()
			hideObjects()
			get_users()
			}
		event.preventDefault()
		}
	}

let randomLetter = () =>{
	let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let randomword = ""
	for (i=0; i<6 ; i++){
		let x=Math.floor(Math.random() * 26)
		randomword += char.charAt(x)
	}
	return randomword
}

let randomRow = () => {
let randomList = [randomLetter(), randomLetter(), randomLetter(), randomLetter()]
return randomList}


let count = 0
let player = () =>{
/* Takes Users input on Enter and sends it to Game()*/
if (count == 16){
	word_list()
	count = 0
}
let input = document.getElementById("user_input")
if (event.keyCode == 13){
	let myValue = input.value
	event.preventDefault()
	game(myValue)}
}

let word_list = () =>{
/* returns a random word or words from a pre made word list */
/* \/\/\/\/ Random Word Logic*/

let wordlist_row1 = randomRow()
let wordlist_row2 = randomRow()
let wordlist_row3 = randomRow()
let wordlist_row4 = randomRow()



let boardlist1 = document.getElementsByClassName("board-row-1")
let boardlist2 = document.getElementsByClassName("board-row-2")
let boardlist3 = document.getElementsByClassName("board-row-3")
let boardlist4 = document.getElementsByClassName("board-row-4")

for (i = 0; i<boardlist1.length; i++){
	boardlist1[i].innerText = wordlist_row1[i]}


for (i = 0; i<boardlist2.length; i++){
	boardlist2[i].innerText = wordlist_row2[i]}

for (i = 0; i<boardlist3.length; i++){
	boardlist3[i].innerText = wordlist_row3[i]}

for (i = 0; i<boardlist4.length; i++){
	boardlist4[i].innerText = wordlist_row4[i]}


}

let game = (x) => {
/* Takes the Users input and compares it to the first row.
To Do: Compare to the rest of the rows*/ 
let row1 = document.getElementsByClassName("board-row-1")
let row2 = document.getElementsByClassName("board-row-2")
let row3 = document.getElementsByClassName("board-row-3")
let row4 = document.getElementsByClassName("board-row-4")
for (i = 0; i<4; i++){
	let r1 = row1[i].innerText
	let r2 = row2[i].innerText
	let r3 = row3[i].innerText
	let r4 = row4[i].innerText
	if (x == r1){row1[i].innerText = "X"
		count += 1
		document.getElementById("user_input").value = ""}
	else if (x == r2){row2[i].innerText = "X"
		count += 1
		document.getElementById("user_input").value = ""}
	else if (x == r3){row3[i].innerText = "X"
		count += 1
		document.getElementById("user_input").value = ""}
	else if (x == r4){row4[i].innerText = "X"
		count += 1
		document.getElementById("user_input").value = ""}
	else {document.getElementById("user_input").value = ""}
	}
}

