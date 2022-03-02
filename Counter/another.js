const eidulfitr = "4 march 2022";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minsDiv = document.getElementById("mins");
const secDiv = document.getElementById("sec");
function countdown(){
    const eidday = new Date(eidulfitr);
    const currentday = new Date();

    const totaltime = (eidday- currentday)/1000;
    const days = Math.floor(totaltime / 3600 / 24);
    const hours = Math.floor((totaltime /3600) % 24);
    const mins = Math.floor(totaltime / 60) % 60;
    const seconds = Math.floor(totaltime) % 60;


    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minsDiv.innerHTML = mins;
    secDiv.innerHTML = seconds;

    console.log(days, hours, mins, seconds);
}
countdown();
setInterval(countdown, 1000);
