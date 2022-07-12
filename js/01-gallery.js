import { galleryItems } from './gallery-items.js';
// Change code below this line



const mainContainer = document.querySelector(".gallery");

const imageEl = galleryItems.map(el=>{
const galleryEl = `<div class="gallery__item">
<a class="gallery__link" href=${el.original}>
  <img
    class="gallery__image"
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</div>`
return galleryEl
})

mainContainer.insertAdjacentHTML("beforeend",imageEl.join(" "))


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



