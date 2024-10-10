//new Date() .toDateString()     ->   current date
//new Date() .toTimeString()     ->   current time
//new Date() .getHours()         ->   current hour
//new Date() .getMinutes()       ->   current minute
//new Date() .getSeconds()       ->   current second
//new Date() .getMilliseconds()  ->   current millisec

//new Date() .toLocaleString()   ->   Current Date + Time


let time = document.querySelector("#time");

setInterval(() => {
    let d = new Date();
    
    // Get the day name
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[d.getDay()];  // Get the day of the week
    
    // Format the date and time
    let formattedTime = `${dayName}\n${d.toLocaleString()}`; // Display day at the top
    
    time.value = formattedTime;  // Set the value of the input to the formatted date, time and day
}, 1000);

 