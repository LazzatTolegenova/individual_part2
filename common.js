function log(message) {
  console.log(message);
  const out = document.getElementById("output");
  if (out) out.textContent += message + "\n";
}

function clearOutput() {
  const out = document.getElementById("output");
  if (out) out.textContent = "";
}
