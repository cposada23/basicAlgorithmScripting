
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(str.length > num){
        var to = num<=3?num:num-3;
        str = str.slice(0,to);
        for(var i = 0;i<3;i++){
            str += '.';
        }
    }
    return str;
}

console.log(truncateString("A-", 1));
