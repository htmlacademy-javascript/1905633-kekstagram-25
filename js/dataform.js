import { refreshForm, closeModal } from './util.js';

const dataformToggle = function () {
  const imageUploadWindow = document.querySelector('.img-upload__overlay');
  const imageUploadInput = document.querySelector('.img-upload__input');
  const body = document.querySelector('body');

  imageUploadInput.addEventListener('change', () => {
    imageUploadWindow.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  closeModal(refreshForm);

  const listOfClosed = {};

  function isFieldFocused(field) {
    const place = document.querySelector(`.text__${field}`);
    place.addEventListener('focus', () => {
      listOfClosed[field] = true;
    });
    place.addEventListener('blur', () => {
      listOfClosed[field] = false;
    });
  }

  isFieldFocused('hashtags');
  isFieldFocused('description');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (!listOfClosed['hashtags'] && !listOfClosed['description']) {
        imageUploadWindow.classList.add('hidden');
        body.classList.remove('modal-open');
        refreshForm();
      }
    }
  });


};

export { dataformToggle };
