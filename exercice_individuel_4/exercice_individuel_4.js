// Etape 1: Séparer les lettres

// function getLatinCharacterList(string){
//     let lettres=string.split("")
//     return lettres
// }
// let result=getLatinCharacterList("Hello world")
// console.log(result)

// Etape 2: Traduire une lettre en morse

// let latinToMorse = {
// 	"A":".-",
// 	"B":"-...",
// 	"C":"-.-.",
// 	"D":"-..",
// 	"E":".",
// 	"F":"..-.",
// 	"G":"--.",
// 	"H":"....",
// 	"I":"..",
// 	"J":".---",
// 	"K":"-.-",
// 	"L":".-..",
// 	"M":"--",
// 	"N":"-.",
// 	"O":"---",
// 	"P":".--.",
// 	"Q":"--.-",
// 	"R":".-.",
// 	"S":"...",
// 	"T":"-",
// 	"U":"..-",
// 	"V":"...-",
// 	"W":".--",
// 	"X":"-..-",
// 	"Y":"-.--",
// 	"Z":"--.."
// }

// function translateLatinCharacter(caract){
//     let upper=caract.toUpperCase()
//     return latinToMorse[upper]    
// }
// let morsecaract=translateLatinCharacter(result[0])
// console.log(morsecaract)

// Etape 3: Traduire un mot en morse

// function encode(string){
//     let lettres=getLatinCharacterList(string)
//     let morse=""
//     for (let i=0;i<string.length;i++){
//     morse+=translateLatinCharacter(lettres[i])
//     }
//     return morse
// }
// let traduction=encode("CHIEN")
// console.log(traduction)

//Etape 4: Traduire un mot depuis le morse

// let morseToLatin = {
//     "-": "T",
//     "--": "M",
//     "---": "O",
//     "--.": "G",
//     "--.-": "Q",
//     "--..": "Z",
//     "-.": "N",
//     "-.-": "K",
//     "-.--": "Y",
//     "-.-.": "C",
//     "-..": "D",
//     "-..-": "X",
//     "-...": "B",
//     ".": "E",
//     ".-": "A",
//     ".--": "W",
//     ".---": "J",
//     ".--.": "P",
//     ".-.": "R",
//     ".-..": "L",
//     "..": "I",
//     "..-": "U",
//     "..-.": "F",
//     "...": "S",
//     "...-": "V",
//     "....": "H"
// }
// function getMorseCharacterList(string){
//     let lettres=string.split(" ")
//     return lettres
// }
// function translateMorseCharacter(caract){
//     return morseToLatin[caract]    
// }
// function decode(string){
//     let lettres=getMorseCharacterList(string)
//     let morse=""
//     for (let i=0;i<lettres.length;i++){
//     morse+=translateMorseCharacter(lettres[i])
//     }
//     return morse
// }
// let translate=decode("-.-. .... .. . -.")
//console.log(translate)

//Etape 5: Faire un traducteur dans un doc html
let latinToMorse = {
	"A":".-",
	"B":"-...",
	"C":"-.-.",
	"D":"-..",
	"E":".",
	"F":"..-.",
	"G":"--.",
	"H":"....",
	"I":"..",
	"J":".---",
	"K":"-.-",
	"L":".-..",
	"M":"--",
	"N":"-.",
	"O":"---",
	"P":".--.",
	"Q":"--.-",
	"R":".-.",
	"S":"...",
	"T":"-",
	"U":"..-",
	"V":"...-",
	"W":".--",
	"X":"-..-",
	"Y":"-.--",
	"Z":"--..",
    " ":" / "
}
let morseToLatin = {
    "-": "T",
    "--": "M",
    "---": "O",
    "--.": "G",
    "--.-": "Q",
    "--..": "Z",
    "-.": "N",
    "-.-": "K",
    "-.--": "Y",
    "-.-.": "C",
    "-..": "D",
    "-..-": "X",
    "-...": "B",
    ".": "E",
    ".-": "A",
    ".--": "W",
    ".---": "J",
    ".--.": "P",
    ".-.": "R",
    ".-..": "L",
    "..": "I",
    "..-": "U",
    "..-.": "F",
    "...": "S",
    "...-": "V",
    "....": "H",
    "/":" "
}
function getLatinCharacterList(string){
    let lettres=string.split("")
    return lettres
}
function translateLatinCharacter(caract){
    let upper=caract.toUpperCase()
    return latinToMorse[upper]  
}
function encode(string){
    let lettres=getLatinCharacterList(string)
    let morse=[]
    for (let i=0;i<string.length;i++){
    morse.push(translateLatinCharacter(lettres[i]))
    }
    return morse.join(" ")
}
function getMorseCharacterList(string){
    let lettres=string.split(" ")
    return lettres
}
function translateMorseCharacter(caract){
    return morseToLatin[caract]    
}
function decode(string){
    let lettres=getMorseCharacterList(string)
    let morse=""
    for (let i=0;i<lettres.length;i++){
    morse+=translateMorseCharacter(lettres[i])
    }
    return morse
}

let submit=document.getElementById("submit1")
submit.addEventListener("click", traduction)

function traduction(){
    let mot1=document.getElementById("french").value
    document.getElementById("trad1").innerHTML=encode(mot1)
    console.log(mot1)
}

let submit2=document.getElementById("submit2")
submit2.addEventListener("click", traduction2)

function traduction2(){
    let mot2=document.getElementById("morse").value
    document.getElementById("trad2").innerHTML=decode(mot2)
    console.log(mot2)
}