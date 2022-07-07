var ball={
  x:50,
  y:50,
  r:20,
  color:["blue","green"],
  xspeed:0,
  yspeed:0

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill (ball.color[1]) 
  ball.xspeed=2
  ball.x=ball.x+ball.xspeed
}