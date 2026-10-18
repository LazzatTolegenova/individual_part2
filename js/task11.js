function showHumanAge(dogAge) {
  const humanAge = (dogAge - 2) * 4 + 21;
  log(`A dog aged ${dogAge} is ${humanAge} in human years.`);
}

showHumanAge(2); // (2-2)*4+21 = 21
showHumanAge(5); // (5-2)*4+21 = 33
