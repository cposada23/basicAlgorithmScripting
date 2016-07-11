function titleCase(str) {

    var newStr = str.toLowerCase().replace(/(^|\s)[a-z]/g, function(letter){
        return letter.toUpperCase();
    });
    /*var newStr = str.replace(/\b[a-z]/g, function(letter){
        return letter.toUpperCase();
    });*/


    return newStr;
}

var titleStr = titleCase("I'm a little tea pot");
console.log(titleStr);