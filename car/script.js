const IMAGES = [
    { name: "AMG GT", file: "car1.jfif" },
    { name: "C-CLASS", file: "car2.jpg" },
    { name: "S550", file: "car3.jpg" },
    { name: "G-CLASS", file: "car4.jpg" }
];

const thumbs = document.querySelector(".thumbs");
const big = document.querySelector(".big > img");
const caption = document.getElementById("caption");

function render() {
    for (const image of IMAGES) {
        const img = document.createElement("img");
        img.setAttribute("src", `./${image.file}`);
        img.setAttribute("alt", image.name);
        thumbs.appendChild(img);

        img.addEventListener("click", function () {
            changeActiveImage(image, img);
        });
    }
}

function changeActiveImage(image, element) {
    big.setAttribute("src", `./${image.file}`);
    caption.innerText = image.name;

    const allThumbs = thumbs.querySelectorAll("img");
    for (const thumb of allThumbs) {
        thumb.classList.remove("border");
    }

    element.classList.add("border");
}

window.addEventListener("load", render);
