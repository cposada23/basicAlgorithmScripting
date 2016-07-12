function chunkArrayInGroups(arr, size) {
    // Break it up.
    var i = 0;
    var result = [];
    while(i<arr.length){
        result.push(arr.slice(i,i+size));
        i+=size;
    }


    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));