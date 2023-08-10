let display = document.getElementById("time");
let Displayday = document.getElementById("dayName");

// console.log(display)

setInterval(currentTime, 1000)

function currentTime(){
  let time = new Date();
  // console.log(time)
  // let date = time.getDate()
  // console.log(date)
  let hours = time.getHours();
  // console.log(hours)
  let minutes = time.getMinutes();
  // console.log(minutes)
  let seconds = time.getSeconds();
  // console.log(seconds)
  let day = time.getDay()
  // console.log(day)
  let month = time.getMonth()

  let date = time.getDate();

  let fullYear = time.getFullYear();
  // console.log(fullYear) 
  
  // console.log(`${hours} ${minutes} ${seconds}`)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var amorpm = "AM";

  if(hours == 12){
    amorpm = "PM";
  };

  if(hours > 12){
    hours -= 12
    amorpm = "PM";
  };

  if(hours == 0){
    hours = 12;
    amorpm = "AM";
  };

  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','Febrauary','March','April','May','June','July','August','September','Octomber','November','December'];

  let currentDay = days[day];
  let currentMonth = months[month];

  Displayday.innerHTML = `${currentDay}, ${currentMonth} ${date}, ${fullYear}`;

  // console.log(currentDay + currentMonth)

  // console.log(days[day])

  let displayTime = `${hours}:${minutes}:${seconds} ${amorpm}`;
  
  display.innerHTML = displayTime;

  // console.log(`${hours} ${minutes} ${seconds}`)




};

currentTime()

