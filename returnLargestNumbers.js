function largestOfFour(arr) {
    // You can do this!
    var newArr = [];

    arr.forEach(function (val) {
        num = val.reduce(function (a, b) {
            return (a>b)?a:b;
        });

        newArr.push(num);
    });
    return newArr;
}

var newArr = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(newArr);