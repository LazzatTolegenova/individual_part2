function greetUser(name) {
  log("Hello, " + name + "!");
}

function calculateSum(a, b) {
  return a + b;
}

function calculateRectangleArea(width, height) {
  return width * height;
}

greetUser("Lazzat");
greetUser("Sultan");

log("calculateSum(3, 4) = " + calculateSum(3, 4));
log("calculateSum(10, 25) = " + calculateSum(10, 25));

log("calculateRectangleArea(5, 3) = " + calculateRectangleArea(5, 3));
log("calculateRectangleArea(10, 7) = " + calculateRectangleArea(10, 7));
