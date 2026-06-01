import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images, gallery) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${image.likes}
          </p>

          <p class="info-item">
            <b>Views</b>
            ${image.views}
          </p>

          <p class="info-item">
            <b>Comments</b>
            ${image.comments}
          </p>

          <p class="info-item">
            <b>Downloads</b>
            ${image.downloads}
          </p>
        </div>
      </li>
    `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function showLoader(loader) {
  loader.style.display = 'block';
}

export function hideLoader(loader) {
  loader.style.display = 'none';
}

export function showLoadMoreButton(button) {
  button.style.display = 'block';
}

export function hideLoadMoreButton(button) {
  button.style.display = 'none';
}
