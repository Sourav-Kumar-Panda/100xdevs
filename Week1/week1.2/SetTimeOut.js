function greet() {
    console.log("Hello world!");
}
setTimeout(greet,5*1000);

//syntax
// setTimeout(function, delay);

// function: The function to be executed after the specified delay.
// delay: The time (in milliseconds) to wait before executing the function.

// example
// Set a timeout for 2000 milliseconds (2 seconds)
// setTimeout(delayedFunction, 2*1000);


// // example
// You can also use an anonymous function directly as the first argument:

// Using an anonymous function
// setTimeout(function() {
//     console.log("This function was delayed with an anonymous function!");
// }, 3000);

//imp
// Keep in mind that JavaScript is single-threaded, so while setTimeout introduces a delay,
// it doesn't pause the execution of the entire program.
// It schedules the provided function to be run after the specified time,
// allowing the rest of the code to continue executing.