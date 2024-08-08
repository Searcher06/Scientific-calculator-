//let screen = document.getElementById('screen')
function display(num) {
    let screen = document.getElementById('screen');
    screen.value += num
}
function calculate() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    }
    catch (err) {
        screen.value = "invalid arithmetic 🤣"
    }
}
function del() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1)
}
function clr() {
    let screen = document.getElementById('screen');
    screen.value = "";
}
function sqr() {
    let screen = document.getElementById('screen');
    screen.value = Math.sqrt(screen.value)
}
function log() {
    let screen = document.getElementById('screen');
    screen.value = Math.log10(screen.value)
}
function tan() {
    let screen = document.getElementById('screen');
    screen.value = Math.tan(screen.value)
}
function sin() {
    let screen = document.getElementById('screen');
    screen.value = Math.sin(screen.value)
}
function cos() {
    let screen = document.getElementById('screen');
    screen.value = Math.cos(screen.value)
}
function exp() {
    let screen = document.getElementById('screen');
    screen.value = Math.exp(screen.value)
}
function random() {
    let screen = document.getElementById('screen');
    screen.value = Math.random()
}
function square() {
    let screen = document.getElementById('screen');
    screen.value = Math.pow(screen.value, 2)
}
function change() {
    const colors = [
        "rgb(69, 219, 69)",
        "rgb(164, 69, 219)",
        "rgb(203, 241, 29)",
        "rgb(224, 123, 28)",
        "rgba(240, 236, 16, 0.932)",
        "rgba(17, 224, 17, 0.932)",
        "rgb(224, 17, 86)",
        "rgb(150, 16, 60)",
        "rgb(150, 16, 16)",
        "rgb(17, 241, 185)",
        "rgb(6, 7, 7)",
        "rgb(55, 11, 66)",
        "rgb(100, 12, 46)",
        "rgb(245, 19, 19)",
        "rgb(128, 245, 19)",
        "rgb(41, 35, 136)"
    ]
    let randomColor = colors[Math.floor(Math.random() * 16) + 1];
    cureentColor = randomColor;
    return document.getElementById('cname').style.color = cureentColor,
        document.getElementById('footer').style.backgroundColor = randomColor;
}
//clock section

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours >= 12) {
        hours = hours - 12;
        seconds = seconds + "pm"
    } else {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        seconds = seconds + "am"
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock-container').value = timeString;
}
setInterval(updateClock, 1000);

/* 
if (hours >= 12) {
        hours = hours - 12;
        seconds = seconds + document.getElementById('pm').innerHTML;
    } else {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        seconds = seconds + document.getElementById('am').innerHTML;
    } 
    */