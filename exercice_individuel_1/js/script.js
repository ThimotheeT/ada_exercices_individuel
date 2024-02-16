function askName(){
    let nomUtilisateur=prompt("Comment tu t'appelles?")
    let bienvenu=(`👋 Bonjour ${nomUtilisateur}`)
    document.getElementById("hello").innerHTML=bienvenu
}


askName()
// let nomUtilisateur=prompt("Comment tu t'appelles?")
// console.log(nomUtilisateur)

// let bienvenu=(`👋 Bonjour ${nomUtilisateur}`)
// console.log(bienvenu)

// document.getElementById("hello").innerHTML=bienvenu

function askBirthYear(){
    let anneeUtilisateur=prompt("Quelle est ton année de naissance? /aaaa")
    let age=(`Vous avez ${2024-anneeUtilisateur} ans`)
    document.getElementById("age").innerHTML=age
}

askBirthYear()

// let anneeUtilisateur=prompt("Quelle est ton année de naissance?")
// console.log(anneeUtilisateur)

// // let ageUtilisateur=(2024-anneeUtilisateur)
// // console.log(ageUtilisateur)

// let age=(`Vous avez ${2024-anneeUtilisateur} ans`)
// console.log(age)

// document.getElementById("age").innerHTML=age

function askMonth(){
    let monthUtilisateur=prompt("Quel est ton mois de naissance? /mm")
    let month=(`Et ${2-monthUtilisateur} mois`)
    document.getElementById("mois").innerHTML=month
}

askMonth()