const startPanel = document.getElementsByClassName("startPanel")[0];
const loader = document.getElementById("loader");
const product = document.getElementById("product");
const startButton = document.getElementById("btn");

startButton.addEventListener("click", () => {
  startPanel.classList.add("is-hidden");
  loader.classList.remove("is-hidden");
  setTimeout(function () {
    loader.classList.add("is-hidden");
  }, 3000);
});