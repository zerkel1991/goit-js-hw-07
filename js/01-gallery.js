import { galleryItems } from './gallery-items.js';
// Change code below this line



const mainContainer = document.querySelector(".gallery");
const frag = document.createDocumentFragment()
for (let i = 0; i < galleryItems.length; i += 1) {
    
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    frag.append(galleryItem);
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = galleryItems[i].original;
    galleryItem.append(galleryLink);
    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image")
    galleryImg.dataset.source = galleryItems[i].original;
    galleryImg.src = galleryItems[i].preview;
    galleryImg.alt = galleryItems[i].description;
    galleryLink.append(galleryImg);
 }
 mainContainer.append(frag);

 mainContainer.addEventListener('click',(event)=> {
    event.preventDefault()
    if (event.target.tagName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">
`)

instance.show()

})


