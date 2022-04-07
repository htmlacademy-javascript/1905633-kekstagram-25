const dataformToggle = function () {
  const imageUploadWindow = document.querySelector('.img-upload__overlay');
  const imageUploadInput = document.querySelector('.img-upload__input');
  const imageUploadHashtag = document.querySelector('.text__hashtags');
  const imageUploadComment = document.querySelector('.text__description');
  const imageUploadCloseButton = document.querySelector('.img-upload__cancel');
  const picturePreview = document.querySelector('.img-upload__picture');
  const body = document.querySelector('body');

  imageUploadInput.addEventListener('change', () => {
    imageUploadWindow.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  function refreshForm() {
    imageUploadInput.value = '';
    imageUploadHashtag.value = '';
    imageUploadComment.value = '';
    picturePreview.className = '';
    picturePreview.classList.add('img-upload__picture');
    const scale = document.querySelector('.scale__control--value');
    scale.value = '100%';
    picturePreview.style = '';
  }

  imageUploadCloseButton.addEventListener('click', () => {
    imageUploadWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    refreshForm();
  });

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
