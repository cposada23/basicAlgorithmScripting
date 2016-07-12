
function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments,1);
    arr = arr.filter(function (val) {
        for(var i = 0; i<args.length;i++){
            if (val === args[i]){
                return false;
            }
        }
        return true;
    });
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));