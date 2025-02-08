const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

yesButton.addEventListener("click", () => {
    message.innerHTML = "¡Yeiiii!¡Sabía que dirías que sí! ❤️<3";
});

noButton.addEventListener("mouseover", () => {
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});