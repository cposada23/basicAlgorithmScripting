function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b){
        return a-b;
    });
    var i = 0;
    while(i<arr.length){
        if(arr[i]>=num){
            break;
        }
        i++;
    }
    return i;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));