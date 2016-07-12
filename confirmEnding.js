
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var subStr = str.substr(str.length- target.length, str.length);
    return subStr === target;
}

confirmEnding("He has to give me a new name", "me");