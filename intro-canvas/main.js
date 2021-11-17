var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw (){
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.fillRect(5, 0, 55, 5); /// pixels
ctx.fillRect(0, 5, 5, 75);
ctx.stroke();
ctx.fillRect(60, 5, 5, 75);
ctx.fillRect(5, 80, 5, 5);
ctx.fillRect(55, 80, 5, 5);
ctx.fillRect(10, 85, 5, 5);
ctx.fillRect(50, 85, 5, 5);
ctx.fillRect(15, 90, 5, 5);
ctx.fillRect(45, 90, 5, 5);
ctx.fillRect(20, 95, 25, 5);
ctx.fillRect(10, 45, 5, 25);
ctx.fillRect(50, 45, 5, 25);
ctx.fillRect(45, 70, 5, 5);
ctx.fillRect(15, 70, 5, 5);
ctx.fillRect(25, 35, 5, 5);
ctx.fillRect(35, 35, 5, 5);
ctx.fillRect(10, 30, 10, 5);
ctx.fillRect(45, 30, 10, 5);
ctx.fillRect(5, 25, 5, 5);
ctx.fillRect(55, 25, 5, 5);
ctx.fillRect(20, 25, 5, 5);
ctx.fillRect(40, 25, 5, 5);
ctx.fillRect(10, 20, 5, 5);
ctx.fillRect(50, 20, 5, 5);
ctx.fillRect(15, 15, 10, 5);
ctx.fillRect(40, 15, 10, 5);
ctx.fillRect(25, 20, 5, 5);
ctx.fillRect(25, 20, 5, 5);
ctx.fillRect(20, 85, 10, 5);
ctx.fillRect(35, 85, 10, 5);
ctx.fillRect(30, 90, 5, 5);
ctx.fillRect(35, 20, 5, 5);
}
draw ()
