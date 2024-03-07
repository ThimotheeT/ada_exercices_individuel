//Etape 1: 
//Additionner les chiffres d'un tableau

let chiffres=[1,2,3,4,5,6,7,8,9]

function sum1(liste){
    let result=0
    for (let i=0; i<chiffres.length; i++){
        result += liste[i]
    }
    return result
}

let result1=sum1(chiffres)
console.log(result1)

//Etape 2:
//Meme exercice avec une fonction récursive

function sum2(liste){
    if(liste.length === 0){
        return 0
    }else{
        return liste[0] + sum2(liste.slice(1))
    }
}

let result2=sum2(chiffres)
console.log(result2)

//Etape 3:
//Creer une fonction qui prend un chiffre et calcul son factoriel

function factorial(chiffre){
    if (chiffre == 0)
        return 1;
    else
        return chiffre * factorial(chiffre - 1);
}

let result3=factorial(4)
console.log(result3)

//Etape 4:
//Creer une fonction qui prend un entier et résout le suite de Fibonacci
//0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21).

function fibonacci(x){
    if (x == 0){
        return 0
    }else if (x == 1){
        return 1
    }else{
        return fibonacci(x - 1) + fibonacci(x - 2)
    }
}
let result4=fibonacci(9)
console.log(result4)
