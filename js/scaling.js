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
      picture.style.transform = `scale(${size/100})`;
    }
  });

  increaseSize.addEventListener('click', () => {
    if (size < 100) {
      size += 25;
      currentSize.value = `${size}%`;
      picture.style.transform = `scale(${size/100})`;
    }
  });
}

export { scalePictures };
