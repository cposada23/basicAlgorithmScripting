function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    return arr.filter(function (val) {
        return val;
    });
}

console.log(bouncer([7,undefined, "ate",null, "", false, 9, NaN]));