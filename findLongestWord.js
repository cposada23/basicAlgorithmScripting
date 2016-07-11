function findLongestWord(str) {
    var arr = str.split(' ');
    /*arr.sort(function(a,b){
        return a.length - b.length;
    });*/

    var word = arr.reduce(function (a, b) {
        return (a.length>b.length)?a:b;
    });

    return word.length;
}

var res = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(res);