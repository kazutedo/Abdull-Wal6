const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let min = day.getMinutes() * deg;
    let sec = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hour + (min/12)}deg)`;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
});