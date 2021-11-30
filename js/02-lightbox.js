import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// ========================================================================

const gallerySecond = document.querySelector(".gallery");

function createElements(data) {
    return data.map(({ description, original, preview }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("")
}

gallerySecond.innerHTML = createElements(galleryItems);

gallerySecond.addEventListener("click", onPictureClick)

function onPictureClick(event) {
    event.preventDefault();
}

const imgAltOptions = {
    captionsData: "alt",
    captionDelay: 250
}
const lightbox = new SimpleLightbox('.gallery a', imgAltOptions);