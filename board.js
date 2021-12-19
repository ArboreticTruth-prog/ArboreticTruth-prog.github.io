let boardMap = {
    0:"",1:"",2:"",3:"",
    4:"",5:"",6:"",7:"",
    8:"",9:"",10:"",11:"",
    12:"",13:"",14:"",15:""
}
let gameBoard = (x) =>{
    userarea.style.display = "flex"
    if (x == "easy"){
        Object.keys(boardMap).forEach(el =>{
            boardMap[el] = diffOne()
        })
        let y = document.getElementById("diffcultyselect")
        y.style.display = "none"
    }else if (x == "medium"){
        Object.keys(boardMap).forEach(el =>{
            boardMap[el] = diffTwo()
        })
        let y = document.getElementById("diffcultyselect")
        y.style.display = "none"
    }else {
        Object.keys(boardMap).forEach(el =>{
            boardMap[el] = diffThree()
        })
        let y = document.getElementById("diffcultyselect")
        y.style.display = "none"
    }
    
    creatGameBoard(boardMap, x)
}

creatGameBoard = (boardMap) =>{
    let board = document.getElementById("board")
    let y = 0
    Object.keys(boardMap).forEach(el =>{
        i = document.createElement("div")
        i.setAttribute("class", "cell")
        i.setAttribute("id", y)
        i.innerText = boardMap[el]
        i.style.margin = "5px"
        i.style.border = "groove"
        board.appendChild(i)
        y++
        
    })

    let userarea = document.getElementById("userarea")

    let wordcount = document.createElement("div")
    wordcount.setAttribute("id", "wordcount")
    wordcount.setAttribute("class", "wordcount")
    wordcount.innerText = 0

    let userInput = document.createElement("input")
    userInput.setAttribute("id", "userinput")
    userInput.setAttribute("value", "")

    userInput.addEventListener("keydown", Event => {
        if (Event.key === "Enter"){
            boardCheck()
        }
    })

    userarea.appendChild(userInput)
    userarea.appendChild(wordcount)
}

let boardCheck = () =>{
    let user = document.getElementById("userinput").value
    Object.keys(boardMap).forEach(el =>{
        let y = boardMap[el]
        if (user === y && document.getElementById(el).innerText === "X"){
            document.getElementById("userinput").value = ""
            document.getElementById("wordcount").innerText --   
        }
        if (user === y){
            document.getElementById(el).innerText = "X"
            document.getElementById("userinput").value = ""
            document.getElementById("wordcount").innerText ++
            
        }
        if (document.getElementById("wordcount").innerText == 16){
            window.location.reload(true)
        }
    })

}

let diffOne = () =>{ //Easy: Upper Case, string of 6
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomword = ""
    for (i=0; i<6 ; i++){
		let x=Math.floor(Math.random() * 26)
		randomword += char.charAt(x)
	}
	return randomword
}

let diffTwo = () =>{ //Medium: Upper case and Numbers, string of 8
    let char = "AB1CD2EF3GH4IJ5KL6MN7OP8QR9ST0UVWXYZ"
    let randomword = ""
    for (i=0; i<8 ; i++){
		let x=Math.floor(Math.random() * 36)
		randomword += char.charAt(x)
	}

	return randomword
}

let diffThree = () =>{// Hard: Upper & Lower case, Numbers and string of 12
    let char = "AaBb1CcDd2EeFf3GgHh4IiJj5KkLl6MmNn7OoPp8QqRe9SsTt0UuVvWwXxYyZz"
    let randomword = ""
    for (i=0; i<12 ; i++){
		let x=Math.floor(Math.random() * 62)
		randomword += char.charAt(x)
	}

	return randomword
}
