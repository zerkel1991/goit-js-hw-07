import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const frag = document.createDocumentFragment()

galleryItems.forEach(element => {
    const image = `<a class="gallery__item" href=${element.original}>
    <img class="gallery__image" src=${element.preview} alt=${element.description} />
  </a>`
  galleryEl.insertAdjacentHTML("beforeend", image);
});
galleryEl.append(frag)

var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",captionPosition:"bottom",captionDelay : 250 });

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
























console.log(galleryItems);
