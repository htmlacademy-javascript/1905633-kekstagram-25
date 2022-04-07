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

function checkIfDuplicateExists(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return new Set(arr).size !== arr.length;
}

function onlyLettersAndNumbers(str) {
  const hashWithNoFirstChar = str.substring(1, str.length);
  return /^[A-Za-z0-9]*$/.test(hashWithNoFirstChar);
}

// field - это либо hashtag, либо description
function writeError(field, error) {
  const errorLabel = document.querySelector(`.text__${field}-error`);
  errorLabel.textContent = error;
  errorLabel.style.color = '#FF0000';
}

function checkHashtags(list) {
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
      if (!onlyLettersAndNumbers(list[i])) {
        failedChecks++;
        writeError('hashtag', 'Тэг должен состоять только из букв и цифр');
      }
      if (list[i].charAt(0) !== '#') {
        failedChecks++;
        writeError('hashtag', 'Нет # в начале');
      }
      if (list[i].length > 20) {
        writeError('hashtag', 'Тэг длиннее 20 символов');
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
  if (list.length > 5) {
    writeError('hashtag', 'Тэгов не может быть больше 5');
    failedChecks++;
  }
  if (failedChecks !== 0) {
    return false;
  }
  return true;
}

function checkComments() {
  const comment = document.querySelector('.text__description');
  if (comment.value.length > 140) {
    writeError('description', 'Комментарий не может быть длиннее 140 символов');
    document.querySelector('.text__hashtags').style.marginBottom = '0px';
    return false;
  }
  return true;
}

const formValidation = function () {
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

  form.addEventListener('submit', (evt) => {
    const hashtagText = imageUploadHashtag.value;
    const hashtagsList = hashtagText.split(' ');
    allowFormSending.hashtags = checkHashtags(hashtagsList);
    allowFormSending.comments = checkComments();
    if (!allowFormSending.hashtags || !allowFormSending.comments) {
      evt.preventDefault();
    }
  });
};


export { formValidation };
