var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime (m);
s = checkTime (s);
document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
var t = setTimeout(startTime, 1);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

function getRandomColor() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}