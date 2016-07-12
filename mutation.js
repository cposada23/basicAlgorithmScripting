function mutation(arr) {
    var str2 = arr[1].toLowerCase();
    var str1 = arr[0].toLowerCase();
    for (var i = 0; i<str2.length; i++){
        var letter = str2.slice(i,i+1);
        console.log("letter " +i +' ' +letter);
        if(str1.indexOf(letter)<0){
            return false;
        }

    }
    return  true;
}

mutation(["hello", "Hey"]);