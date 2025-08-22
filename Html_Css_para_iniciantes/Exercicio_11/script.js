const images = document.querySelectorAll('#gallery li img');

function changeGallery(event) {
  const principal = document.querySelector("#principal-image");
  const clicked = event.currentTarget;
  principal.src = clicked.src;
  principal.alt = clicked.alt;
}

function galleryClick(image) {
  image.addEventListener('click', changeGallery);
}

images.forEach(galleryClick);