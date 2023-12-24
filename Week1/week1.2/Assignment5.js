
// . Write a program to print the biggest number in an arrya

let arr = [10,20,40,100,32];

let num = arr[0];
for(let i = 0; i<arr.length;i++){
    if(num < arr[i]){
        num = arr[i];
    }
}
console.log(num);