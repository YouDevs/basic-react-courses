// PURE FUNCTION
// Given the same input, it will always return the same result.
function checkAge(age){
    let minimum = 18;
    return age >= minimum // False
}
checkAge(16);

// IMPURE FUNCTION
var minimum = 15;
function checkAge(age){
    return >= minimum // IT DEPENEDS WHAT MINIMUN VALUE IS...
}
checkAge(16);
