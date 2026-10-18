const fullName = "Lazzat Tolegenova";

log("Full name: " + fullName);
log("Length: " + fullName.length);              // property, no parentheses
log("Uppercase: " + fullName.toUpperCase());    // method, with parentheses
log("Lowercase: " + fullName.toLowerCase());
log("First three characters: " + fullName.slice(0, 3));

const part1 = "My name is";
const part2 = "and I study at Astana IT University.";
log(part1 + " " + fullName + " " + part2);
