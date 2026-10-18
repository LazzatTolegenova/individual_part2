function runTask8() {
  clearOutput();
  const a = Number(prompt("Enter the first number:"));
  const b = Number(prompt("Enter the second number (not 0):"));

  log("First number: " + a);
  log("Second number: " + b);
  log("Sum: " + (a + b));
  log("Difference: " + (a - b));
  log("Product: " + (a * b));
  log("Quotient: " + (a / b));
  log("Remainder: " + (a % b));

  log('"12" + "5" = ' + ("12" + "5"));
  log("Number(\"12\") + Number(\"5\") = " + (Number("12") + Number("5")));
}
