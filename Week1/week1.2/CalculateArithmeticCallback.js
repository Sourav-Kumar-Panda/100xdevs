function calculateArithmetic(a,b,functionName) {
    let ans = functionName(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

let result = calculateArithmetic(10,20,sum);
console.log(result);

//callback means passing function inside other function.