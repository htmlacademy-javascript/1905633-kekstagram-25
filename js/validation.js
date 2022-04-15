import { getContentOfTemplate, hideElementOnClickOutside, hideElementOnESC, refreshForm, hideElementOnButtonClick } from './util.js';

const form = document.querySelector('.img-upload__form');
const allowFormSending = {
  hashtags: false,
  comments: false
};

// const pristine = new Pristine(form, {
//   classTo: 'text__hashtag-error',
//   errorTextParent: 'text__hashtag-error',
//   errorTextClass: 'text__hashtag-error-text',
// });

const checkIfDuplicateExists = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  return new Set(array).size !== array.length;
};

const limitLettersAndNumbers = (str) => {
  const hashWithNoFirstChar = str.substring(1, str.length);
  return /^[A-Za-z0-9]*$/.test(hashWithNoFirstChar);
};

const writeError = (field, error) => {
  const errorLabel = document.querySelector(`.text__${field}-error`);
  errorLabel.textContent = error;
  errorLabel.style.color = '#FF0000';
};

const checkHashtags = (list) => {
  const hashtagSymbolLimit = 20;
  const hashtagWordLimit = 5;
  let failedChecks = 0;
  if (list.length === 1 && list[0] === '') {
    return true;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] === '') {
      writeError('hashtag', 'Уберите двойной пробел');
      failedChecks++;
      return false;
    } else {
      if (!limitLettersAndNumbers(list[i])) {
        failedChecks++;
        writeError('hashtag', 'Тэг должен состоять только из букв и цифр');
      }
      if (list[i].charAt(0) !== '#') {
        failedChecks++;
        writeError('hashtag', 'Нет # в начале');
      }
      if (list[i].length > hashtagSymbolLimit) {
        writeError('hashtag', `Тэг длиннее ${hashtagSymbolLimit} символов`);
        failedChecks++;
      }
      if (list[i].charAt(0) === '#' && list[i].length === 1) {
        writeError('hashtag', 'Тэг не может состоять только из #');
        failedChecks++;
      }
      if (list[i].includes('#', 2)) {
        writeError('hashtag', 'Тэги должны разделяться пробелами');
        failedChecks++;
      }
    }
  }
  if (checkIfDuplicateExists(list)) {
    writeError('hashtag', 'Тэги не могут быть одинаковыми');
    failedChecks++;
  }
  if (list.length > hashtagWordLimit) {
    writeError('hashtag', `Тэгов не может быть больше ${hashtagWordLimit}`);
    failedChecks++;
  }
  if (failedChecks !== 0) {
    return false;
  }
  return true;
};

const checkComments = () => {
  const comment = document.querySelector('.text__description');
  const commentSymbolLimit = 140;
  if (comment.value.length > commentSymbolLimit) {
    writeError('description', `Комментарий не может быть длиннее ${commentSymbolLimit} символов`);
    document.querySelector('.text__hashtags').style.marginBottom = '0px';
    return false;
  }
  return true;
};

const validateForm = () => {
  const imageUploadHashtag = document.querySelector('.text__hashtags');

  imageUploadHashtag.addEventListener('change', () => {
    const hashtagText = imageUploadHashtag.value;
    const hashtagsList = hashtagText.split(' ');
    const upperField = document.querySelector('.img-upload__effects');
    upperField.style.marginBottom = '10px';

    if (checkHashtags(hashtagsList)) {
      const errorLabel = document.querySelector('.text__hashtag-error');
      errorLabel.textContent = '';
      upperField.style.marginBottom = '30px';
    }

    if (checkComments()) {
      const errorLabel = document.querySelector('.text__description-error');
      errorLabel.textContent = '';
      imageUploadHashtag.style.marginBottom = '20px';
    }
  });

  const feedbackOnSubmit = (feedbackType) => {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    const section = getContentOfTemplate(`${feedbackType}`, `${feedbackType}`);
    const sectionInner = section.querySelector(`.${feedbackType}__inner`);
    document.querySelector('.effect-level__slider').classList.add('hidden');
    document.querySelector('body').append(section);
    refreshForm();
    hideElementOnClickOutside(sectionInner, section);
    hideElementOnESC(section);
    hideElementOnButtonClick(section);
  };

  form.addEventListener('submit', (evt) => {
    const formData = new FormData(form);
    const hashtagText = imageUploadHashtag.value;
    const hashtagsList = hashtagText.split(' ');
    allowFormSending.hashtags = checkHashtags(hashtagsList);
    allowFormSending.comments = checkComments();
    if (!allowFormSending.hashtags || !allowFormSending.comments) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      fetch(
        'https://25.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData
        },
      )
        .then((responce) => {
          if (responce.ok) {
            feedbackOnSubmit('success');
          } else {
            feedbackOnSubmit('error');
          }
        }).catch(() => {
          feedbackOnSubmit('error');
        });
    }
  });
};


export { validateForm };
