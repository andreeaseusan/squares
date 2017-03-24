function setup (){
createCanvas(500, 500);
}

function draw (){
  
colorMode(HSB, 500);
for (i = 0; i < 500; i+=12) {
  for (j = 0; j < 500; j+=12) {
    stroke(i, j, 500);
    fill(i, j, 500)
    rect(i, j, 12, 12);
  }
}
}
