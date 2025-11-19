   function swapImage(clickedThumb) {
      let mainImage = document.getElementById("mainImage");
      let tempSrc = mainImage.src;
      mainImage.src = clickedThumb.src;
    }