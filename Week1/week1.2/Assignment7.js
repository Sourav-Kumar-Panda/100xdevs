
// Write a program that prints all the male people’s first name given a complex object

let object1 = new Object();
object1.name="John";
object1.age=30;
object1.gender = "male"

let object2 = new Object();
object2.name = "geetika";
object2.age = 22;
object2.gender = "Female"

let object3 = new Object();
object3.name  = "anup";
object3.age = 22;
object3.gender = "male";


const arr = [object1,object2,object3];

for( let i = 0; i<arr.length; i++){
    if(arr[i]["gender"]==="male"){
        console.log(arr[i]["name"]);
    }
}