let p1, p2, p3;
let colors = [120,120,120]

function mapAngleToColor(angle){
    return map(Math.abs(angle), 0.0, 1.0, 0, 255)
}


function setup()  {
  createCanvas(1000,800);
  // Make a new Pendulum with an origin position and armlength
    p1 = new Pendulum(createVector(800,0),175)
    p2 = new Pendulum(createVector(800,200), 125)
    p3 = new Pendulum(createVector(800,400), 100)
    pendulums = [p1,p2,p3]
}

function draw() {
  
  background(colors);
  pendulums.forEach((pendulum, i) => {
    colors[i] = mapAngleToColor(pendulum.angle)  
    pendulum.go()
  })
}
