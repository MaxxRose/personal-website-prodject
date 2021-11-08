var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.fillRect(50, 50, 150, 80);
ctx.stroke();
