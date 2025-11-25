function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let container = document.getElementById("container");
let mainCounter = document.getElementById("mainCounter");
let allclicks = 0;

for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    box.addEventListener("click", () => {
        allclicks++;
        box.style.backgroundColor = getRandomColor();
        mainCounter.textContent = " Number of clicks: " + allclicks;
    });

    container.appendChild(box);
}