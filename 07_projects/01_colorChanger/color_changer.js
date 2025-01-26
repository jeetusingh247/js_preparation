console.log("Welcome to My Code!");

// Button functionality to change the background color
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const color = e.target.id;
    if (color) {
      body.style.backgroundColor = color;
      console.log(`Background changed to ${color}`);
    } else {
      console.warn("Button color not found");
    }
  });
});
