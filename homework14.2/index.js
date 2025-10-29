function rendomimages() {
  let images = [
    "image/new.jpg",
    "image/download (2).jfif",
    "image/بگ گراند.png",
    "image/www.gahar_.ir_18.02.98-9.gif"
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const selectimg = images[randomImage]
  const img = document.createElement("image");
  img.src = selectimg;
  img.alt = "random image";
  img.style.width = "200px";
  img.style.margin = "10px";
  document.body.appendChild(img);
}