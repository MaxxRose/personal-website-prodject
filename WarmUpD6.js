var counter = 0; 
setInterval(function()){
    notepad.clear Rect(0,0,500,500)
    if (counter%2===0) {
        notepad.stroke(50, 50, 100, 50);
}
else {
    notepad.strokeRect(50, 50, 100, 50);
}
counter++;
},1000);