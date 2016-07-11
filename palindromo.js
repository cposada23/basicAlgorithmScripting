function palindrome(str) {
    var regExp = /([\W])/g; //match de los caracteres no alfanumericos, esto elimina tambien los espacion en blanco
    var newStr = str.replace(regExp,'').toLowerCase(); //Nuevo str sin los caracteres no alfanumericos
    newStr = newStr.replace('_','');
    console.log("newStr: " + newStr);
    var newStrReverse = newStr.split('').reverse().join(''); //invertir el string
    return (newStrReverse === newStr); //si son iguales es un palindromo;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));

