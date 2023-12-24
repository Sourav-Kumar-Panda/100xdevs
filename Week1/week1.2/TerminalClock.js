function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Clear the terminal (console) before printing the new time
    console.clear();

    console.log(""+hours+":"+minutes+":"+seconds);
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial update to display the time immediately
updateClock();
