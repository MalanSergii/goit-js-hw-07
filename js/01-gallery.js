import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ==============================================================

const galleryFirst = document.querySelector(".gallery")

function createElements(data) {
    return data.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join("")
}

galleryFirst.innerHTML = createElements(galleryItems);

galleryFirst.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show()

    window.addEventListener("keydown", onEscapePress)

    function onEscapePress(event) {
    if (event.code === "Escape") {
            instance.close()
        }
    }
})

