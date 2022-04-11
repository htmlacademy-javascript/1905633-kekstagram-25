const uploadPicture = function () {
  const uploadInput = document.querySelector('#upload-file');
  const picturePreview = document.querySelector('.img-upload__picture');
  const effectsPreview = document.querySelectorAll('.effects__preview');
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    picturePreview.src = URL.createObjectURL(file);
    effectsPreview.forEach ((element) => {
      element.style.backgroundImage = `url("${URL.createObjectURL(file)}")`;
    });
  }
};

export { uploadPicture };

// ░░▒░░█░
// ░░▒░█
// ░░░█
// ░░█░░░░███████
// ░██░░░██▓▓███▓██▒
// ██░░░█▓▓▓▓▓▓▓█▓████
// ██░░██▓▓▓(◐)▓█▓█▓█
// ███▓▓▓█▓▓    ▓█▓▓▓▓█
// ▀██▓▓█░██▓▓▓▓██▓▓▓▓▓█
// ░▀██▀░░█▓▓▓▓▓▓▓▓▓▓▓▓▓█
// ░░░░▒░░░█▓▓▓▓▓█▓▓▓▓▓▓█
// ░░░░▒░░░█▓▓▓▓█▓█▓▓▓▓▓█
// ░▒░░▒░░░█▓▓▓█▓▓▓█▓▓▓▓█
// ░▒░░▒░░░█▓▓▓█░░░█▓▓▓█
// ░▒░░▒░░██▓██░░░██▓▓██

// ПРИВЕТ, ЕГОР!
// УРА, ЭТО БЫЛА ПОСЛЕДНЯЯ ДОМАШКА! Я СПРАВИЛСЯ!!!


