const group = "MT-2505";

function runTask7() {
  clearOutput();
  const name = prompt("What is your name?");
  alert("Hello, " + name + "! Welcome!");

  const greeting = `Hello, ${name} from group ${group}!`;
  log(greeting);
}
