import { refreshForm, closeModal } from './util.js';
import { uploadPicture } from './upload.js';

const toggleDataform = () => {
  const imageUploadWindow = document.querySelector('.img-upload__overlay');
  const imageUploadInput = document.querySelector('.img-upload__input');
  const body = document.querySelector('body');

  imageUploadInput.addEventListener('change', () => {
    imageUploadWindow.classList.remove('hidden');
    body.classList.add('modal-open');
    uploadPicture();
  });

  closeModal(refreshForm);

  const listOfFocused = {};
  const getFieldFocused = (field) => {
    const place = document.querySelector(`.text__${field}`);
    place.addEventListener('focus', () => {
      listOfFocused[field] = true;
    });
    place.addEventListener('blur', () => {
      listOfFocused[field] = false;
    });
  };


  getFieldFocused('hashtags');
  getFieldFocused('description');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (!listOfFocused['hashtags'] && !listOfFocused['description']) {
        imageUploadWindow.classList.add('hidden');
        body.classList.remove('modal-open');
        refreshForm();
      }
    }
  });


};

export { toggleDataform };
