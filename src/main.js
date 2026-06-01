import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');

let page = 1;
let currentQuery = '';
let totalPages = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();

const query = event.target.elements['search-text'].value.trim();
     page = 1;
     currentQuery = query;

  if (query === '') {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });

    return;
    }
    
  clearGallery(gallery);
  hideLoadMoreButton(loadMoreButton);
  showLoader(loader);

  try {
const data = await getImagesByQuery(query, page);
const images = data.hits;
      
totalPages = Math.ceil(data.totalHits / 15);

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    renderGallery(images, gallery);
     if (page < totalPages) {
      showLoadMoreButton(loadMoreButton);
      }
      
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
    });
  } finally {
    hideLoader(loader);
  }

  form.reset();
});


loadMoreButton.addEventListener('click', async () => {
  page += 1;

  showLoader(loader);

  try {
    const data = await getImagesByQuery(currentQuery, page);
    const images = data.hits;

      renderGallery(images, gallery);
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
      if (page >= totalPages) {
  hideLoadMoreButton(loadMoreButton);

  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
    });
  } finally {
    hideLoader(loader);
  }
});