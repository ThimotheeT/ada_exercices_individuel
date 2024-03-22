//Etape 1: La date est elle valide?

function isValidDate(date){
   let dateArray=date.split("/")
   let year=dateArray[2]
   let month=dateArray[1]
   let day=dateArray[0]

   if (year >= 999 && year <= 9999 && day >=1 && day <= maxDayInMonth(month)){
    return date
   }
   return "Not Valid" 
}

function maxDayInMonth(month){
   let daysInmonth = 
   {"31" : ["01","03","05","07","08","10","12"],
    "30" : ["04","06","09","11"],
    "28" : ["02"]}

    for (max in daysInmonth){
        if(daysInmonth[max].includes(month)) return max
    }
}

let validDate=isValidDate("11/02/2011")
console.log(validDate)

//Etape 2: La date est elle un palindrome?

function isDatePalindrome(date){ 
    if (isValidDate(date)){
       let splitDate = date.split("/").join("")
       return splitDate == splitDate.split("").reverse().join("")
    } else return false
}

let palindromeDate=isDatePalindrome("11/02/2011")
console.log(palindromeDate)

//Etape 3: Afficher les prochains palindromes

function getNextPalindromes(num) {

    let dateToday = new Date()
    let day = dateToday.getDate()
    let month = dateToday.getMonth() + 1
    if (month.length !== 2) month = "0" + month
    let year = dateToday.getFullYear()
    let stringDate = `${day}/${month}/${year}`

    console.log("aujourdhui " + stringDate)

    while (num !== 0) {

        if (isDatePalindrome(stringDate)) {
            num--
            console.log(stringDate)
            day++
            stringDate = `${day}/${month}/${year}`

            if (day < 10) day = "0" + day

            if (day >= 31) {
                day = 0
                month++

                if (day < 10) day = "0" + day

                stringDate = `${day}/${month}/${year}`

                if (month > 12) {
                    month = 1
                    year++

                    if (month < 10) month = "0" + month
                    if (day < 10) day = "0" + day

                    stringDate = `${day}/${month}/${year}`
                }
            }
        } else {

            day++
            if (day < 10) {
                day = "0" + day
            }
            stringDate = `${day}/${month}/${year}`

            if (day >= 31) {
                day = 0
                month++
                if (month < 10) month = "0" + month
                if (day < 10) day = "0" + day

                stringDate = `${day}/${month}/${year}`

                if (month > 12) {
                    month = 1
                    year++

                    if (month < 10) month = "0" + month
                    if (day < 10) day = "0" + day

                    stringDate = `${day}/${month}/${year}`
                }
            }
        }
    }
}

let nextPalindromes=getNextPalindromes(3)

//Etape 4: Creer une fonction palindrome pour les mots

function isPalindrome(word){ 
    let splitWord = word.split("").join("")
    let splittedWord=splitWord.split("").reverse().join("")
    if (splitWord==splittedWord){
       return splittedWord
    } else return false
}

let wordPalindrome=isPalindrome("kayak")
console.log(wordPalindrome)




