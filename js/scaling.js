const scalePictures = () => {
  const decreaseSize = document.querySelector('.scale__control--smaller');
  const increaseSize = document.querySelector('.scale__control--bigger');
  const currentSize = document.querySelector('.scale__control--value');
  const picture = document.querySelector('.img-upload__picture');

  let size = 100;
  const sizeLowerLimit = 25;
  const sizeUpperLimit = 100;
  const sizeDefault = 100;
  const sizeStep = 25;


  currentSize.value = `${size}%`;

  decreaseSize.addEventListener('click', () => {
    if (size > sizeLowerLimit) {
      size -= sizeStep;
      currentSize.value = `${size}%`;
      picture.style.transform = `scale(${size / 100})`;
    }
  });

  increaseSize.addEventListener('click', () => {
    if (size < sizeUpperLimit) {
      size += sizeStep;
      currentSize.value = `${size}%`;
      picture.style.transform = `scale(${size / 100})`;
    }
  });

  const imageUploadCloseButton = document.querySelector('.img-upload__cancel');
  imageUploadCloseButton.addEventListener('click', () => {
    size = sizeDefault;
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      size = sizeDefault;
    }
  });
};

export { scalePictures };
