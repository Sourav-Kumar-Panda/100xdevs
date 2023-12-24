
function sum(a,b,functionToCall){
    let result = a+b;
    functionToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+data);
}

//you are only allow to call one function after this
// how will you display result of the sum
const ans = sum(10,20,displayResult);
//This is called as callbacks, where we pass another function as an argument in other function.

console.log(ans);