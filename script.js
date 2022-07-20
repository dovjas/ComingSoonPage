const timerBlock = document.querySelector('.middle-block');

const startDate = new Date('December 31,2022 20:00:00').getTime();
console.log(startDate)
const timer = setInterval(timeCounter,1000)
console.log(timer)
function timeCounter(){
    let now = new Date().getTime();
    let countDown = startDate - now;

    // Date calculation
    let day = Math.floor(countDown / (1000 * 60 * 60 * 24))
    console.log(day)
 
    // Hour calculation
    let hour = Math.floor((countDown % (1000 * 60 * 60 * 24))/(1000 * 60 * 60 * 24));
    console.log(hour)

    // Minutes calculation
    let min = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60 * 60));
    console.log(min)

    // Seconds calculation
    let sec = Math.floor((countDown % (1000*60)) / (1000))
    console.log(sec)
}