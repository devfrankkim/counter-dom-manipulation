const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const classContainer = e.currentTarget.classList;

    if (classContainer.contains("decrease")) {
      count--;
    } else if (classContainer.contains("increase")) {
      count++;
    } else if (classContainer.contains("reset")) {
      count = 0;
    }
    value.textContent = count;

    if (count > 0 ? (value.style.color = "blue") : (value.style.color = "red"))
      if (count === 0) {
        value.style.color = "black";
      }
  });
});
