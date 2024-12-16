let fibs = [0, 1, 1, 2];
let n = 1;

function setup() {
  createCanvas(400, 400);
  noLoop();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text(`${n}th Fibonacci number: ${fib(n)}`, width / 2, height / 2);
}

function keyPressed() {
  if (key === " ") {
    n += 1;
    redraw();
  }
}

function fib(n) {
  if (n < 1) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
