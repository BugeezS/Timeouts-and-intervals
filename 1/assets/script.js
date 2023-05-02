const section = document.querySelector("section");
const output = document.getElementById("test");
let array = ["W", "i", "l", "s", "o", "n", "-", "2"];
let index = 0;

function displayNextLetter() {
  if (index < array.length) {
    output.textContent += array[index];
    index++;
  } else {
    clearInterval(timer);
  }
}

let timer = setInterval(displayNextLetter, 1000);
