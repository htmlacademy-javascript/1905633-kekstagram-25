function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function refreshForm() {
  const imageUploadInput = document.querySelector('.img-upload__input');
  const imageUploadHashtag = document.querySelector('.text__hashtags');
  const imageUploadComment = document.querySelector('.text__description');
  const picturePreview = document.querySelector('.img-upload__picture');
  const errorLabel = document.querySelector('.text__hashtag-error');

  imageUploadInput.value = '';
  imageUploadHashtag.value = '';
  imageUploadComment.value = '';
  picturePreview.className = '';
  picturePreview.classList.add('img-upload__picture');
  const scale = document.querySelector('.scale__control--value');
  scale.value = '100%';
  picturePreview.style = '';
  errorLabel.textContent = '';
}

function closeModal(refresh) {
  const imageUploadWindow = document.querySelector('.img-upload__overlay');
  const body = document.querySelector('body');
  const imageUploadCloseButton = document.querySelector('.img-upload__cancel');

  imageUploadCloseButton.addEventListener('click', () => {
    imageUploadWindow.classList.add('hidden');
    body.classList.remove('modal-open');
    refresh();
  });
}

function getContentOfTemplate(templateID, sectionClass) {
  const template = document.querySelector(`#${templateID}`).content;
  const section = template.querySelector(`.${sectionClass}`);
  const clonedSection = section.cloneNode(true);
  return clonedSection;
}

function hideElementOnClickOutside(clickElement, hideElement) {
  document.addEventListener('click', () => {
    hideElement.remove();
  });
  clickElement.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
}

function hideElementOnESC(element) {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      element.remove();
    }
  });
}

function hideElementOnButtonClick(element) {
  const button = element.querySelector('button');
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.remove();
  });
}

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export {
  getRandomPositiveInteger, refreshForm,
  closeModal, getContentOfTemplate, hideElementOnClickOutside, hideElementOnESC, hideElementOnButtonClick,
  shuffleArray
};
