//Jeu 1 étape 1 à 3

// function asknumber(){
//     let givenNumber=prompt("Donnez moi un nombre :");
//     return givenNumber
// }

// function didIwin(asknumber){
//     let number=22

//     if(asknumber==number){
//         return true
//     }else{
//         return false
//     }
// }

// function gameplay(){
// let newPhrase=didIwin(asknumber())
// let result=""

// if(newPhrase == false){
//     gameplay()
// }else{
//    alert(result = "Bravo, tu as gagné")
// }
// }

// gameplay()

//Jeu 2 étape 4

// function askPlayer1(){
//     let givenNumber1=prompt("Bonjour Player1, donne moi un nombre entre 0 et 50")
//     return givenNumber1
// }

// function askPlayer2(){
//     let givenNumber2=prompt("Bonjour Player2, devine le nombre choisis par Player1 (entre 0 et 50)")
//     return givenNumber2
// }

// function didIwin(givenNumber1,givenNumber2){
//     if(givenNumber1==givenNumber2){
//         return true
//     }else{
//         return false
//     }
// }

// function gameplay(){
//     let goodNumber1=askPlayer1()
//     let good
//     let player2

//     while(!good){
//         player2=askPlayer2()
//         if (goodNumber1==player2){
//             alert ("Bravo! tu as gagné")
//             break
//         }   
//     }
// }

// gameplay()

//Jeu étape 5

// document.getElementById("joueur2").style.display="none"

// document.getElementById("submit1").addEventListener("click",function(){
//     let guessnumber1 = document.getElementById("number1").value
//     document.getElementById("joueur1").style.display ="none"
//     document.getElementById("joueur2").style.display = "block"
//     let compteur = 0
//     document.getElementById("submit2").addEventListener("click", function(){
//         let guessnumber2 = document.getElementById("number2").value
//         compteur ++
//         document.getElementById("joueur2").style.display = "none"
//         if(guessnumber1 == guessnumber2){
//            document.getElementById("resultat").style.display= "block"
//            document.getElementById("resultat").innerHTML ="Tu as gagné!! Bravo!!" + ` Tu as réussi après ${compteur} tentatives `
//         }
//         else{
//             alert(`Essaye encore!! Tu es à ${compteur} tentatives`)
//             document.getElementById("joueur2").style.display = "block"
//          }
  
//       })
  
//       })

//Jeu étape 6

let minimumValue = 0
let maximumValue = 50  
let range = document.body.innerHTML

function firstPlayer() {
   range = `Le nombre est compris entre ${minimumValue} et ${maximumValue}`
   document.getElementById("submit1").addEventListener("click", function () {
      document.getElementById("joueur1").style.display = "none"
      document.getElementById("joueur2").style.display = "block"
      document.getElementById("resultat").style.display = "none"
      secondPlayer()
   })
}

function secondPlayer() {
   document.getElementById("range").innerHTML = `${range}`
   document.getElementById("submit2").addEventListener("click", function () {
      let guessednumber = document.getElementById("number2").value
      document.getElementById("joueur2").style.display = "none"
      document.getElementById("resultat").style.display = "none"
      compare()
   })
 }

let compteur = 0

function compare() {
   compteur++;
   let numberToGuess = document.getElementById("number1").value;
   let newGuess;

   while (true) {
       newGuess = document.getElementById("number2").value;

       if (numberToGuess == newGuess) {
           document.getElementById("resultat").style.display = "block";
           document.getElementById("resultat").innerHTML = `Tu as gagné !! Bravo ! Tu as réussi après ${compteur} tentatives.`;
           break;
       } else {
           alert(`Essaye encore !! Tu es à ${compteur} tentatives.`);
           if (newGuess<numberToGuess){
           minimumValue = newGuess;
           }else{maximumValue = newGuess}
           range = `Le nombre est compris entre ${minimumValue} et ${maximumValue}`
           document.getElementById("range").innerHTML = `${range}`
           document.getElementById("joueur2").style.display = "block";
           break;
       }
   }
}


firstPlayer()
