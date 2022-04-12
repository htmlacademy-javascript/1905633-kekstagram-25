function scalePictures() {
  const decreaseSize = document.querySelector('.scale__control--smaller');
  const increaseSize = document.querySelector('.scale__control--bigger');
  const currentSize = document.querySelector('.scale__control--value');
  const picture = document.querySelector('.img-upload__picture');

  let size = 100;
  currentSize.value = `${size}%`;

  decreaseSize.addEventListener('click', () => {
    if (size > 25) {
      size -= 25;
      currentSize.value = `${size}%`;
      picture.style.transform = `scale(${size / 100})`;
    }
  });

  increaseSize.addEventListener('click', () => {
    if (size < 100) {
      size += 25;
      currentSize.value = `${size}%`;
      picture.style.transform = `scale(${size / 100})`;
    }
  });

  const imageUploadCloseButton = document.querySelector('.img-upload__cancel');
  imageUploadCloseButton.addEventListener('click', () => {
    size = 100;
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      size = 100;
    }
  });
}

export { scalePictures };
