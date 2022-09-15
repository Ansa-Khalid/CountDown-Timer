const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const newYears='1 Jan 2023';
function countdown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const Tseconds=(newYearDate-currentDate)/1000;
    const days=Math.floor(Tseconds/3600/24);
    const hours=Math.floor(Tseconds/3600)%24;
    const mins=Math.floor(Tseconds/60)%60;
    const seconds=Math.floor(Tseconds)%60;
    daysEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(seconds);
    console.log(days,hours,mins,seconds);
}
let formatTime=(time)=> time <10 ? `0${time}`:time;
countdown();
setInterval(countdown,1000)