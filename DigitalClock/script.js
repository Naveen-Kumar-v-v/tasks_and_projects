function timedisplay() {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    const periodElement = document.getElementById("period");
    const date = new Date();
    let hour = date.getHours(); 
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(date.getDay(), date.getDate(), date.getMonth() + 1, date.getFullYear());
    
    let period = "AM";
    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }
    hourElement.textContent = String(hour).padStart(2, '0');
    minuteElement.textContent = String(minute).padStart(2, '0');
    secondElement.textContent = String(second).padStart(2, '0');
    periodElement.textContent = period;
}
timedisplay();
setInterval(timedisplay, 500);

function updateDate() {
    const dateElement = document.getElementById("date");
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const date = new Date();
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    dateElement.innerHTML = `${dayName}, ${monthName} ${day} ${year}`;
}

updateDate();
setInterval(updateDate, 60000);