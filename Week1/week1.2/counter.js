// Create a counter in Javascript (counts down from 30 to 0)

let num = 30;
function count(){
    console.log(num);
    num--;
    if(num<0){
        clearInterval(setTime);
    }
}

let setTime = setInterval(count,1000);


// important concept
// const intervalId = setInterval(countdown, 1000);

// clearInterval(intervalId); to stop the interval and prevent the countdown function from being called repeatedly.