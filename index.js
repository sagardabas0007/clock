const h = document.querySelector("#hour-hand");
const m = document.querySelector("#minute-hand");
const s = document.querySelector("#seconds-hand");
console.log(h, m, s);


function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const secondsAngle = seconds * 6;
    const minutesAngle = minutes * 6 + seconds * 0.3;
    const hoursAngle = hours * 6 + minutes * 0.3;

    h.style.transform = `translateX(50%) rotate(${hoursAngle}deg)`
    m.style.transform = `translateX(50%) rotate(${minutesAngle}deg)`
    s.style.transform = `translateX(50%) rotate(${secondsAngle}deg)`

}

updateClock();

setInterval(updateClock, 1000);
